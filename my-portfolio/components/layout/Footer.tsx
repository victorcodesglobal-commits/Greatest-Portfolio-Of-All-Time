export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-center text-gray-500">
      <p>
        © {new Date().getFullYear()} Victor Nwaokobia.
        All rights reserved.
      </p>
    </footer>
  );
}