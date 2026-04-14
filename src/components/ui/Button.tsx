import Link from "next/link";
import { clsx } from "clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl px-5 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-slate-950 text-white hover:bg-slate-800"
          : "border border-slate-300 bg-white text-slate-950 hover:bg-slate-100",
        className
      )}
    >
      {children}
    </Link>
  );
}
