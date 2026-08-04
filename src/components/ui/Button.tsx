import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  to?: string;
}

export default function Button({
  children,
  variant = "primary",
  to,
}: ButtonProps) {

  const styles = `
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
    ${
      variant === "primary"
        ? `
          bg-[#08142E]
          text-white
          hover:bg-[#183A75]
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


  if (to) {
    return (
      <Link
        to={to}
        className={styles}
      >
        {children}

        <span>
          →
        </span>

      </Link>
    );
  }


  return (
    <button
      className={styles}
    >
      {children}

      <span>
        →
      </span>

    </button>
  );
}