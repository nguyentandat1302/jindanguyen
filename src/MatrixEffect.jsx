import React, { useEffect, useRef } from 'react';
import './MatrixEffect.css';

const MatrixEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = 800; // Đặt chiều rộng của canvas
    const height = canvas.height = 600; // Đặt chiều cao của canvas

    const columns = Math.floor(width / 20);
    const drops = Array(columns).fill(0);

    const draw = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#000';
      ctx.font = '20px monospace';
      ctx.textAlign = 'center';

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(text, i * 20 + 10, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="matrixeffect-canvas" />;
};

export default MatrixEffect;
