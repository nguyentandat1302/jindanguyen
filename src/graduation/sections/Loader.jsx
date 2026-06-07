import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { PROFILE } from '../utils/config';

export default function Loader({ onDone }) {
  const rootRef  = useRef(null);
  const barRef   = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate spinning rings
    gsap.to(ring1Ref.current, { rotation: 360, duration: 6, repeat: -1, ease: 'none', transformOrigin: 'center center' });
    gsap.to(ring2Ref.current, { rotation: -360, duration: 9, repeat: -1, ease: 'none', transformOrigin: 'center center' });

    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: 100,
      duration: 2.8,
      ease: 'power2.inOut',
      onUpdate: () => setProgress(Math.round(obj.v)),
      onComplete: () => {
        const tl = gsap.timeline({ onComplete: () => onDone?.() });
        tl.to(rootRef.current.querySelectorAll('.fade-out'), {
          opacity: 0, y: -20, duration: 0.5, ease: 'power3.in', stagger: 0.04,
        });
        tl.to(rootRef.current, {
          yPercent: -100, duration: 1.1, ease: 'expo.inOut',
        }, '+=0.1');
      },
    });
    return () => tween.kill();
  }, [onDone]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
      style={{ background: 'radial-gradient(ellipse at center, #031a45 0%, #010d22 70%)' }}
    >
      {/* Decorative spinning rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <svg ref={ring1Ref} width="420" height="420" viewBox="0 0 420 420" className="absolute opacity-15">
          <circle cx="210" cy="210" r="200" fill="none" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="6 14" />
          <circle cx="210" cy="210" r="180" fill="none" stroke="#4a9ed4" strokeWidth="0.4" strokeDasharray="3 20" />
        </svg>
        <svg ref={ring2Ref} width="300" height="300" viewBox="0 0 300 300" className="absolute opacity-10">
          <circle cx="150" cy="150" r="140" fill="none" stroke="#d4af37" strokeWidth="0.6" strokeDasharray="4 18" />
        </svg>
      </div>

      <div className="fade-out font-serif italic text-gold-400 text-sm tracking-[0.4em] uppercase mb-6 opacity-80">
        — Lời mời —
      </div>

      <div
        className="fade-out font-display text-4xl md:text-6xl text-ink-50 mb-3 tracking-wide text-center"
        style={{ textShadow: '0 0 40px rgba(212,175,55,0.3), 0 0 80px rgba(26,74,173,0.2)' }}
      >
        {PROFILE.fullName}
      </div>

      <div className="fade-out font-sans text-[10px] tracking-[0.35em] text-ink-200 uppercase mb-10">
        {PROFILE.universityShort} · {PROFILE.faculty}
      </div>

      <div className="fade-out w-[280px] md:w-[420px] h-[1px] bg-ink-500/40 relative overflow-hidden">
        <div
          ref={barRef}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300"
          style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
        />
      </div>

      <div className="fade-out font-sans text-xs text-ink-200 mt-4 tracking-[0.3em]">
        {String(progress).padStart(3, '0')} / 100
      </div>

      <div className="fade-out mt-8 font-serif italic text-ink-300 text-xs tracking-widest opacity-60">
        Trường Đại học Thủ Dầu Một · 2021 – 2026
      </div>
    </div>
  );
}
