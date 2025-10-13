import "./HowItWorksSection.scss";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Quét cơ thể của bạn",
      description:
        "Sử dụng camera của thiết bị ngay trong trình duyệt để quét cơ thể. AI của chúng tôi sẽ tạo mô hình 3D chỉ trong vài giây.",
    },
    {
      number: 2,
      title: "Duyệt & Chọn trang phục",
      description:
        "Chọn từ hàng nghìn mẫu quần áo đến từ các thương hiệu hàng đầu. Danh mục được cập nhật hàng ngày với sản phẩm mới.",
    },
    {
      number: 3,
      title: "Thử đồ ảo",
      description:
        "Xem quần áo hiển thị trên avatar ảo của bạn theo thời gian thực. Điều chỉnh kích cỡ, màu sắc và kiểu dáng ngay lập tức.",
    },
    {
      number: 4,
      title: "Mua sắm hoàn hảo",
      description:
        "Tự tin với lựa chọn của bạn và mua sắm khi đã biết chính xác quần áo sẽ vừa vặn như thế nào.",
    },
  ];

  return (
    <section id="how-it-works" className="section" aria-label="How it works">
      <div className="container">
        <div className="section-title">
          <h2><span className="grad-text">Cách Hoạt Động</span></h2>
          <p className="section-subtitle">
            Bắt đầu với TryFit chỉ trong 4 bước đơn giản
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.number} className="step-card">
              <div className="step-number" aria-hidden="true">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
