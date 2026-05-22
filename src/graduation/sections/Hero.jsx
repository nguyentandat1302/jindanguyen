import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import Scene3D from '../components/Scene3D';
import Countdown from '../components/Countdown';
import MagneticButton from '../components/MagneticButton';
import { PROFILE } from '../utils/config';

export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      const name = new SplitType('#hero-name', { types: 'chars' });
      const subtitle = new SplitType('#hero-sub', { types: 'words' });

      gsap.set(name.chars, { yPercent: 110, opacity: 0 });
      gsap.set(subtitle.words, { yPercent: 110, opacity: 0 });
      gsap.set('.hero-fade', { opacity: 0, y: 30 });

      tl.to(name.chars, {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.04,
      }, 0.2)
        .to(subtitle.words, {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.05,
        }, '-=0.7')
        .to('.hero-fade', {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
        }, '-=0.4');

      // Floating scroll hint
      gsap.to('.scroll-hint', {
        y: 10,
        opacity: 0.4,
        repeat: -1,
        yoyo: true,
        duration: 1.4,
        ease: 'sine.inOut',
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      <Scene3D />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,7,0.7) 80%)' }}
      />

      {/* Top corner ornament */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 hero-fade">
        <div className="font-serif italic text-gold-400 text-xs md:text-sm tracking-[0.4em] uppercase">
          Trân trọng kính mời
        </div>
        <div className="mt-2 w-12 h-[1px] bg-gold-500/60" />
      </div>

      <div className="absolute top-8 right-8 md:top-12 md:right-12 text-right hero-fade">
        <div className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-ink-200 uppercase">
          Lễ Tốt Nghiệp
        </div>
        <div className="font-display text-lg md:text-xl text-gold-300 mt-1">
          {PROFILE.graduationDateDisplay}
        </div>
      </div>

      {/* Center stack — name is dominant */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pointer-events-none">
        <div className="overflow-hidden">
          <h1
            id="hero-name"
            className="font-display text-[15vw] md:text-[10vw] leading-[0.95] text-ink-50 tracking-tight"
            style={{ textShadow: '0 0 60px rgba(212,175,55,0.35), 0 0 120px rgba(212,175,55,0.15)' }}
          >
            {PROFILE.fullName}
          </h1>
        </div>

        <div className="overflow-hidden mt-4">
          <p id="hero-sub" className="font-serif italic text-base md:text-xl text-gold-300 tracking-wide">
            {PROFILE.universityShort} · {PROFILE.major} · Khoá 2021 – 2026
          </p>
        </div>

        <div className="hero-fade mt-12 pointer-events-auto">
          <Countdown />
        </div>

        <div className="hero-fade mt-10 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
          <MagneticButton
            as="a"
            href="#event"
            className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase px-7 py-4 border border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-ink-950 transition-colors duration-500"
          >
            Xem lời mời
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#rsvp"
            className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase px-7 py-4 bg-gold-500 text-ink-950 hover:bg-gold-300 transition-colors duration-500"
          >
            Xác nhận tham dự
          </MagneticButton>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 z-10">
        <div className="font-sans text-[10px] tracking-[0.4em] text-ink-200 uppercase">
          Cuộn xuống
        </div>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold-400 to-transparent" />
      </div>
    </section>
  );
}
