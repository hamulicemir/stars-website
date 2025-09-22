import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  children,
  href = "#",
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  const base = variant === "ghost" ? "btn-ghost" : "btn-primary";
  const classes = [base, className].filter(Boolean).join(" ");

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
