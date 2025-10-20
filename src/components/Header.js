import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";
import logo from "../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header" style={{ zIndex: 1000 }}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} className="logo-img" alt="Logo" />
          <span className="logo-text">Tryfit</span>
        </Link>

        {/* Actions */}
        <div className="actions">
          <button className="search-btn">🔍</button>
          <button
            className="inventory-btn"
            onClick={() => navigate("/product")}
          >
            Kho đồ
          </button>
          <button
            className="trial-btn"
            onClick={() => navigate("/demo")}
          >
            Thử ngay
          </button>
          <button
            className="signup-btn"
            onClick={() => navigate("/registerdemo")}
          >
            Đăng ký dùng thử
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <a onClick={() => { navigate("/inventory"); setIsMenuOpen(false); }}>Kho đồ</a>
          <a onClick={() => { navigate("/registerdemo"); setIsMenuOpen(false); }}>Thử ngay</a>
          <a onClick={() => { navigate("/signup"); setIsMenuOpen(false); }}>Đăng ký dùng thử</a>
        </nav>
      )}
    </header>
  );
}
