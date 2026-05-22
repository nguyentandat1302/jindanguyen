import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { PROFILE } from '../utils/config';

export default function Loader({ onDone }) {
  const rootRef = useRef(null);
  const barRef = useRef(null);
  const numRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: 100,
      duration: 2.8,
      ease: 'power2.inOut',
      onUpdate: () => setProgress(Math.round(obj.v)),
      onComplete: () => {
        const tl = gsap.timeline({
          onComplete: () => onDone?.(),
        });
        tl.to(rootRef.current.querySelectorAll('.fade-out'), {
          opacity: 0,
          y: -20,
          duration: 0.6,
          ease: 'power3.in',
          stagger: 0.05,
        });
        tl.to(rootRef.current, {
          yPercent: -100,
          duration: 1.1,
          ease: 'expo.inOut',
        }, '+=0.1');
      },
    });
    return () => tween.kill();
  }, [onDone]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink-950"
      style={{ background: 'radial-gradient(ellipse at center, #0e0c08 0%, #050507 70%)' }}
    >
      <div className="fade-out font-serif italic text-gold-400 text-sm tracking-[0.4em] uppercase mb-6 opacity-80">
        — Lời mời —
      </div>
      <div
        className="fade-out font-display text-4xl md:text-6xl text-ink-50 mb-12 tracking-wide"
        style={{ textShadow: '0 0 30px rgba(212,175,55,0.25)' }}
      >
        {PROFILE.fullName}
      </div>
      <div className="fade-out w-[280px] md:w-[420px] h-[1px] bg-ink-500/50 relative overflow-hidden">
        <div
          ref={barRef}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-500 to-gold-300"
          style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
        />
      </div>
      <div
        ref={numRef}
        className="fade-out font-sans text-xs text-ink-200 mt-4 tracking-[0.3em]"
      >
        {String(progress).padStart(3, '0')} / 100
      </div>
    </div>
  );
}
