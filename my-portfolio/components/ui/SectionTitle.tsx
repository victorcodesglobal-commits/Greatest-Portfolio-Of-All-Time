type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-20 text-center">

      <p className="uppercase tracking-[8px] text-blue-400 text-sm">
        {subtitle}
      </p>

      <h2 className="mt-5 text-5xl md:text-6xl font-black">
        {title}
      </h2>

      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-blue-500" />

    </div>
  );
}