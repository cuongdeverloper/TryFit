import "./GetStartedSection.scss";

export default function GetStartedSection() {
  return (
    <section id="get-started" className="section cta-section" aria-label="Get started">
      <div className="container">
        <div className="cta-card">
          {/* Left: Text */}
          <div className="cta-content">
            <div className="tag">🌐 Launch TryFit Web</div>

            <h2>
              <span className="grad-text">Start Your Virtual Fitting</span> Experience
            </h2>

            <p className="lede">
              No downloads, no installations. Just open your browser and start trying
              on clothes with our cutting-edge web technology.
            </p>

            <div className="cta-buttons">
              <a href="/product" className="btn btn--primary">
                🌐 Launch Web App
              </a>
              <a href="/demo" className="btn btn--ghost">
                Try Demo
              </a>
            </div>

            <div className="features">
              {[
                "Works on all modern browsers",
                "Free to use - no account needed",
                "Compatible with 1000+ fashion brands",
              ].map((feature, index) => (
                <div key={index} className="feature">
                  <div className="icon">✓</div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTg0NjEzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fashion Technology Interface"
            />
            <div className="icon-badge" aria-hidden="true">🌐</div>
          </div>
        </div>
      </div>
    </section>
  );
}
