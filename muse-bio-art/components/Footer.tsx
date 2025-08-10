export default function Footer() {
  return (
    <footer className="mx-auto max-w-screen-content px-6 pb-10 text-sm text-neutral-600">
      <div className="flex flex-col items-start justify-between gap-3 border-t border-neutral-200 pt-6 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Muse Bio — Artistic concept page</p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/muse_bio/" target="_blank" className="hover:underline">Instagram</a>
          <a href="https://x.com/Muse_Bio" target="_blank" className="hover:underline">X</a>
          <a href="mailto:muse@mycells.bio" className="hover:underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
