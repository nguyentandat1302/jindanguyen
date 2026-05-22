import { useCountdown } from '../hooks/useCountdown';
import { PROFILE } from '../utils/config';

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-[64px] md:min-w-[88px]">
      <div className="font-display text-3xl md:text-5xl text-gold-300 tabular-nums leading-none">
        {String(value).padStart(2, '0')}
      </div>
      <div className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-ink-200 uppercase mt-2">
        {label}
      </div>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds, done } = useCountdown(PROFILE.graduationDate);

  if (done) {
    return (
      <div className="font-display italic text-2xl md:text-3xl text-gold-300">
        Khoảnh khắc đã đến.
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 md:gap-6">
      <Unit value={days} label="Ngày" />
      <span className="text-gold-500/40 text-2xl">·</span>
      <Unit value={hours} label="Giờ" />
      <span className="text-gold-500/40 text-2xl">·</span>
      <Unit value={minutes} label="Phút" />
      <span className="text-gold-500/40 text-2xl">·</span>
      <Unit value={seconds} label="Giây" />
    </div>
  );
}
