import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useReveal } from '../hooks/useReveal';
import MagneticButton from '../components/MagneticButton';
import { PROFILE } from '../utils/config';

export default function EventInfo() {
  const ref = useReveal();
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    // Subtle breathing glow on the card
    gsap.to(cardRef.current, {
      boxShadow: '0 0 60px rgba(26,83,138,0.25), 0 0 120px rgba(26,83,138,0.1)',
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <section
      id="event"
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-12"
      style={{ background: 'linear-gradient(180deg, #010d22 0%, #021a3d 40%, #010d22 100%)' }}
    >
      {/* Ambient radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(26,83,138,0.15) 0%, transparent 65%)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="reveal-fade font-serif italic text-gold-400 text-xs md:text-sm tracking-[0.4em] uppercase">
            — Lời mời trang trọng —
          </div>
          <h2 data-split className="font-display text-4xl md:text-6xl text-ink-50 mt-4">
            Trân trọng kính mời
          </h2>
        </div>

        {/* Invitation card */}
        <div
          ref={cardRef}
          className="reveal-up relative max-w-3xl mx-auto p-10 md:p-16 border border-gold-500/25 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(2,26,61,0.75) 0%, rgba(1,13,34,0.85) 100%)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Shimmer sweep */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="shimmer-line" />
          </div>

          {/* Corner ornaments */}
          <Corner className="top-4 left-4" />
          <Corner className="top-4 right-4 rotate-90" />
          <Corner className="bottom-4 right-4 rotate-180" />
          <Corner className="bottom-4 left-4 -rotate-90" />

          {/* TDMU emblem dots */}
          <div className="flex justify-center gap-2 mb-8">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-gold-500"
                style={{ opacity: 0.4 + i * 0.2 }}
              />
            ))}
          </div>

          <div className="text-center">
            <div className="font-serif italic text-gold-300 text-base md:text-lg">
              Quý thầy cô, gia đình &amp; bạn bè thân mến,
            </div>

            <p className="mt-8 font-serif text-base md:text-lg text-ink-100 leading-relaxed">
              Tôi rất vinh hạnh được mời quý vị đến tham dự
              <br />
              <span className="font-display italic text-2xl md:text-3xl text-gold-300 inline-block my-3">
                Lễ Tốt Nghiệp của tôi
              </span>
              <br />
              một khoảnh khắc đặc biệt trong cuộc đời tôi.
            </p>

            <div className="my-10 flex justify-center">
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            </div>

            <Row label="Thời gian"  value={PROFILE.graduationDateLong} />
            <Row label="Thời gian"   value="13:30 chiều" />
            <Row label="Địa điểm"   value={PROFILE.venue.name} />
            <Row label="Địa chỉ"    value={PROFILE.venue.address} />

            <div className="mt-12">
              <MagneticButton
                as="a"
                href={PROFILE.venue.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase px-8 py-4 border border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-ink-950 transition-colors duration-500"
              >
                Mở Google Maps
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-6 mb-4 text-left">
      <div className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-ink-300 md:text-right">
        {label}
      </div>
      <div className="font-display text-lg md:text-xl text-ink-50">{value}</div>
    </div>
  );
}

function Corner({ className = '' }) {
  return (
    <div className={`absolute w-7 h-7 ${className}`}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gold-500/70" />
      <div className="absolute top-0 left-0 w-[1px] h-full bg-gold-500/70" />
    </div>
  );
}
