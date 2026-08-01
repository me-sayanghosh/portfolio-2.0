'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ImagesBadgeProps {
  text?: string;
  images?: string[];
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  folderSize?: { width: number; height: number };
  teaserImageSize?: { width: number; height: number };
  hoverImageSize?: { width: number; height: number };
  hoverTranslateY?: number;
  hoverSpread?: number;
  hoverRotation?: number;
}

export function ImagesBadge({
  text = "Gallery View",
  images = [
    "/assets/collage-elements/mountain_polaroid.png",
    "/assets/collage-elements/sayan_portrait.png",
    "/assets/collage-elements/guitar_polaroid.png",
  ],
  className,
  href,
  target,
  onClick,
  folderSize = { width: 34, height: 26 },
  teaserImageSize = { width: 22, height: 16 },
  hoverImageSize = { width: 48, height: 32 },
  hoverTranslateY = -35,
  hoverSpread = 20,
  hoverRotation = 15,
}: ImagesBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Limit to max 3 images
  const displayImages = images ? images.slice(0, 3) : [];

  // Calculate folder tab dimensions proportionally
  const tabWidth = folderSize.width * 0.375;
  const tabHeight = folderSize.height * 0.25;

  const Component = href ? "a" : "div";

  return (
    <Component
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={cn(
        "relative inline-flex cursor-pointer items-center perspective-[1000px] transform-3d select-none group active:scale-95 transition-transform",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip Popup on Hover */}
      {!isHovered && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none z-30">
          <div className="bg-[#262626] border border-white/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-xl whitespace-nowrap relative">
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#262626]" />
          </div>
        </div>
      )}

      {/* Folder Container */}
      <motion.div
        className={cn(
          "relative flex-shrink-0 transition-all duration-300 transform-gpu",
          isHovered ? "grayscale-0 opacity-100 scale-105" : "grayscale opacity-80"
        )}
        style={{
          width: folderSize.width,
          height: folderSize.height,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Folder Back */}
        <div className="absolute inset-0 rounded-[4px] bg-gradient-to-b from-amber-400 to-amber-500 shadow-md">
          {/* Folder Tab */}
          <div
            className="absolute left-0.5 rounded-t-[2px] bg-gradient-to-b from-amber-300 to-amber-400"
            style={{
              top: -tabHeight * 0.65,
              width: tabWidth,
              height: tabHeight,
            }}
          />
        </div>

        {/* Images that pop out */}
        {displayImages.map((image, index) => {
          const totalImages = displayImages.length;

          // Calculate rotation based on index
          const baseRotation =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * hoverRotation
                : (index - 1) * hoverRotation;

          // Hover positions - fan out
          const hoverY = hoverTranslateY - (totalImages - 1 - index) * 3;
          const hoverX =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * hoverSpread
                : (index - 1) * hoverSpread;

          // Teaser positions - slight peek from folder
          const teaseY = -4 - (totalImages - 1 - index) * 1;
          const teaseRotation =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * 3
                : (index - 1) * 3;

          return (
            <motion.div
              key={index}
              className="absolute top-0.5 left-1/2 origin-bottom overflow-hidden rounded-[3px] bg-white shadow-sm ring-1 shadow-black/10 ring-black/10"
              animate={{
                x: `calc(-50% + ${isHovered ? hoverX : 0}px)`,
                y: isHovered ? hoverY : teaseY,
                rotate: isHovered ? baseRotation : teaseRotation,
                width: isHovered ? hoverImageSize.width : teaserImageSize.width,
                height: isHovered
                  ? hoverImageSize.height
                  : teaserImageSize.height,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: index * 0.03,
              }}
              style={{
                zIndex: 10 + index,
              }}
            >
              <img
                src={image}
                alt={`Preview ${index + 1}`}
                className={cn(
                  "h-full w-full object-cover transition-all duration-300",
                  isHovered ? "grayscale-0" : "grayscale opacity-90"
                )}
              />
            </motion.div>
          );
        })}

        {/* Folder Front (flattens on hover) */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-[85%] origin-bottom rounded-[4px] bg-gradient-to-b from-amber-300 to-amber-400 shadow-md"
          animate={{
            rotateX: isHovered ? -45 : -25,
            scaleY: isHovered ? 0.8 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          style={{
            transformStyle: "preserve-3d",
            zIndex: 20,
          }}
        >
          {/* Folder line detail */}
          <div className="absolute top-1 right-1 left-1 h-px bg-amber-200/50" />
        </motion.div>
      </motion.div>
    </Component>
  );
}
