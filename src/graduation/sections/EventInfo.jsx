import { useReveal } from '../hooks/useReveal';
import MagneticButton from '../components/MagneticButton';
import { PROFILE } from '../utils/config';

export default function EventInfo() {
  const ref = useReveal();
  return (
    <section
      id="event"
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-12"
    >
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
        <div className="reveal-up relative max-w-3xl mx-auto p-10 md:p-16 border border-gold-500/30 bg-gradient-to-br from-ink-950/80 to-ink-900/40 backdrop-blur-sm">
          {/* Corner ornaments */}
          <Corner className="top-3 left-3" />
          <Corner className="top-3 right-3 rotate-90" />
          <Corner className="bottom-3 right-3 rotate-180" />
          <Corner className="bottom-3 left-3 -rotate-90" />

          <div className="text-center">
            <div className="font-serif italic text-gold-300 text-base md:text-lg">
              Quý thầy cô, gia đình & bạn bè thân mến,
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

            <div className="my-12 flex justify-center">
              <div className="w-24 h-[1px] bg-gold-500/60" />
            </div>

            <Row label="Thời gian" value={PROFILE.graduationDateLong} />
            <Row label="Buổi" value="08:00 sáng" />
            <Row label="Địa điểm" value={PROFILE.venue.name} />
            <Row label="Địa chỉ" value={PROFILE.venue.address} />

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
    <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-6 mb-4 text-left md:text-left">
      <div className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-ink-200 md:text-right">
        {label}
      </div>
      <div className="font-display text-lg md:text-xl text-ink-50">{value}</div>
    </div>
  );
}

function Corner({ className = '' }) {
  return (
    <div className={`absolute w-6 h-6 ${className}`}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gold-500" />
      <div className="absolute top-0 left-0 w-[1px] h-full bg-gold-500" />
    </div>
  );
}
