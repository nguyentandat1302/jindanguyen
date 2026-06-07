import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import tất cả ảnh từ assets
const rawModules = import.meta.glob('../../assets/*.{png,jpg,jpeg,webp}', { eager: true });

const CAPTION_MAP = {
  'datlatao.png':        'Khoảnh khắc đáng nhớ cùng nhau',
  'image.png':           'Ngày đầu tiên ở giảng đường TDMU',
  'image copy.png':      'Những năm tháng không thể quên',
  'image copy 2.png':    'Cùng nhau vượt qua deadline',
  'image copy 3.png':    'Đêm thức trắng chinh phục bài thi',
  'image copy 4.png':    'Hành trình không bao giờ quên',
  'image copy 5.png':    'Những giờ thực hành đáng nhớ',
  'image copy 6.png':    'Ký ức lớp học thân thương',
  'image copy 7.png':    'Bốn năm — một hành trình',
  'image copy 8.png':    'Hoạt động ngoại khóa tươi đẹp',
  'image copy 9.png':    'Sắp đến ngày lễ tốt nghiệp',
};

const galleryItems = Object.entries(rawModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const filename = path.split('/').pop();
    return {
      src: mod.default,
      caption: CAPTION_MAP[filename] || filename.replace(/\.[^/.]+$/, ''),
    };
  });

const SIZES = [
  { w: '360px', h: '500px' },
  { w: '440px', h: '380px' },
  { w: '320px', h: '480px' },
  { w: '400px', h: '420px' },
  { w: '360px', h: '460px' },
  { w: '420px', h: '380px' },
  { w: '340px', h: '490px' },
  { w: '460px', h: '400px' },
  { w: '320px', h: '480px' },
  { w: '400px', h: '440px' },
  { w: '380px', h: '410px' },
];

export default function Gallery() {
  const rootRef  = useRef(null);
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
          scrub: 0.7,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Staggered entrance for cards
      gsap.utils.toArray('.gallery-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top 80%',
              once: true,
            },
            delay: i * 0.07,
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative py-32 overflow-hidden bg-ink-950"
      style={{ background: 'linear-gradient(180deg, #010d22 0%, #021a3d 50%, #010d22 100%)' }}
    >
      {/* Section header */}
      <div className="px-6 md:px-12 mb-12">
        <div className="font-serif italic text-gold-400 text-xs md:text-sm tracking-[0.4em] uppercase">
          — Khoảnh khắc —
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-ink-50 mt-4">
          Một mảnh ghép ký ức
        </h2>
        <p className="font-serif italic text-ink-200 mt-3 text-base">
          Những khoảnh khắc đẹp nhất của bốn năm học tại TDMU
        </p>
      </div>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center gap-6 md:gap-8 pl-6 md:pl-12 will-change-transform"
        >
          {galleryItems.map((item, i) => {
            const size = SIZES[i % SIZES.length];
            return (
              <figure
                key={i}
                data-hover
                className="gallery-card relative shrink-0 group cursor-none"
                style={{ width: size.w, height: size.h }}
              >
                <div className="relative w-full h-full overflow-hidden"
                  style={{ border: '1px solid rgba(212,175,55,0.18)' }}>
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    style={{ transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                  />

                  {/* Blue-gold gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(1,13,34,0.85) 0%, rgba(2,26,61,0.3) 50%, transparent 100%)',
                    }}
                  />

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                    style={{
                      boxShadow: 'inset 0 0 40px rgba(74,158,212,0.2)',
                      transition: 'opacity 0.5s ease',
                      background: 'radial-gradient(ellipse at center, rgba(26,83,138,0.15) 0%, transparent 70%)',
                    }}
                  />

                  {/* Gold corner top-left */}
                  <div className="absolute top-3 left-3 w-5 h-5 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gold-500" />
                    <div className="absolute top-0 left-0 w-[1px] h-full bg-gold-500" />
                  </div>
                  {/* Gold corner bottom-right */}
                  <div className="absolute bottom-3 right-3 w-5 h-5 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gold-500" />
                    <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gold-500" />
                  </div>

                  {/* Caption overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none"
                    style={{ transition: 'all 0.4s ease' }}
                  >
                    <div className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-1">TDMU · 2021–2026</div>
                    <p className="font-serif italic text-sm text-ink-50">{item.caption}</p>
                  </div>
                </div>

                <figcaption className="font-serif italic text-xs text-ink-200 mt-3 px-1 max-w-[300px] opacity-70">
                  {item.caption}
                </figcaption>
              </figure>
            );
          })}

          {/* End quote card */}
          <div className="shrink-0 w-[50vw] flex flex-col items-start justify-center pr-12">
            <div
              className="font-display text-2xl md:text-4xl italic leading-tight"
              style={{ color: '#f0d99c', textShadow: '0 0 30px rgba(212,175,55,0.3)' }}
            >
              "Mỗi tấm ảnh là một mảnh ghép —
              <br />
              hợp lại thành cả bầu trời tuổi trẻ."
            </div>
            <div className="mt-6 w-16 h-[1px] bg-gold-500/50" />
            <div className="mt-4 font-sans text-[11px] tracking-[0.35em] uppercase text-ink-300">
              Trường Đại học Thủ Dầu Một
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
