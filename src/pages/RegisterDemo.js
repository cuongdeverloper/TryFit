import { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import { Mail, FileText, Tag, DollarSign } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainLayout from "./MainLayout";
import "./RegisterDemo.scss";
import Particles from "../components/Particles";

export default function RegisterDemo() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    brandName: "",
    budget: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.send(
        "service_02wrc95",
        "template_27je0mn",
        form,
        "z7e_DXUh0paQooZvJ"
      );

      setSuccess(true);
      setForm({
        fullName: "",
        email: "",
        brandName: "",
        budget: "",
        note: "",
      });
    } catch (error) {
      console.error("❌ Error sending email:", error);
      alert("Gửi thất bại. Vui lòng thử lại sau!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout showFooter={false}>
      <div className='reset-container' style={{ position: 'relative' }}>
        <div className="ProfileManage-container-parti" style={{ position: 'absolute', zIndex: 1 }}>
          <Particles />
        </div>
        <div
          className="register-demo"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            position: 'relative', zIndex: 100, width: '100%',
            marginTop: '50px'
          }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6}>
                <Card
                  data-aos="zoom-in"
                  className="shadow-lg border-0 rounded-4"
                  style={{ overflow: "hidden" }}
                >
                  <Card.Body className="p-5 bg-white">
                    <h2 className="text-center text-primary mb-4 fw-bold">
                      🚀 Đăng ký trải nghiệm Live Demo
                    </h2>
                    <p className="text-center text-muted mb-4">
                      Điền thông tin bên dưới và chúng tôi sẽ liên hệ với bạn sớm.
                    </p>

                    <Form onSubmit={handleSubmit}>
                      {/* Full Name */}
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FileText size={18} className="me-2 text-primary" />
                          Tên đầy đủ
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Nhập tên đầy đủ của bạn"
                          required
                        />
                      </Form.Group>

                      {/* Email */}
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <Mail size={18} className="me-2 text-primary" />
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Nhập email của bạn"
                          required
                        />
                      </Form.Group>

                      {/* Brand Name */}
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <Tag size={18} className="me-2 text-primary" />
                          Tên thương hiệu
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="brandName"
                          value={form.brandName}
                          onChange={handleChange}
                          placeholder="Nhập tên thương hiệu của bạn"
                          required
                        />
                      </Form.Group>

                      {/* Budget */}
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <DollarSign size={18} className="me-2 text-primary" />
                          Mức giá sẵn sàng chi trả
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          placeholder="Nhập mức giá bạn sẵn sàng chi trả"
                          required
                        />
                      </Form.Group>

                      {/* Note */}
                      <Form.Group className="mb-4">
                        <Form.Label>Ghi chú (tùy chọn)</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="note"
                          value={form.note}
                          onChange={handleChange}
                          placeholder="Bạn muốn nói gì thêm..."
                        />
                      </Form.Group>

                      <div className="d-grid">
                        <Button
                          variant="primary"
                          type="submit"
                          size="lg"
                          disabled={loading}
                          className="fw-semibold"
                        >
                          {loading ? (
                            <>
                              <Spinner animation="border" size="sm" className="me-2" /> Đang gửi...
                            </>
                          ) : (
                            "Gửi đăng ký"
                          )}
                        </Button>
                      </div>
                    </Form>

                    {success && (
                      <Alert variant="success" className="mt-4 text-center rounded-3">
                        ✅ Cảm ơn! Chúng tôi sẽ liên hệ bạn sớm.
                      </Alert>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </MainLayout>
  );
}
