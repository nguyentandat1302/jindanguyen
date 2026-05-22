import { useRef } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children, className = '', as: Tag = 'button', strength = 30, ...props }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, {
      x: (x / rect.width) * strength,
      y: (y / rect.height) * strength,
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  const handleLeave = () => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  return (
    <Tag
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-hover
      {...props}
    >
      {children}
    </Tag>
  );
}
