import { useReveal } from '../hooks/useReveal';
import { PROFILE } from '../utils/config';

export default function ThankYou() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative py-40 md:py-56 px-6 md:px-12 text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(212,175,55,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="reveal-fade font-serif italic text-gold-400 text-xs md:text-sm tracking-[0.4em] uppercase mb-8">
          — Lời sau cùng —
        </div>

        <h2
          data-split
          className="font-display text-3xl md:text-6xl text-ink-50 leading-[1.2]"
        >
          Cảm ơn vì đã ở đây.
          <br />
          Cảm ơn vì đã đồng hành.
          <br />
          <span className="italic text-gold-300">Hẹn gặp bạn vào ngày ấy.</span>
        </h2>

        <div className="reveal-fade mt-16 flex justify-center">
          <div className="w-24 h-[1px] bg-gold-500/60" />
        </div>

        <div className="reveal-up mt-12 font-display text-2xl md:text-4xl text-gold-300 italic">
          {PROFILE.fullName}
        </div>
        <div className="reveal-up mt-2 font-serif text-ink-200">
          {PROFILE.graduationDateDisplay}
        </div>
      </div>
    </section>
  );
}
