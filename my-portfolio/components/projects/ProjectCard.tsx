type Props = {
  title: string;
  description: string;
  image: string;
  live: string;
  github: string;
  tech: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  live,
  github,
  tech,
}: Props) {
  const technologies = tech
    ? tech.split(",").map((item) => item.trim())
    : [];

  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-cyan-400/60
      hover:shadow-[0_20px_80px_rgba(34,211,238,0.18)]
      "
    >
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
          h-64
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#050816]
          via-transparent
          to-transparent
          "
        />

        <div
          className="
          absolute
          left-5
          top-5
          rounded-full
          bg-cyan-500/20
          px-4
          py-2
          text-sm
          font-semibold
          text-cyan-300
          backdrop-blur-md
          "
        >
          Featured Project
        </div>

      </div>

      <div className="space-y-6 p-7">

        <h3 className="text-3xl font-bold leading-tight">
          {title}
        </h3>

        <p className="leading-8 text-gray-400">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">

          {technologies.map((item) => (
            <span
              key={item}
              className="
              rounded-full
              border
              border-cyan-500/30
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              text-cyan-300
              transition
              hover:border-cyan-400
              hover:bg-cyan-500/20
              "
            >
              {item}
            </span>
          ))}

        </div>

        <div className="flex gap-4 pt-2">

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex-1
            rounded-xl
            bg-cyan-500
            px-6
            py-3
            text-center
            font-semibold
            text-black
            transition
            hover:scale-105
            hover:bg-cyan-400
            "
          >
            Live Demo →
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex-1
            rounded-xl
            border
            border-white/20
            px-6
            py-3
            text-center
            font-semibold
            transition
            hover:border-cyan-400
            hover:bg-white/5
            "
          >
            GitHub
          </a>

        </div>

      </div>
    </div>
  );
}