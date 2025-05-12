import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    content:
      "His work was exactly what we needed, and he was outstanding to work with.",
    name: "Fresher Manager @ Dell Technologies",
    position: "BE Delphonse",
  },
  {
    id: 2,
    content:
      "His work was exceptional and exactly what our team needed. He was an excellent teammate and a reliable collaborator.",
    name: "R&D Manager @ ThuDauMot Joint Stock Company",
    position: "Tran Van On ",
  },
  // Thêm nhiều dữ liệu nếu muốn để chạy liên tục mượt hơn
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="testimonials-title">Things People Say</h2>
      <div className="testimonials-marquee-wrapper">
        <div className="testimonials-container">
          {[...testimonials, ...testimonials].map((item) => (
            <div key={item.id + Math.random()} className="testimonial-card">
              <div className="window-buttons">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>
              <p className="testimonial-content">{item.content}</p>
              <p className="testimonial-name">
                <strong>{item.name}</strong>
              </p>
              <p className="testimonial-position">{item.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
