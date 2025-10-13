import "./TestimonialsSection.scss";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Người yêu thích thời trang",
      text:
        "Là một người thường gặp khó khăn về chọn size, nền tảng web này thực sự là bước ngoặt. Thử đồ AR ngay trong trình duyệt rất chính xác, từ khi dùng đến giờ tôi chưa phải đổi trả sản phẩm nào.",
    },
    {
      name: "Mike Chen",
      role: "Người mua sắm online",
      text:
        "Tôi thích việc có thể thử nhiều bộ trang phục khác nhau ngay trong trình duyệt một cách nhanh chóng và dễ dàng. Không cần tải ứng dụng – giống như có phòng thử đồ cá nhân trên mọi thiết bị. Rất đáng để thử!",
    },
    {
      name: "Emily Rodriguez",
      role: "Bà mẹ bận rộn",
      text:
        "Với ba đứa con, tôi không có thời gian đi mua sắm. TryFit cho phép tôi mua sắm ngay trong giờ nghỉ trưa và tôi hoàn toàn yên tâm rằng mọi thứ sẽ vừa vặn. Nó đã thay đổi tủ đồ của tôi!",
    },
  ];

  return (
    <section id="testimonials" className="section" aria-label="Testimonials">
      <div className="container">
        <div className="section-title">
          <h2><span className="grad-text">Người Dùng Nói Gì</span></h2>
          <p className="section-subtitle">
            Tham gia cùng hàng ngàn khách hàng hài lòng đã thay đổi trải nghiệm mua sắm của họ
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="testimonial-card">
              <p className="testimonial-text">“{t.text}”</p>
              <div className="author">
                <div className="testimonial-author">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
