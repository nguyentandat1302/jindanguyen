import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GALLERY_PLACEHOLDERS } from '../utils/config';

export default function Gallery() {
  const rootRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;
      const distance = track.scrollWidth - window.innerWidth + 80;

      gsap.to(track, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: () => `+=${distance}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative py-32 overflow-hidden bg-ink-950"
    >
      <div className="px-6 md:px-12 mb-12">
        <div className="font-serif italic text-gold-400 text-xs md:text-sm tracking-[0.4em] uppercase">
          — Khoảnh khắc —
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-ink-50 mt-4">
          Một mảnh ghép ký ức
        </h2>
      </div>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center gap-6 md:gap-10 pl-6 md:pl-12 will-change-transform"
        >
          {GALLERY_PLACEHOLDERS.map((p, i) => (
            <figure
              key={i}
              data-hover
              className="relative shrink-0 group"
              style={{
                width: i % 3 === 1 ? '420px' : '320px',
                height: i % 2 === 0 ? '480px' : '380px',
              }}
            >
              <div className="relative w-full h-full overflow-hidden border border-gold-500/15">
                <img
                  src={p.src}
                  alt={p.caption}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.classList.add('is-placeholder');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Placeholder fallback */}
                <div className="placeholder absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-ink-900 to-ink-950 text-ink-200 opacity-0 [.is-placeholder_&]:opacity-100">
                  <div className="font-serif italic text-sm">Ảnh #{i + 1}</div>
                  <div className="font-sans text-[10px] tracking-[0.3em] mt-2 uppercase text-ink-200/60">
                    Đang chờ
                  </div>
                </div>
              </div>

              <figcaption className="font-serif italic text-sm text-ink-100 mt-4 px-2 max-w-[260px]">
                {p.caption}
              </figcaption>
            </figure>
          ))}

          <div className="shrink-0 w-[40vw] flex flex-col items-start justify-center pr-12">
            <div className="font-display text-2xl md:text-4xl text-gold-300 italic leading-tight">
              "Mỗi tấm ảnh là một mảnh ghép —
              <br />
              hợp lại thành cả bầu trời tuổi trẻ."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
