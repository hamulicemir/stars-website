// components/ui/tilt-card.tsx
"use client";
import { useRef, useState } from "react";

export default function TiltCard({
  children,
  className = "",
  maxTilt = 1,          // vorher 8 → weniger Neigung
  scale = 1.001,        // vorher ~1.015 → sanfter Zoom
  perspective = 1800,   // vorher 1000 → flacher (weniger 3D)
  shine = true,
  shineStrength = 0.08, // vorher 0.25 → dezenter Glanz
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
  shine?: boolean;
  shineStrength?: number; // 0..1
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "rotateX(0deg) rotateY(0deg) scale(1)",
  });

  function onEnter() {
    setHover(true);
  }
  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!ref.current || e.pointerType === "touch") return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const rx = ((y - r.height / 2) / (r.height / 2)) * -maxTilt;
    const ry = ((x - r.width / 2) / (r.width / 2)) *  maxTilt;

    setStyle({
      transform: `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${hover ? scale : 1})`,
      // für den Glanz:
      ["--px" as any]: `${(x / r.width) * 100}%`,
      ["--py" as any]: `${(y / r.height) * 100}%`,
    });
  }
  function onLeave() {
    setHover(false);
    setStyle({ transform: "rotateX(0deg) rotateY(0deg) scale(1)" });
  }

  const glare = Math.max(0, Math.min(shineStrength, 1));

  return (
    <div style={{ perspective: `${perspective}px` }}>
      <div
        ref={ref}
        onPointerEnter={onEnter}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={style}
        className={`group relative will-change-transform [transform-style:preserve-3d] transition-transform duration-300 ease-out ${className}`}
      >
        {shine && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at var(--px) var(--py), rgba(255,255,255,${glare}), transparent 45%)`,
              transform: "translateZ(20px)",
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
}
