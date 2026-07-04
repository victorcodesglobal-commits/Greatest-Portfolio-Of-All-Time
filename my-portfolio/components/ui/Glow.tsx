export default function Glow() {
  return (
    <>
      <div
        className="
        fixed
        top-[-250px]
        left-[-250px]
        h-[600px]
        w-[600px]
        rounded-full
        bg-blue-600/20
        blur-[180px]
        -z-10
        "
      />

      <div
        className="
        fixed
        bottom-[-250px]
        right-[-250px]
        h-[600px]
        w-[600px]
        rounded-full
        bg-purple-600/20
        blur-[180px]
        -z-10
        "
      />
    </>
  );
}