import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JOURNEY } from '../utils/config';

export default function Journey() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical timeline line
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

      // Each journey item
      gsap.utils.toArray('.journey-item').forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
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
    >
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
          className="journey-line absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-500 to-transparent origin-top"
        />

        {JOURNEY.map((item, i) => (
          <div
            key={item.year}
            className={`journey-item relative grid md:grid-cols-2 gap-6 md:gap-12 mb-20 md:mb-28 ${
              i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'
            }`}
          >
            <div className={`text-right md:text-${i % 2 === 0 ? 'right' : 'left'} ${i % 2 !== 0 && 'md:order-1'}`}>
              <div className="font-display text-6xl md:text-8xl text-gold-500/80 leading-none">
                {item.year}
              </div>
            </div>

            <div className={`relative ${i % 2 !== 0 && 'md:order-2'}`}>
              {/* Dot on line */}
              <div className="hidden md:block absolute -left-[calc(50%+0.6rem)] top-3 w-3 h-3 rounded-full bg-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
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
