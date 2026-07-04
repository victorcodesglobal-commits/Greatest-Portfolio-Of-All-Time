import Card from "@/components/ui/Card";

type Props = {
  title: string;
  description: string;
};

export default function ProjectCard({
  title,
  description,
}: Props) {
  return (
    <Card>

      <div className="h-52 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600" />

      <h3 className="mt-8 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-5 text-gray-400 leading-8">
        {description}
      </p>

      <button
        className="
        mt-8
        rounded-xl
        bg-blue-600
        px-5
        py-3
        font-semibold
        transition
        hover:bg-blue-500
        "
      >
        View Project →
      </button>

    </Card>
  );
}