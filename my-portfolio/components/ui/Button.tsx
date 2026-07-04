import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
        variant === "primary"
          ? "bg-blue-600 hover:bg-blue-500 hover:scale-105"
          : "border border-white/20 hover:border-blue-500 hover:text-blue-400"
      }`}
    >
      {children}
    </Link>
  );
}