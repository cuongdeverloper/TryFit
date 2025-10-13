import { useState } from "react";
import { Form, Button, Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import { User, Mail, Phone, FileText } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MainLayout from "./MainLayout";
import "./RegisterDemo.scss";
import Particles from "../components/Particles";

export default function RegisterDemo() {
  const [form, setForm] = useState({
    firstName: "",
    fullName: "",
    email: "",
    phone: "",
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
        firstName: "",
        fullName: "",
        email: "",
        phone: "",
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
            position: 'relative', zIndex: 100, marginTop: '10px', width: '100%'
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
                      🚀 Register for Live Demo
                    </h2>
                    <p className="text-center text-muted mb-4">
                      Fill out the form below and we’ll contact you soon.
                    </p>

                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <User size={18} className="me-2 text-primary" />
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FileText size={18} className="me-2 text-primary" />
                          Full Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </Form.Group>

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
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>
                          <Phone size={18} className="me-2 text-primary" />
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Note (optional)</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="note"
                          value={form.note}
                          onChange={handleChange}
                          placeholder="Tell us more..."
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
                              <Spinner animation="border" size="sm" className="me-2" /> Sending...
                            </>
                          ) : (
                            "Submit Request"
                          )}
                        </Button>
                      </div>
                    </Form>

                    {success && (
                      <Alert variant="success" className="mt-4 text-center rounded-3">
                        ✅ Thank you! We’ll get in touch soon.
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
