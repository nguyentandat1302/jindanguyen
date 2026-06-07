import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JOURNEY } from '../utils/config';

export default function Journey() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate vertical timeline line
      gsap.fromTo(
        '.journey-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: 0.5,
          },
        }
      );

      // Pulsing glow on timeline dots
      gsap.utils.toArray('.journey-dot').forEach((dot) => {
        dot.classList.add('dot-pulse');
      });

      // Each journey item slides in
      gsap.utils.toArray('.journey-item').forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: i % 2 === 0 ? -70 : 70 },
          {
            opacity: 1, x: 0,
            duration: 1.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 82%',
              once: true,
            },
          }
        );
      });

      // Year numbers count-up feel
      gsap.utils.toArray('.journey-year').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #010d22 0%, #021a3d 50%, #010d22 100%)' }}
    >
      {/* Subtle blue ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(26,74,173,0.1) 0%, transparent 60%)' }}
      />

      <div className="text-center mb-24">
        <div className="font-serif italic text-gold-400 text-xs md:text-sm tracking-[0.4em] uppercase">
          — Hành trình —
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-ink-50 mt-4 tracking-wide">
          Bốn năm, sáu chương
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div
          className="journey-line absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] origin-top"
          style={{ background: 'linear-gradient(to bottom, transparent, #d4af37 15%, #4a9ed4 50%, #d4af37 85%, transparent)' }}
        />

        {JOURNEY.map((item, i) => (
          <div
            key={item.year}
            className={`journey-item relative grid md:grid-cols-2 gap-6 md:gap-12 mb-20 md:mb-28 ${
              i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'
            }`}
          >
            <div className={`${i % 2 !== 0 ? 'md:order-1 text-left' : 'text-right'}`}>
              <div
                className="journey-year font-display text-6xl md:text-8xl leading-none"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(212,175,55,0.5)',
                  textShadow: i % 2 === 0
                    ? '2px 2px 0 rgba(74,158,212,0.15)'
                    : '-2px 2px 0 rgba(74,158,212,0.15)',
                }}
              >
                {item.year}
              </div>
            </div>

            <div className={`relative ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
              {/* Dot on timeline */}
              <div
                className="journey-dot hidden md:block absolute -left-[calc(50%+0.6rem)] top-3 w-3 h-3 rounded-full bg-gold-400"
              />
              <h3 className="font-display text-2xl md:text-3xl text-ink-50 mb-3">
                {item.title}
              </h3>
              <p className="font-serif italic text-base md:text-lg text-ink-200 leading-relaxed max-w-md">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
