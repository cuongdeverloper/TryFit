import "./FeaturesSection.scss";

export default function FeaturesSection() {
  const features = [
    {
      icon: "📱",
      title: "Nền tảng Web",
      description:
        "Truy cập từ bất kỳ thiết bị nào có trình duyệt web. Không cần tải xuống hay cài đặt - chỉ cần mở và bắt đầu thử đồ."
    },
    {
      icon: "📷",
      title: "Thử đồ ảo Web AR",
      description:
        "Công nghệ AR tiên tiến hoạt động trực tiếp trên trình duyệt, ghép quần áo vào cơ thể bạn với độ chính xác 99% bằng camera thiết bị."
    },
    {
      icon: "🤖",
      title: "AI Gợi ý Phù hợp",
      description:
        "Thuật toán học máy phân tích số đo cơ thể của bạn và gợi ý kích cỡ, kiểu dáng phù hợp nhất cho từng sản phẩm."
    },
    {
      icon: "⚡",
      title: "Kết quả Thời gian thực",
      description:
        "Trải nghiệm thử đồ ảo ngay lập tức, không cần chờ đợi. Thấy ngay hình ảnh bạn mặc nhiều trang phục khác nhau."
    },
    {
      icon: "💾",
      title: "Đề xuất Kích cỡ Thông minh",
      description:
        "Nhận gợi ý kích thước chính xác dựa trên số đo và bảng size riêng của từng thương hiệu."
    },
    {
      icon: "🛍️",
      title: "Mua sắm liền mạch",
      description:
        "Tích hợp trực tiếp với các nhà bán lẻ thời trang yêu thích. Thử và mua sắm mà không cần rời khỏi nền tảng."
    }
  ];

  return (
    <section id="features" className="section" aria-label="Features">
      <div className="container">
        <div className="section-title">
          <h2>
            <span className="grad-text">Tính năng đột phá</span>
          </h2>
          <p className="section-subtitle">
            Khám phá cách TryFit đang thay đổi trải nghiệm mua sắm trực tuyến
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card">
              <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
