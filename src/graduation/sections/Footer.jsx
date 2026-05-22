import { PROFILE } from '../utils/config';

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/15 py-12 px-6 md:px-12 text-center bg-ink-950">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-sans text-xs tracking-[0.3em] uppercase text-ink-200">
          © {new Date().getFullYear()} · {PROFILE.fullName}
        </div>
        <div className="font-serif italic text-sm text-gold-300/80">
          {PROFILE.universityShort} — Khoá 2021 · 2026
        </div>
        <div className="font-sans text-xs tracking-[0.2em] uppercase text-ink-200">
          Crafted with care
        </div>
      </div>
    </footer>
  );
}
