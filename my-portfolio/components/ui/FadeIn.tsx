type Props = {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeIn({ children, delay = 0 }: Props) {
  return (
    <div
      style={{
        animationDelay: `${delay}s`,
      }}
      className="animate-[fadeIn_.8s_ease-out] opacity-0"
    >
      {children}
    </div>
  );
}