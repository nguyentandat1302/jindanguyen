import { useReveal } from '../hooks/useReveal';
import { PROFILE } from '../utils/config';

export default function Thesis() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden"
    >
      {/* Gold gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="reveal-fade font-serif italic text-gold-400 text-xs md:text-sm tracking-[0.4em] uppercase">
          — Đồ án tốt nghiệp —
        </div>

        <h2
          data-split
          className="font-display text-4xl md:text-7xl text-ink-50 mt-6 leading-[1.1]"
        >
          {PROFILE.thesis.title}
        </h2>

        <div className="reveal-up mt-8">
          <div className="font-serif italic text-xl md:text-2xl text-gold-300">
            {PROFILE.thesis.subtitle}
          </div>
        </div>

        <div className="reveal-up mt-12 max-w-2xl mx-auto">
          <p className="font-serif italic text-lg md:text-xl text-ink-200 leading-relaxed">
            {PROFILE.thesis.description}
          </p>
        </div>

        <div className="reveal-fade mt-12 inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 px-8 py-6 border border-gold-500/30 rounded-sm bg-ink-950/40 backdrop-blur-sm">
          <div className="font-sans text-[10px] tracking-[0.3em] uppercase text-ink-200">
            Người hướng dẫn
          </div>
          <div className="w-8 md:w-px md:h-8 h-px bg-gold-500/40" />
          <div className="font-display text-lg md:text-xl text-gold-300">
            {PROFILE.thesis.advisor}
          </div>
        </div>
      </div>
    </section>
  );
}
