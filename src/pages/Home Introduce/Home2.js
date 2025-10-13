import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              VỀ <span className="purple"> NHÓM TRYFIT </span>
            </h1>
            <p className="home-about-body">
              TryFit là nhóm phát triển công nghệ{" "}
              <b className="purple">thử đồ ảo</b> ứng dụng{" "}
              <b className="purple">AI và xử lý hình ảnh</b> giúp người dùng
              trải nghiệm việc ghép trang phục, áo quần, phụ kiện trực tiếp lên
              hình ảnh của mình một cách tự nhiên và chân thực nhất.
              <br />
              <br />
              Chúng tôi hướng tới việc{" "}
              <i>
                <b className="purple">
                  kết hợp công nghệ thực tế ảo (AR) và thị giác máy tính
                </b>
              </i>{" "}
              để tạo nên nền tảng thử đồ thông minh, hỗ trợ thương mại điện tử
              và các thương hiệu thời trang.
              <br />
              <br />
              Sản phẩm của TryFit có thể được tùy chỉnh để{" "}
              <b className="purple">bán hoặc tích hợp</b> vào các hệ thống cửa
              hàng trực tuyến, mang lại trải nghiệm mua sắm hiện đại và sinh
              động.
            </p>
          </Col>
        </Row>

        <Row>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
