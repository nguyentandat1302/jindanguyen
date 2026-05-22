import { useReveal } from '../hooks/useReveal';

export default function Greeting() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-16 max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <div className="reveal-fade font-serif italic text-gold-400 text-xs md:text-sm tracking-[0.4em] uppercase">
          — Đôi lời ngỏ —
        </div>
      </div>

      <h2
        data-split
        className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-ink-50 text-center max-w-4xl mx-auto"
      >
        Bốn năm — không dài, cũng không ngắn.
        <br />
        Đủ để biến một sinh viên năm nhất bỡ ngỡ
        <br />
        thành người sẵn sàng bước ra thế giới.
      </h2>

      <div className="reveal-up mt-16 text-center max-w-2xl mx-auto">
        <p className="font-serif italic text-lg md:text-xl text-ink-200 leading-relaxed">
          Hôm nay, em xin được khép lại chương đầu của hành trình tại
          <span className="text-gold-300"> Trường Đại học Thủ Dầu Một</span>.
          <br />
          Em viết những dòng này để gửi đến thầy cô, gia đình và bạn bè —
          những người đã đồng hành cùng em suốt chặng đường vừa qua.
        </p>
      </div>

      <div className="reveal-fade mt-16 flex justify-center">
        <div className="w-24 h-[1px] bg-gold-500/60" />
      </div>
    </section>
  );
}
