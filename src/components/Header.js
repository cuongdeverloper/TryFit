import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";
import logo from "../assets/logo.png";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} className="logo-img"></img>
          <span className="logo-text">Tryfit</span>
        </Link>

        {/* Nav links */}
        <nav className="nav-links">
          <a href="#home">Trang chủ</a>
          <div className="dropdown">
            <span>Công cụ ▾</span>
            <div className="dropdown-menu">
              <a href="#tool1">Tool 1</a>
              <a href="#tool2">Tool 2</a>
            </div>
          </div>
          <a href="/pricing">Giá</a>
          <a href="#inspiration">Cảm hứng</a>
          <a href="/pricing">API</a>
        </nav>

        {/* Actions */}
        <div className="actions">
          <button className="search-btn">🔍</button>
          <button className="trial-btn" onClick={() => navigate('/registerdemo')}>Book demo</button>
          {/* <button className="login-btn">Đăng nhập</button> */}
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
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Trang chủ</a>
          <a href="/pricing" onClick={() => setIsMenuOpen(false)}>Giá</a>
          <a href="#inspiration" onClick={() => setIsMenuOpen(false)}>Cảm hứng</a>
          <a href="/pricing" onClick={() => setIsMenuOpen(false)}>API</a>
          <a href="#login" onClick={() => setIsMenuOpen(false)}>Đăng nhập</a>
        </nav>
      )}
    </header>
  );
}
