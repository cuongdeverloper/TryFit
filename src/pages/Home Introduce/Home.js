import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";
import Particle12 from "../../components/Particles12";
import logo from "../../assets/logo.png";
import './Home.scss'

function Home() {
  return (
    <section style={{ marginTop: '30px' }}>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Chào mừng đến với{" "}
                <span className="main-name"> TryFit 👕</span>
              </h1>

              <h2 className="heading-name">
                <strong className="purple"> Thử đồ ảo – Trải nghiệm thật </strong>
              </h2>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              {/* Video Demo */}
              <div className="home-video" style={{ textAlign: 'center', marginTop: '40px' }}>
                <iframe
                  width="100%"
                  height="340"
                  style={{ maxWidth: '600px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                  src="https://www.youtube.com/embed/7GnA8HELiWk?autoplay=1&mute=1&loop=1&playlist=7GnA8HELiWk"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>


              </div>
            </Col>

            {/* Nếu muốn hình ảnh cạnh header, bỏ comment */}
            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
