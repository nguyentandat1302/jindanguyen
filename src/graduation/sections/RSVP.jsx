import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import MagneticButton from '../components/MagneticButton';

export default function RSVP() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', wish: '', attend: 'yes' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // emailjs hookup goes here — keep client-only confirmation for now
    setTimeout(() => {
      setStatus('sent');
    }, 900);
  };

  return (
    <section
      id="rsvp"
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden"
    >
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
          <div className="reveal-up text-center py-16 border border-gold-500/30 bg-ink-950/40">
            <div className="font-display text-3xl text-gold-300 italic">
              Cảm ơn bạn.
            </div>
            <p className="font-serif italic text-ink-200 mt-4">
              Hẹn gặp bạn vào ngày trọng đại sắp tới.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal-up space-y-8 p-8 md:p-12 border border-gold-500/20 bg-ink-950/40 backdrop-blur-sm"
          >
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
                {[
                  { v: 'yes', label: 'Chắc chắn rồi' },
                  { v: 'maybe', label: 'Sẽ cố gắng' },
                  { v: 'no', label: 'Tiếc quá, không thể' },
                ].map((opt) => (
                  <label
                    key={opt.v}
                    className={`cursor-none px-5 py-3 border text-sm font-sans tracking-wide transition-all ${
                      form.attend === opt.v
                        ? 'border-gold-400 text-gold-300 bg-gold-500/10'
                        : 'border-ink-500 text-ink-200 hover:border-gold-500/50'
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

            <div className="pt-4 flex justify-center">
              <MagneticButton
                type="submit"
                disabled={status === 'sending'}
                className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase px-10 py-4 bg-gold-500 text-ink-950 hover:bg-gold-300 transition-colors disabled:opacity-60"
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
