export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="text-zinc-500 text-sm font-space">
          <p>© {new Date().getFullYear()} - Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
