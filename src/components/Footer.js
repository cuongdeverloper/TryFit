import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3>TryFit</h3>
            <p>
              Revolutionizing online shopping with AI-powered virtual fitting rooms. 
              Experience the future of fashion retail.
            </p>
          </div>

          <div>
            <h4>Platform</h4>
            <ul>
              <li><a href="#">Web App</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 TryFit Virtual Fitting Room. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
