import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Button({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-400"
    >
      {children}
    </Link>
  );
}