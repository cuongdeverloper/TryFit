import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRocket, FaHeart, FaUsers } from "react-icons/fa";
import "./AboutUsSection.scss";

export default function AboutUsSection() {
  const handleNavigate = () => {
    window.open("https://try-fit-dn.vercel.app/registerdemo", "_blank");
  };

  return (
    <section className="about-us-section">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="section-title">Giá trị cho các Thương hiệu Thời trang</h2>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={4}>
            <div className="about-card text-center">
              <div className="icon-wrapper">
                <FaRocket />
              </div>
              <h3>Tăng tỷ lệ chuyển đổi</h3>
              <p>Hỗ trợ thương hiệu tăng doanh số và hiệu quả bán hàng.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="about-card text-center">
              <div className="icon-wrapper">
                <FaHeart />
              </div>
              <h3>Giữ chân khách hàng</h3>
              <p>Tạo sự gắn bó lâu dài và mang đến trải nghiệm mua sắm thú vị.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="about-card text-center">
              <div className="icon-wrapper">
                <FaUsers />
              </div>
              <h3>Hình ảnh hiện đại</h3>
              <p>Thương hiệu trở nên công nghệ, trẻ trung và chuyên nghiệp hơn.</p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <h2 className="section-title">Đăng ký Truy cập Sớm / Trở thành Đối tác Đầu tiên</h2>
            <p>→ Đăng ký sớm để trở thành đối tác thử nghiệm đầu tiên.</p>
            <Button className="btn-register" onClick={handleNavigate}>
              Đăng ký ngay
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
