type Props = {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeIn({ children }: Props) {
  return <>{children}</>;
}