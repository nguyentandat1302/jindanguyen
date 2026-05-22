import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

/**
 * useReveal — fades the section in and animates child `.reveal-up`, `.reveal-fade`,
 * and `[data-split]` text on scroll.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Split text targets
      const splits = el.querySelectorAll('[data-split]');
      const splitInstances = [];
      splits.forEach((s) => {
        const inst = new SplitType(s, { types: 'words,chars' });
        splitInstances.push(inst);
        gsap.set(inst.chars, { yPercent: 110, opacity: 0 });
        ScrollTrigger.create({
          trigger: s,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(inst.chars, {
              yPercent: 0,
              opacity: 1,
              duration: 0.9,
              ease: 'power4.out',
              stagger: 0.018,
            });
          },
        });
      });

      // reveal-up
      el.querySelectorAll('.reveal-up').forEach((node) => {
        gsap.fromTo(
          node,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: node,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // reveal-fade
      el.querySelectorAll('.reveal-fade').forEach((node) => {
        gsap.fromTo(
          node,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: node,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      return () => splitInstances.forEach((s) => s.revert());
    }, el);

    return () => ctx.revert();
  }, [options.deps || 0]);

  return ref;
}
