import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dotPos = { x: mouse.x, y: mouse.y };
    const ringPos = { x: mouse.x, y: mouse.y };

    const xToDot = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3' });
    const yToDot = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3' });
    const xToRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' });
    const yToRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });

    const handleMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      xToDot(mouse.x);
      yToDot(mouse.y);
      xToRing(mouse.x);
      yToRing(mouse.y);
    };

    const grow = () => gsap.to(ring, { scale: 1.8, duration: 0.3, ease: 'power3' });
    const shrink = () => gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power3' });

    const click = () => gsap.fromTo(ring, { scale: 0.6 }, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.5)' });

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', click);

    const hoverables = document.querySelectorAll('a, button, [data-hover]');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    const interval = setInterval(() => {
      const fresh = document.querySelectorAll('a, button, [data-hover]');
      fresh.forEach((el) => {
        if (el.dataset.cursorBound) return;
        el.dataset.cursorBound = '1';
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });
    }, 1500);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', click);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 36,
          height: 36,
          border: '1px solid var(--gold)',
          borderRadius: '50%',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={dotRef}
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 6,
          height: 6,
          background: 'var(--gold)',
          borderRadius: '50%',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}
