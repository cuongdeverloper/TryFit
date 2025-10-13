import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";

import Home2 from "./Home2";
import Type from "./Type";
import Particle12 from "../../components/Particles12";
import logo from "../../assets/logo.png";
import './Home.scss'

function Home() {
  return (
    <section style={{marginTop:'30px'}}>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* <img
                src={logo}
                style={{ width: "170px" }}
                className="mydp"
                alt="TryFit Logo"
              /> */}
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
            </Col>

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
