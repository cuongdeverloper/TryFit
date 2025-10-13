import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Pricing.css";

export default function Pricing() {
  return (
    <>
      <Header />

      <section className="pricing-section">
        <div className="container">
          <h2 className="pricing-title">API Thử Đồ Tryfit</h2>
          <p className="pricing-subtitle">
            Tích hợp công nghệ AI thử đồ vào ứng dụng của bạn
          </p>

          <div className="pricing-content">
            {/* Features */}
            <div className="features">
              <h3 className="features-title"> Tính Năng API</h3>

              <div className="feature-item">
                <span className="feature-icon">✔</span>
                <div>
                  <h4>Thử Đồ Ảo Chính Xác</h4>
                  <p>API trả về kết quả thử đồ với độ chính xác cao</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <div>
                  <h4>Xử Lý Nhanh Chóng</h4>
                  <p>Thời gian phản hồi dưới 5 giây</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-icon">🔗</span>
                <div>
                  <h4>Dễ Tích Hợp</h4>
                  <p>RESTful API với tài liệu đầy đủ</p>
                </div>
              </div>
            </div>

            {/* Example Code */}
            <div className="code-example">
              <h3 className="features-title"> Ví Dụ Code</h3>
              <pre>
{`curl -X POST https://api.tryfit.ai/v1/try-on \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "person_image": "base64_image_data",
    "garment_image": "base64_garment_data",
    "garment_type": "top"
  }'`}
              </pre>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="plans">
            <div className="plan-card">
              <h4>Starter</h4>
              <p className="price">$29<span>/tháng</span></p>
              <ul>
                <li>1,000 API calls/tháng</li>
                <li>Hỗ trợ email</li>
                <li>Tài liệu API</li>
              </ul>
              <button className="btn">Bắt Đầu</button>
            </div>

            <div className="plan-card popular">
              <h4>Professional</h4>
              <p className="price">$99<span>/tháng</span></p>
              <ul>
                <li>10,000 API calls/tháng</li>
                <li>Hỗ trợ ưu tiên</li>
                <li>Webhook callbacks</li>
                <li>Advanced analytics</li>
              </ul>
              <button className="btn black">Phổ Biến Nhất</button>
            </div>

            <div className="plan-card">
              <h4>Enterprise</h4>
              <p className="price">Tùy chỉnh</p>
              <ul>
                <li>Unlimited API calls</li>
                <li>Dedicated support</li>
                <li>Custom integrations</li>
                <li>SLA guarantee</li>
              </ul>
              <button className="btn">Liên Hệ</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
