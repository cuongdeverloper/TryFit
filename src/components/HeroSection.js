import "./HeroSection.scss";
import beforeImg from "../assets/before.png";
import afterImg from "../assets/after.png";
import { FiUpload, FiSmartphone } from "react-icons/fi"; // đổi icon upload

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Hỗ trợ bởi AI Thay quần áo bằng trí tuệ <br /> nhân tạo (AI) ở quy mô lớn
          </h1>
          <p>
            App thay đổi quần áo bằng AI giúp bạn vẽ trang phục online miễn phí vào ảnh.
            Thử đồ áo như váy đầm, áo thun, đồng phục, v.v. Giới hạn duy nhất là trí tưởng tượng của bạn.
          </p>
        </div>

        <div className="hero-content">
          

          {/* Before & After */}
          <div className="preview-box">
            <div className="before-after">
              <div className="image-card">
                <span className="badge">Trước</span>
                <img src={beforeImg} alt="Trước" />
              </div>
              <div className="image-card">
                <span className="badge">Sau</span>
                <img src={afterImg} alt="Sau" />
                <button className="transform-btn">✨ AI Transform</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
