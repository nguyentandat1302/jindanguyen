import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReveal } from '../hooks/useReveal';
import { PROFILE } from '../utils/config';

export default function ThankYou() {
  const ref = useReveal();
  const particlesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating particles rising up
      const particles = particlesRef.current?.querySelectorAll('.float-particle') ?? [];
      particles.forEach((p, i) => {
        const delay = i * 0.4;
        gsap.set(p, {
          x: 20 + Math.random() * 60 + '%',
          y: '80%',
          opacity: 0,
          scale: 0.5 + Math.random() * 0.8,
        });
        gsap.to(p, {
          y: `-=${100 + Math.random() * 80}`,
          opacity: 0.7,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: particlesRef.current,
            start: 'top 80%',
            once: true,
          },
          delay,
          onComplete: () => {
            gsap.to(p, {
              y: `-=120`,
              opacity: 0,
              scale: 0.2,
              duration: 1.8 + Math.random() * 1.2,
              ease: 'power1.in',
              delay: 0.2,
            });
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-40 md:py-56 px-6 md:px-12 text-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #010d22 0%, #021a3d 50%, #010d22 100%)' }}
    >
      {/* Ambient glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.1) 0%, rgba(26,83,138,0.1) 40%, transparent 65%)' }}
      />

      {/* Floating particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="float-particle absolute"
            style={{
              width:  4 + (i % 3) * 3 + 'px',
              height: 4 + (i % 3) * 3 + 'px',
              borderRadius: i % 2 === 0 ? '50%' : '2px',
              background: i % 3 === 0
                ? 'rgba(212,175,55,0.7)'
                : i % 3 === 1
                  ? 'rgba(74,158,212,0.6)'
                  : 'rgba(240,217,156,0.5)',
              left: 5 + (i / 14) * 90 + '%',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="reveal-fade font-serif italic text-gold-400 text-xs md:text-sm tracking-[0.4em] uppercase mb-8">
          — Lời sau cùng —
        </div>

        <h2
          data-split
          className="font-display text-3xl md:text-6xl text-ink-50 leading-[1.2]"
          style={{ textShadow: '0 0 60px rgba(26,83,138,0.3)' }}
        >
          Cảm ơn vì đã ở đây.
          <br />
          Cảm ơn vì đã đồng hành.
          <br />
          <span className="italic text-gold-300">Hẹn gặp bạn vào ngày ấy.</span>
        </h2>

        <div className="reveal-fade mt-16 flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </div>

        <div
          className="reveal-up mt-12 font-display text-2xl md:text-4xl text-gold-300 italic"
          style={{ textShadow: '0 0 30px rgba(212,175,55,0.4)' }}
        >
          {PROFILE.fullName}
        </div>
        <div className="reveal-up mt-2 font-serif text-ink-200">
          {PROFILE.graduationDateDisplay}
        </div>
        <div className="reveal-fade mt-3 font-sans text-[10px] tracking-[0.4em] uppercase text-ink-300">
          {PROFILE.universityShort} · {PROFILE.major}
        </div>
      </div>
    </section>
  );
}
