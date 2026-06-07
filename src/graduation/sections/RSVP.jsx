import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useReveal } from '../hooks/useReveal';
import MagneticButton from '../components/MagneticButton';

// ─── Formspree Configuration ──────────────────────────────────────────────────
// Bước 1: Vào https://formspree.io → đăng nhập bằng Google
// Bước 2: New Form → nhập email datnguyen13021302@gmail.com → Copy Form ID
// Bước 3: Thay YOUR_FORM_ID bên dưới bằng ID vừa lấy (vd: xbjvzpkl)
const FORMSPREE_ID = 'xojzekar';
// ─────────────────────────────────────────────────────────────────────────────

const ATTEND_OPTIONS = [
  { v: 'yes',   label: 'Chắc chắn rồi ✓' },
  { v: 'maybe', label: 'Sẽ cố gắng' },
  { v: 'no',    label: 'Tiếc quá, không thể' },
];

export default function RSVP() {
  const ref = useReveal();
  const successRef = useRef(null);
  const [form, setForm]     = useState({ name: '', wish: '', attend: 'yes' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useEffect(() => {
    if (status === 'sent' && successRef.current) {
      gsap.fromTo(
        successRef.current,
        { opacity: 0, scale: 0.92, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.4)' }
      );
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const attendLabel = ATTEND_OPTIONS.find(o => o.v === form.attend)?.label ?? form.attend;

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'Tên khách':    form.name,
          'Tham dự':      attendLabel,
          'Lời chúc':     form.wish || '(không có lời chúc)',
          '_subject':     `[Thiệp mời] ${form.name} xác nhận tham dự lễ tốt nghiệp`,
        }),
      });
      if (res.ok) {
        setStatus('sent');
      } else {
        throw new Error('formspree error');
      }
    } catch (err) {
      console.error('Formspree error:', err);
      setStatus('error');
    }
  };

  return (
    <section
      id="rsvp"
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden"
    >
      {/* Blue radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(26,83,138,0.12) 0%, transparent 60%)' }}
      />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="reveal-fade font-serif italic text-gold-400 text-xs md:text-sm tracking-[0.4em] uppercase">
            — Xác nhận tham dự —
          </div>
          <h2 data-split className="font-display text-4xl md:text-6xl text-ink-50 mt-4">
            Sự hiện diện của bạn
            <br />
            là món quà lớn nhất
          </h2>
        </div>

        {status === 'sent' ? (
          <div
            ref={successRef}
            className="text-center py-16 px-8 border border-gold-500/30"
            style={{
              background: 'linear-gradient(135deg, rgba(2,26,61,0.6) 0%, rgba(13,52,101,0.4) 100%)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Animated check */}
            <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full border border-gold-500/50"
              style={{ background: 'rgba(212,175,55,0.1)' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 16L13 23L26 9" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="font-display text-3xl text-gold-300 italic">
              Cảm ơn bạn, {form.name || 'bạn thân'}!
            </div>
            <p className="font-serif italic text-ink-200 mt-4 leading-relaxed">
              Mình đã nhận được xác nhận của bạn.
              <br />
              Hẹn gặp bạn vào ngày trọng đại sắp tới.
            </p>
            <div className="mt-8 font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/70">
              22 · 06 · 2026 · Trường ĐH Thủ Dầu Một
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal-up space-y-8 p-8 md:p-12 border border-gold-500/20 backdrop-blur-sm relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(2,26,61,0.5) 0%, rgba(1,13,34,0.6) 100%)' }}
          >
            {/* Shimmer effect on form border */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="shimmer-line" />
            </div>

            <Field label="Họ và tên">
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tên của bạn"
                className="w-full bg-transparent border-b border-gold-500/30 focus:border-gold-400 outline-none py-3 text-ink-50 font-serif text-lg placeholder:text-ink-200/40 transition-colors"
              />
            </Field>

            <Field label="Bạn sẽ đến chứ?">
              <div className="flex gap-4 flex-wrap">
                {ATTEND_OPTIONS.map((opt) => (
                  <label
                    key={opt.v}
                    className={`cursor-none px-5 py-3 border text-sm font-sans tracking-wide transition-all duration-300 ${
                      form.attend === opt.v
                        ? 'border-gold-400 text-gold-300 bg-gold-500/10'
                        : 'border-ink-400 text-ink-200 hover:border-gold-500/50'
                    }`}
                    data-hover
                  >
                    <input
                      type="radio"
                      name="attend"
                      value={opt.v}
                      checked={form.attend === opt.v}
                      onChange={() => setForm({ ...form, attend: opt.v })}
                      className="sr-only"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Lời chúc gửi đến mình">
              <textarea
                rows={3}
                value={form.wish}
                onChange={(e) => setForm({ ...form, wish: e.target.value })}
                placeholder="Một vài lời từ bạn..."
                className="w-full bg-transparent border-b border-gold-500/30 focus:border-gold-400 outline-none py-3 text-ink-50 font-serif text-lg placeholder:text-ink-200/40 resize-none transition-colors"
              />
            </Field>

            {status === 'error' && (
              <p className="text-center font-serif italic text-sm text-red-400">
                Chưa cấu hình Formspree — vui lòng điền FORMSPREE_ID vào file RSVP.jsx
              </p>
            )}

            <div className="pt-4 flex justify-center">
              <MagneticButton
                type="submit"
                disabled={status === 'sending'}
                className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase px-10 py-4 bg-gold-500 text-ink-950 hover:bg-gold-300 transition-colors duration-500 disabled:opacity-60"
              >
                {status === 'sending' ? 'Đang gửi…' : 'Gửi xác nhận'}
              </MagneticButton>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <div className="font-sans text-[10px] tracking-[0.3em] uppercase text-ink-200 mb-3">
        {label}
      </div>
      {children}
    </div>
  );
}
