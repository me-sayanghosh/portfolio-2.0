'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
  useReducedMotion,
  type TargetAndTransition,
} from 'framer-motion';
import { cn } from '@/src/lib/utils';

export type Direction = 'top' | 'bottom' | 'left' | 'right';

export interface DirectionAwareItemData {
  label?: string;
  href?: string;
  words: string[];
  icon?: (filled: boolean, isSelected: boolean) => React.ReactNode;
}

const CORNER_POSITIONS = [
  '-top-[5px] -left-[5px]',
  '-top-[5px] -right-[5px]',
  '-right-[5px] -bottom-[5px]',
  '-bottom-[5px] -left-[5px]',
];

const CLIP_PATHS: Record<Direction, string> = {
  left: 'inset(0% 100% 0% 0%)',
  right: 'inset(0% 0% 0% 100%)',
  top: 'inset(0% 0% 100% 0%)',
  bottom: 'inset(100% 0% 0% 0%)',
};

const FILL_VARIANTS = {
  hidden: (dir: Direction) => ({ clipPath: CLIP_PATHS[dir] }),
  shown: { clipPath: 'inset(0% 0% 0% 0%)' },
};

const PADDING_X = 8;
const PADDING_Y = 3.5;

function getDirection(e: React.PointerEvent<HTMLElement>): Direction {
  const rect = e.currentTarget.getBoundingClientRect();
  const nx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2 || 1);
  const ny = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2 || 1);
  return Math.abs(nx) > Math.abs(ny)
    ? nx < 0
      ? 'left'
      : 'right'
    : ny < 0
    ? 'top'
    : 'bottom';
}

function RollingDigit({ value, instant }: { value: number; instant?: boolean }) {
  const spring = useSpring(value, { stiffness: 280, damping: 18, mass: 0.3 });
  const y = useTransform(spring, (v) => `${-v}em`);

  useEffect(() => {
    if (instant) {
      spring.jump(value);
    } else {
      spring.set(value);
    }
  }, [spring, value, instant]);

  return (
    <span className="relative inline-block h-[1em] w-[1ch] overflow-hidden leading-none">
      <motion.span
        className="absolute inset-x-0 top-0 flex flex-col items-center"
        style={{ y }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="h-[1em]">
            {i}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

function RollingNumber({ value, instant }: { value: number; instant?: boolean }) {
  const digits = String(Math.max(0, Math.round(value))).split('');
  return (
    <span className="inline-flex">
      {digits.map((digit, i) => (
        <RollingDigit
          key={digits.length - i}
          value={Number(digit)}
          instant={instant}
        />
      ))}
    </span>
  );
}

const CAVEAT_FONT_URL =
  'https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap';

const ARROW_PATH =
  'M76 9 C 62 3, 47 8, 43 19 C 39 31, 54 33, 50 23 C 46 13, 25 20, 11 41';
const HEAD_PATH =
  'M9 29 C 10 33, 10 37, 11 41 C 15 39, 18 38, 22 38';

export function SelectionHint({
  label = 'hover here',
  hidden = false,
  reduceMotion = false,
}: {
  label?: string;
  hidden?: boolean;
  reduceMotion?: boolean;
}) {
  const transition = (delay: number, duration: number) =>
    reduceMotion
      ? { duration: 0 }
      : {
          pathLength: { delay, duration, ease: [0.65, 0, 0.35, 1] },
          opacity: { delay, duration: 0.01 },
        };

  return (
    <motion.span
      aria-hidden
      initial={false}
      animate={{ opacity: hidden ? 0 : 1, y: hidden && !reduceMotion ? -4 : 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="pointer-events-none absolute bottom-[86%] left-[0.1em] flex items-start text-neutral-400 select-none z-30"
    >
      <svg
        viewBox="0 0 80 46"
        fill="none"
        className="h-[1.3em] w-[2.25em] shrink-0 overflow-visible"
      >
        <motion.path
          d={ARROW_PATH}
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={transition(0.5, 0.7)}
        />
        <motion.path
          d={HEAD_PATH}
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={transition(1.15, 0.25)}
        />
      </svg>
      <motion.span
        initial={!reduceMotion && { opacity: 0, rotate: -14, scale: 0.8 }}
        animate={{ opacity: 1, rotate: -8, scale: 1 }}
        transition={{ type: 'spring', bounce: 0.5, duration: 0.5, delay: 0.25 }}
        className="-mt-[0.55em] ml-[0.1em] origin-bottom-left text-[0.72em] leading-none font-semibold tracking-normal whitespace-nowrap text-neutral-300"
        style={{ fontFamily: "Caveat, 'Bradley Hand', 'Segoe Print', cursive" }}
      >
        {label}
      </motion.span>
    </motion.span>
  );
}

export interface DirectionAwareItemProps {
  item: DirectionAwareItemData;
  color?: string;
  showSize?: boolean;
  bounce?: number;
  reduceMotion?: boolean;
  onSelect?: (selected: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}

export function DirectionAwareItem({
  item,
  color = '#3074FE',
  showSize = true,
  bounce = 0.15,
  reduceMotion = false,
  onSelect,
  children,
  className,
}: DirectionAwareItemProps) {
  const containerRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const [selected, setSelected] = useState<{
    layer: number;
    box: { x: number; y: number; width: number; height: number };
  } | null>(null);

  const [direction, setDirection] = useState<{ enter: Direction; exit: Direction }>({
    enter: 'left',
    exit: 'right',
  });

  const selectLayer = (layer: number) => {
    const parent = containerRef.current;
    const target = elementsRef.current[layer];
    if (!parent || !target) return;

    const parentRect = parent.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const scale = parentRect.width / (parent.offsetWidth || parentRect.width || 1) || 1;

    setSelected({
      layer,
      box: {
        x: (targetRect.left - parentRect.left) / scale,
        y: (targetRect.top - parentRect.top) / scale,
        width: targetRect.width / scale,
        height: targetRect.height / scale,
      },
    });
    onSelect?.(true);
  };

  const clearSelection = () => {
    setSelected(null);
    onSelect?.(false);
  };

  const setRef = (index: number) => (el: HTMLElement | null) => {
    elementsRef.current[index] = el;
  };

  const frameBox = selected && {
    left: selected.box.x - PADDING_X,
    top: selected.box.y - PADDING_Y,
    width: selected.box.width + PADDING_X * 2,
    height: selected.box.height + PADDING_Y * 2,
  };

  const iconBox = selected?.layer === 0 ? frameBox : null;

  const instantTransition = { duration: 0 };
  const springBase = { type: 'spring' as const, bounce, duration: 0.35 };

  const frameTransition = reduceMotion
    ? instantTransition
    : {
        ...springBase,
        opacity: { duration: 0.15, ease: 'easeOut' },
        scale: { type: 'spring' as const, bounce: 0.3, duration: 0.25 },
      };

  const pillTransition = reduceMotion
    ? instantTransition
    : {
        ...springBase,
        opacity: { duration: 0.2, ease: 'easeOut', delay: 0.12 },
        y: { duration: 0.2, ease: 'easeOut', delay: 0.12 },
      };

  const Tag = item.href ? 'a' : 'span';
  const tagProps = item.href
    ? {
        href: item.href,
        target: item.href.startsWith('http') ? '_blank' : undefined,
        rel: item.href.startsWith('http') ? 'noreferrer' : undefined,
      }
    : {};

  return (
    <Tag
      ref={containerRef as any}
      {...tagProps}
      aria-label={item.label}
      onPointerLeave={clearSelection}
      onFocus={(e) => {
        if (e.currentTarget.matches(':focus-visible')) {
          setDirection((d) => ({ ...d, enter: 'left' }));
          selectLayer(0);
        }
      }}
      onBlur={clearSelection}
      className={cn(
        'relative inline-flex items-baseline gap-[0.25em] whitespace-nowrap text-white font-medium outline-none select-none cursor-pointer',
        className
      )}
    >
      {/* Layer 0: Icon / Avatar */}
      {item.icon && (
        <span
          ref={setRef(0)}
          onPointerEnter={(e) => {
            const dir = getDirection(e);
            setDirection((d) => ({ ...d, enter: dir }));
            selectLayer(0);
          }}
          onPointerLeave={(e) => {
            const dir = getDirection(e);
            setDirection((d) => ({ ...d, exit: dir }));
          }}
          className="inline-flex size-[1.05em] self-center items-center justify-center relative shrink-0"
        >
          {item.icon(false, selected?.layer === 0)}
        </span>
      )}

      {/* Layer 1..N: Individual Words */}
      {item.words.map((word, idx) => {
        const layerIdx = item.icon ? idx + 1 : idx;
        return (
          <span
            key={idx}
            ref={setRef(layerIdx)}
            onPointerEnter={() => selectLayer(layerIdx)}
            className="inline-block"
          >
            {word}
          </span>
        );
      })}

      {/* Direction-Aware Icon Fill */}
      <AnimatePresence custom={direction.exit}>
        {iconBox && item.icon && (
          <motion.span
            key="icon-fill"
            aria-hidden
            className="pointer-events-none absolute isolate text-white"
            style={{ ...iconBox, backgroundColor: color }}
            custom={direction.enter}
            variants={FILL_VARIANTS as any}
            initial="hidden"
            animate="shown"
            exit="hidden"
            transition={
              reduceMotion
                ? instantTransition
                : { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <span
              className="absolute flex items-center justify-center"
              style={{
                left: PADDING_X,
                top: PADDING_Y,
                width: iconBox.width - PADDING_X * 2,
                height: iconBox.height - PADDING_Y * 2,
              }}
            >
              {item.icon(true, true)}
            </span>
          </motion.span>
        )}
      </AnimatePresence>

      {/* Figma Selection Frame with 4 Corner Handles */}
      <AnimatePresence>
        {frameBox && (
          <motion.span
            key="selection-frame"
            aria-hidden
            className="pointer-events-none absolute border-2"
            style={{ borderColor: color }}
            initial={{ opacity: 0, scale: 0.92, ...frameBox }}
            animate={{ opacity: 1, scale: 1, ...frameBox }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={frameTransition as TargetAndTransition['transition']}
          >
            {CORNER_POSITIONS.map((pos, idx) => (
              <motion.span
                key={pos}
                className={cn('absolute size-2 border-2 bg-white dark:bg-black', pos)}
                style={{ borderColor: color }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={
                  reduceMotion
                    ? instantTransition
                    : {
                        type: 'spring',
                        bounce: 0.4,
                        duration: 0.25,
                        delay: 0.06 + idx * 0.03,
                      }
                }
              />
            ))}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Live Size Pill: Width × Height */}
      {showSize && selected && frameBox && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute z-10 -translate-x-1/2 rounded-[4px] px-1.5 py-0.5 font-sans text-[11px] leading-3 font-medium tracking-normal whitespace-nowrap text-white tabular-nums"
          style={{ backgroundColor: color }}
          initial={{
            opacity: 0,
            y: -4,
            left: frameBox.left + frameBox.width / 2,
            top: frameBox.top + frameBox.height + 6,
          }}
          animate={{
            opacity: 1,
            y: 0,
            left: frameBox.left + frameBox.width / 2,
            top: frameBox.top + frameBox.height + 6,
          }}
          transition={pillTransition as TargetAndTransition['transition']}
        >
          <span className="inline-flex items-center gap-[0.3em]">
            <RollingNumber value={selected.box.width} instant={reduceMotion} />
            <span>×</span>
            <RollingNumber value={selected.box.height} instant={reduceMotion} />
          </span>
        </motion.span>
      )}

      {children}
    </Tag>
  );
}

export interface DirectionAwareParagraphProps {
  color?: string;
  showSize?: boolean;
  bounce?: number;
  hint?: string;
  className?: string;
}

export function DirectionAwareAboutHero({
  color = '#3074FE',
  showSize = true,
  bounce = 0.15,
  hint = 'hover here',
  className,
}: DirectionAwareParagraphProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const [hintHidden, setHintHidden] = useState(false);

  // 1. Sayan's Real Avatar -> developer and builder
  const developerItem: DirectionAwareItemData = {
    label: 'developer and builder',
    words: ['developer', 'and', 'builder'],
    icon: (filled) => (
      <img
        src="/assets/sayan-avatar.jpg"
        alt="Sayan Ghosh"
        draggable={false}
        className={cn(
          'size-full rounded-full object-cover object-[center_28%]',
          filled
            ? 'mix-blend-luminosity ring-1 ring-white/70'
            : 'outline -outline-offset-1 outline-black/10 dark:outline-white/10'
        )}
      />
    ),
  };

  // 2. Full-stack Products -> Clean Dark Box with Minimal Icon
  const fullstackItem: DirectionAwareItemData = {
    label: 'live, full-stack products',
    words: ['live,', 'full-stack', 'products'],
    icon: (filled) => (
      <span
        className={cn(
          'size-full rounded-[22%] flex items-center justify-center bg-black dark:bg-zinc-900 border border-white/20 text-white',
          filled ? 'ring-1 ring-white/70' : 'dark:ring-1 dark:ring-white/15'
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-[0.65em]"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      </span>
    ),
  };

  // 3. Backend Systems -> Clean Deep Blue/Sky Minimal Icon
  const backendItem: DirectionAwareItemData = {
    label: 'backend systems',
    words: ['backend', 'systems'],
    icon: (filled) => (
      <span
        className={cn(
          'size-full rounded-[22%] flex items-center justify-center bg-[#0f172a] text-[#38bdf8] border border-sky-500/25',
          filled ? 'ring-1 ring-white/70' : ''
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-[0.65em]"
        >
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
      </span>
    ),
  };

  // 4. AI-Powered Apps -> Clean Violet Minimal Icon
  const aiItem: DirectionAwareItemData = {
    label: 'AI-powered apps',
    words: ['AI-powered', 'apps'],
    icon: (filled) => (
      <span
        className={cn(
          'size-full rounded-[22%] flex items-center justify-center bg-[#2e1065] text-[#c084fc] border border-purple-500/25',
          filled ? 'ring-1 ring-white/70' : ''
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-[0.65em]"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      </span>
    ),
  };

  const sharedProps = {
    color,
    showSize,
    bounce,
    reduceMotion,
    onSelect: setHintHidden,
  };

  return (
    <p
      className={cn(
        'max-w-3xl text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-400 dark:text-neutral-400 leading-snug sm:leading-snug md:leading-snug',
        className
      )}
    >
      {hint ? (
        <link rel="stylesheet" href={CAVEAT_FONT_URL} precedence="default" />
      ) : null}
      I&apos;m a{' '}
      <span className="whitespace-nowrap">
        <DirectionAwareItem item={developerItem} {...sharedProps}>
          {hint ? (
            <SelectionHint
              label={hint}
              hidden={hintHidden}
              reduceMotion={reduceMotion}
            />
          ) : null}
        </DirectionAwareItem>
      </span>{' '}
      from India who learns by doing — I dive into problems first and check the
      docs later. Years of corporate experience? Not yet. A track record of
      shipping <DirectionAwareItem item={fullstackItem} {...sharedProps} /> that
      solve real problems? Absolutely. From{' '}
      <DirectionAwareItem item={backendItem} {...sharedProps} /> to{' '}
      <DirectionAwareItem item={aiItem} {...sharedProps} />, I enjoy building
      things that work and scale, especially on the backend, where the hard
      problems live.
    </p>
  );
}

export default DirectionAwareAboutHero;
