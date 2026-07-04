type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500/50
      "
    >
      {children}
    </div>
  );
}