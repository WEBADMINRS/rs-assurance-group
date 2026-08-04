import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  to?: string;
}

export default function Button({
  children,
  variant = "primary",
  to,
}: ButtonProps) {

  const styles = `
    group
    inline-flex
    items-center
    justify-center
    gap-3
    rounded-xl
    px-8
    py-4
    text-sm
    font-semibold
    uppercase
    tracking-[0.2em]
    transition-all
    duration-300
    hover:-translate-y-1

    ${
      variant === "primary"
        ? `
          bg-[#08142E]
          text-white
          hover:bg-[#183A75]
        `
        : variant === "dark"
        ? `
          border
          border-white/40
          bg-transparent
          text-white
          hover:border-[#D6A03A]
          hover:text-[#D6A03A]
        `
        : `
          border
          border-[#08142E]
          bg-transparent
          text-[#08142E]
          hover:bg-[#08142E]
          hover:text-white
        `
    }
  `;


  const Arrow = () => (
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  );


  if (to) {
    return (
      <Link
        to={to}
        className={styles}
      >
        {children}
        <Arrow />
      </Link>
    );
  }


  return (
    <button
      className={styles}
    >
      {children}
      <Arrow />
    </button>
  );
}