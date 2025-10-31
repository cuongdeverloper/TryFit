import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo & Giới thiệu */}
          <div className="footer-brand">
            <p>
              Cách mạng hóa trải nghiệm mua sắm trực tuyến với phòng thử đồ ảo AI. 
              Trải nghiệm tương lai của ngành bán lẻ thời trang.
            </p>
          </div>

          {/* Nền tảng */}
          <div>
            <h4>Nền tảng</h4>
            <ul>
              <li><a href="#">Ứng dụng Web</a></li>
              <li><a href="#">Tính năng</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Tích hợp</a></li>
            </ul>
          </div>

          {/* Công ty */}
          <div>
            <h4>Công ty</h4>
            <ul>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Tuyển dụng</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h4>Hỗ trợ</h4>
            <ul>
              <li><a href="#">Trung tâm trợ giúp</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Điều khoản dịch vụ</a></li>
              <li><a href="#">Tình trạng hệ thống</a></li>
            </ul>
          </div>

          {/* Liên hệ & Mạng xã hội */}
          <div>
            <h4>Liên hệ</h4>
            <ul>
              <li>Email: tryfitvirtualtryon@gmail.com</li>
              <li>
                Mạng xã hội: 
                <a href="https://www.facebook.com/profile.php?id=61581350468838" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 TryFit Virtual Fitting Room. Bản quyền thuộc về TryFit.</p>
          <p className="student-project">Dự án sinh viên từ Đại học FPT, Đà Nẵng.</p>
        </div>
      </div>
    </footer>
  );
}
