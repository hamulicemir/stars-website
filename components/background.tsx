"use client";

import { motion } from "framer-motion";

export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Soft radial glow */}
      <div className="absolute left-1/2 top-[-10%] h-[70vh] w-[120vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.orange.400)/20_0%,transparent_55%)] blur-2xl" />

      {/* Aurora ribbons */}
      <motion.div
        initial={{ opacity: 0.4, filter: "blur(36px)" }}
        animate={{
          opacity: [0.35, 0.5, 0.35],
          x: ["-5%", "5%", "-5%"],
          rotate: [0, 3, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-0 h-[60vh] w-[70vw] rounded-[999px] bg-gradient-to-tr from-sky-400/25 via-fuchsia-400/20 to-indigo-400/25"
      />
      <motion.div
        initial={{ opacity: 0.35, filter: "blur(40px)" }}
        animate={{ opacity: [0.25, 0.45, 0.25], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute right-[-8%] top-[10%] h-[55vh] w-[60vw] rounded-[999px] bg-gradient-to-bl from-orange-400/25 via-rose-400/20 to-amber-400/25"
      />

      {/* Dot grid overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.12]">
        <defs>
          <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#dots)"
          className="text-sky-900"
        />
      </svg>

      {/* Film-grain noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\'/></svg>')]" />
    </div>
  );
}
