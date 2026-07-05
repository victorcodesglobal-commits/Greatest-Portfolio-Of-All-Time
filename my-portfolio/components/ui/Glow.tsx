export default function Glow() {
  return (
    <>
      <div className="absolute left-[-150px] top-[-120px] h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[180px]" />

      <div className="absolute right-[-150px] top-[250px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="absolute bottom-[-250px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[180px]" />
    </>
  );
}