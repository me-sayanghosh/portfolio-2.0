export interface BlogSection {
  heading?: string;
  body?: string;
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
  callout?: string;
  bullets?: string[];
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  sections: BlogSection[];
}

export const blogsData: BlogItem[] = [
  {
    id: 'how-to-make-vibe-coding-easy',
    slug: 'how-to-make-vibe-coding-easy',
    title: 'How to Make Vibe Coding Easy, Fast, and Actually Maintainable',
    excerpt: 'Why most vibe coding attempts end up in tangled regressions, and the exact atomic micro-loop workflow to ship production software effortlessly with AI.',
    date: 'Oct 29, 2026',
    readTime: '7 min read',
    tags: ['Vibe Coding', 'AI Workflows', 'Productivity', 'Engineering'],
    coverImage: '/assets/blogs/vibe-coding-guide.png',
    author: {
      name: 'Sayan Ghosh',
      role: 'Associate Software Engineer',
      avatar: '/assets/profile-avatar.webp'
    },
    sections: [
      {
        heading: '1. The Paradox of "Vibe Coding"',
        body: 'The tech world was taken by storm when Andrej Karpathy coined the term "vibe coding"—the notion of casually steering an AI coding agent purely with plain English instructions while sipping coffee. But anyone who has actually tried building an ambitious production app using pure "vibes" knows the brutal truth: after 10 prompts, your code becomes an unmaintainable, spaghetti-riddled labyrinth where fixing one bug introduces four new ones.'
      },
      {
        heading: '2. The Root Cause: Context Collapse',
        body: 'AI agents do not possess persistent architectural intuition. When you throw vague prompts like "add payments and fix the user dashboard", the agent lacks strict boundaries. It hallucinates missing variables, changes database schemas unexpectedly, and overwrites foundational utilities.'
      },
      {
        callout: 'Rule of Thumb: Vibe coding succeeds only when you replace conversational vagueness with structured context engineering.'
      },
      {
        heading: '3. The Atomic Micro-Loop: Spec → Prompt → Verify → Commit',
        body: 'To make vibe coding genuinely effortless and lightning fast, top engineers rely on a disciplined 4-step loop:',
        bullets: [
          'Step 1 (Specs First): Write a concise markdown specification (e.g. `docs/feature-spec.md`) defining inputs, outputs, error cases, and forbidden changes.',
          'Step 2 (Atomic Prompting): Request a single responsibility per prompt (e.g. "Create only the Zod validation schema in `src/schemas/user.ts`").',
          'Step 3 (Strict Verification): Force the agent or your linter to verify the change immediately using `npx tsc --noEmit` or unit test suites.',
          'Step 4 (Micro-Commits): Commit clean diffs immediately so you can rollback within seconds if the agent takes a wrong turn.'
        ]
      },
      {
        heading: '4. Code Example: Context-Restricted Agent Steering',
        body: 'Here is how to set up an atomic verification command that keeps your AI agent constrained within clean architectural rails:',
        codeSnippet: {
          language: 'bash',
          caption: 'Terminal command sequence for safe vibe coding verification',
          code: `# 1. Let agent implement the targeted feature
git status -s

# 2. Automated verification gate before accepting changes
npm run lint && npx tsc --noEmit && npm run test

# 3. Create an immediate atomic checkpoint
git add src/features/payments
git commit -m "feat(payments): add stripe webhook handler with signature verification"`
        }
      },
      {
        heading: '5. When to Drop the "Vibe" and Write Code Yourself',
        body: 'Knowing when to stop prompting is a superpower. If an agent struggles across two turns with a delicate regex, a recursive reducer, or an environment variable glitch, stop generating prompts. Spend 60 seconds reading the terminal error, fix the exact line manually, and hand back control. That is true leverage.'
      }
    ]
  },
  {
    id: 'security-in-vibe-coding-era',
    slug: 'security-in-vibe-coding-era',
    title: 'Security is Priority #1 in the Vibe Coding Era',
    excerpt: 'From hallucinated package slopsquatting to unchecked shell execution and token leaks: how to safeguard your codebase when AI writes the code.',
    date: 'Oct 27, 2026',
    readTime: '8 min read',
    tags: ['Security', 'Vibe Coding', 'DevSecOps', 'AI Agents'],
    coverImage: '/assets/blogs/vibe-coding-security.svg',
    author: {
      name: 'Sayan Ghosh',
      role: 'Associate Software Engineer',
      avatar: '/assets/profile-avatar.webp'
    },
    sections: [
      {
        heading: '1. The Illusion of Harmless Code Generation',
        body: 'When code generation is fast and frictionless, human vigilance plummets. Developers review large pull requests with a quick skim, hit "Accept", and deploy. This cognitive fatigue has opened up an unprecedented attack surface in software development.'
      },
      {
        heading: '2. The Threat of "Slopsquatting" (Hallucinated Dependencies)',
        body: 'Large language models frequently invent believable package names that do not exist in the official registries (e.g., `react-secure-crypto-handler`). Malicious actors monitor common LLM hallucination patterns, register these dummy packages on npm or PyPI, and inject obfuscated infostealers. When your agent runs `npm install`, you unknowingly grant an attacker root access.'
      },
      {
        callout: 'Warning: Never permit your AI agent or background process to execute global package installations or modify lockfiles without explicit human sign-off.'
      },
      {
        heading: '3. Dangerous Prompt Injections & Context Contamination',
        body: 'If your coding agent indexes untrusted data—such as open GitHub issues, third-party pull requests, or scraped web documentation—it can fall victim to Indirect Prompt Injection. A rogue comment inside an issue can instruct the agent to execute hidden commands, read `.env` secrets, and exfiltrate them via outbound HTTP requests.'
      },
      {
        heading: '4. The Golden Defense Checklist',
        bullets: [
          'Sandbox Execution: Ensure agent tools operate inside isolated ephemeral sandboxes without arbitrary host filesystem or network access.',
          'Secret Sanitization: Never expose raw API keys or database connection strings in prompts or context windows; use environment variables and vaults.',
          'Automated Lockfile Auditing: Integrate `npm audit`, `snyk`, or GitHub Dependabot alerts on every pull request.',
          'Principle of Least Privilege: AI agents should never have permission to execute destructive commands like `DROP TABLE` or push directly to `main`.'
        ],
        codeSnippet: {
          language: 'typescript',
          caption: 'Defensive agent tool wrapper enforcing read-only command boundaries',
          code: `export function sanitizeCommandExecution(cmd: string): boolean {
  const FORBIDDEN_PATTERNS = [
    /rm\\s+-rf/i,
    /curl.*\\|\\s*(bash|sh)/i,
    />\\s*\\/etc/i,
    /gcloud.*delete/i,
    /DROP\\s+TABLE/i
  ];

  const hasViolation = FORBIDDEN_PATTERNS.some(regex => regex.test(cmd));
  if (hasViolation) {
    throw new SecurityException("Command blocked: Violates agent sandboxing policies.");
  }
  return true;
}`
        }
      },
      {
        heading: '5. Conclusion',
        body: 'The developer who writes secure code in the AI era is not the one who audits every single bracket by hand, but the one who builds automated, unyielding security guardrails around their development environment.'
      }
    ]
  },
  {
    id: 'dont-prompt-like-noob-to-ai-agent',
    slug: 'dont-prompt-like-noob-to-ai-agent',
    title: 'Stop Prompting Like a Noob to Your AI Coding Agent',
    excerpt: 'Treating autonomous agents like generic chatbots is why your codebase breaks. The anatomy of high-leverage agent instructions, negative bounds, and tool scopes.',
    date: 'Oct 24, 2026',
    readTime: '6 min read',
    tags: ['AI Agents', 'Prompt Engineering', 'Best Practices', 'Developer Tools'],
    coverImage: '/assets/blogs/prompting-ai-agents.svg',
    author: {
      name: 'Sayan Ghosh',
      role: 'Associate Software Engineer',
      avatar: '/assets/profile-avatar.webp'
    },
    sections: [
      {
        heading: '1. Chatbot Thinking vs. Agentic Steering',
        body: 'The biggest mistake developers make when working with agentic coding environments (like Cursor, Claude Code, or Antigravity) is treating them like ChatGPT. A chatbot answers questions; an agent interacts with filesystems, runs commands, analyzes logs, and mutates code. Sending open-ended prompts like "Make this page look modern" or "Fix all bugs" causes the agent to wander aimlessly across 30 files.'
      },
      {
        heading: '2. The Anatomy of an Elite Agent Prompt',
        body: 'Elite prompts contain four non-negotiable components: Objective, Target Scope, Negative Constraints, and Verification Steps.',
        codeSnippet: {
          language: 'markdown',
          caption: 'Comparison: The Amateur vs. The Elite Agent Prompt',
          code: `<!-- ❌ NOOB PROMPT -->
"Hey, add user authentication with JWT and make it clean."

<!-- ✅ PRO AGENT PROMPT -->
"TASK: Implement JWT authentication verification middleware.
TARGET FILE: src/middleware/authMiddleware.ts
DEPENDENCIES: Use existing 'jsonwebtoken' and 'bcrypt' from package.json. DO NOT add new libraries.
CONSTRAINTS:
1. Extract token strictly from Authorization Bearer header.
2. Return 401 Unauthorized for expired or malformed tokens.
3. Preserve existing error response JSON contracts.
VERIFICATION: Run 'npx tsc --noEmit' and ensure zero TypeScript errors before concluding."`
        }
      },
      {
        heading: '3. The Magic of Negative Constraints',
        body: 'AI models suffer from "helpful bias"—they love to do extra unrequested work, such as refactoring untouched utility files, re-formatting CSS indentation, or upgrading library versions. Explicit negative constraints prevent 90% of all agent regressions:',
        bullets: [
          'Negative Constraint 1: "Do not touch any file outside `src/features/billing`."',
          'Negative Constraint 2: "Do not install new npm packages or change tsconfig settings."',
          'Negative Constraint 3: "Preserve all existing docstrings, interfaces, and comment blocks."'
        ]
      },
      {
        callout: 'Pro-Tip: Specifying what the agent MUST NOT do is twice as effective as trying to exhaustively list what it should do.'
      },
      {
        heading: '4. Chain of Verification (The Self-Correcting Prompt)',
        body: 'Never let an agent declare victory based purely on generation. Always include an execution verification command in your prompt. By commanding the agent to execute a compile check or unit test before finishing its turn, the agent will catch and fix its own syntax mistakes in the background without needing your manual intervention.'
      }
    ]
  },
  {
    id: 'scalable-backend-architecture-principles',
    slug: 'scalable-backend-architecture-principles',
    title: 'Scalable Backend Architecture: Principles for High-Throughput Systems',
    excerpt: 'Core principles for designing resilient backend architectures: multi-tier caching, asynchronous event queues, database pooling, and idempotency.',
    date: 'Oct 20, 2026',
    readTime: '9 min read',
    tags: ['Backend', 'System Design', 'Python', 'Architecture', 'Redis'],
    coverImage: '/assets/blogs/scalable-backend-architecture.svg',
    author: {
      name: 'Sayan Ghosh',
      role: 'Associate Software Engineer',
      avatar: '/assets/profile-avatar.webp'
    },
    sections: [
      {
        heading: '1. What Scaling Actually Means',
        body: 'Scaling is rarely about buying faster servers or switching to whatever language is trending on social media. Scaling is about removing contention points, decoupling synchronous dependencies, and making system failures isolated and survivable.'
      },
      {
        heading: '2. Multi-Tier Caching & Cache Invalidation Strategies',
        body: 'A single un-cached database query on a hot endpoint can bring down an entire cluster during traffic spikes. Resilient systems rely on multi-tier caching: in-memory process caches (e.g. LRU) for static assets, distributed caches (Redis) for session and frequently queried relational models, and stale-while-revalidate headers at the CDN edge.'
      },
      {
        codeSnippet: {
          language: 'python',
          caption: 'Idempotent cache-aside pattern with distributed locking',
          code: `import json
import redis.asyncio as redis

r = redis.from_url("redis://localhost:6379")

async def get_user_profile(user_id: str):
    cache_key = f"cache:user:{user_id}"
    
    # 1. Fast path: Read from distributed Redis cache
    cached_data = await r.get(cache_key)
    if cached_data:
        return json.loads(cached_data)
        
    # 2. Cache miss: Fetch from primary database
    user_record = await db.fetch_user(user_id)
    if user_record:
        # Cache with TTL (Time-To-Live) and jitter to prevent thundering herd
        await r.setex(cache_key, 300, json.dumps(user_record))
        
    return user_record`
        }
      },
      {
        heading: '3. Decoupling Synchronous Bottlenecks with Queues',
        body: 'Never make an HTTP request wait for heavy computations, PDF generation, email sending, or AI inference. The moment a user action triggers heavy processing, immediately record the intent in an asynchronous message queue (such as RabbitMQ, Redis Streams, or Kafka) and return a 202 Accepted status with a tracking job ID.'
      },
      {
        heading: '4. Database Scaling: Connection Pooling & Read Replicas',
        body: 'PostgreSQL and MySQL process each connection as a dedicated process or thread. When thousands of concurrent requests slam your backend, spawning raw database connections exhausts server RAM within seconds.',
        bullets: [
          'Always use a connection pooler like PgBouncer or SQLAlchemy async pooling with strict limits.',
          'Route all read-only analytics and search queries to Read Replicas, reserving the Primary instance strictly for atomic mutations.',
          'Index selectively: analyze slow query logs (`EXPLAIN ANALYZE`) and avoid duplicate or unindexed foreign keys.'
        ]
      },
      {
        callout: 'Golden Rule: Design every mutation endpoint with Idempotency Keys so network retries never double-charge or duplicate records.'
      }
    ]
  },
  {
    id: 'is-frontend-dev-dead',
    slug: 'is-frontend-dev-dead',
    title: 'Is Frontend Development Dead? The Real Shift in Modern Web Engineering',
    excerpt: 'AI can crank out Tailwind buttons in seconds, but real frontend engineering isn\'t dead—it evolved into distributed state, edge streaming, and deep web performance.',
    date: 'Oct 16, 2026',
    readTime: '6 min read',
    tags: ['Frontend', 'React', 'Web Dev', 'Career', 'Next.js'],
    coverImage: '/assets/blogs/is-frontend-dev-dead.svg',
    author: {
      name: 'Sayan Ghosh',
      role: 'Associate Software Engineer',
      avatar: '/assets/profile-avatar.webp'
    },
    sections: [
      {
        heading: '1. The Death of the "CSS Stitcher"',
        body: 'Every week, tech Twitter proclaims that frontend development is officially obsolete. Tools like v0, Lovable, and Claude can take a screenshot and reproduce a passable Tailwind component in 10 seconds. If your definition of frontend development was copying button styles from Figma and hooking up basic CRUD forms, then yes: that specific role is rapidly evaporating.'
      },
      {
        heading: '2. The Hard Problems AI Still Struggles With',
        body: 'Real-world production web applications are complex distributed systems that execute inside unpredictable user environments (flaky 3G mobile connections, varying device memory, different browser engines). AI models struggle profoundly with:',
        bullets: [
          'Deterministic Client State: Managing multi-tab state sync, optimistic reconciliations, and complex state machines.',
          'Edge Streaming & Partial Hydration: Architecting React Server Components (RSC) without breaking serialization boundaries.',
          'True Accessibility (a11y): Structuring semantic ARIA trees, screen-reader focus traps, and keyboard navigation compliance.',
          'High-Precision Web Vitals: Debugging sub-50ms Interaction to Next Paint (INP), zero Cumulative Layout Shift (CLS), and Largest Contentful Paint (LCP).'
        ]
      },
      {
        codeSnippet: {
          language: 'tsx',
          caption: 'Complex optimistic client state reconciliation with rollback',
          code: `// The kind of engineering AI cannot solve with a generic template
const [optimisticState, setOptimisticState] = useOptimistic(
  cartItems,
  (current, action: CartAction) => {
    switch (action.type) {
      case 'INCREMENT':
        return current.map(item =>
          item.id === action.id ? { ...item, qty: item.qty + 1 } : item
        );
      case 'REMOVE':
        return current.filter(item => item.id !== action.id);
      default:
        return current;
    }
  }
);`
        }
      },
      {
        callout: 'Perspective: AI didn\'t kill frontend development; it elevated it from surface-level UI implementation to distributed systems architecture on the client.'
      },
      {
        heading: '3. The Future: The Full-Stack Frontend Architect',
        body: 'The frontend engineer of the future is not a pixel-pusher. They are systems thinkers who understand edge caching, protocol efficiency (HTTP/3, WebSockets, WebTransport), client-side telemetry, and how to harness AI as an accelerated multiplier to ship products 10x faster.'
      }
    ]
  }
];
