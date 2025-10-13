import { useState, useEffect } from "react";
import { Upload, User, Shirt, ZoomIn, Loader2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import "./Demo.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { generateTryOn } from "../service/TryonService";

export default function Demo() {
  const location = useLocation();
  const [personImage, setPersonImage] = useState(null);
  const [clothImage, setClothImage] = useState(null);
  const [personFile, setPersonFile] = useState(null);
  const [clothFile, setClothFile] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadClothFile = async (imageUrl) => {
      try {
        const res = await fetch(imageUrl);
        const blob = await res.blob();
        const file = new File([blob], "cloth.jpg", { type: blob.type });
        setClothFile(file);
      } catch (err) {
        console.error("Không tải được clothImage:", err);
      }
    };

    if (location.state?.clothImage) {
      setClothImage(location.state.clothImage);
      loadClothFile(location.state.clothImage);
    }
  }, [location.state]);

  const handlePersonUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPersonFile(file);
      setPersonImage(URL.createObjectURL(file));
    }
  };

  const handleClothUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setClothFile(file);
      setClothImage(URL.createObjectURL(file));
    }
  };

  const handleGenerate = async () => {
    if (!personFile || !clothFile) return alert("Vui lòng chọn đủ ảnh!");
    setLoading(true);
    setResultImage(null);

    try {
      const result = await generateTryOn(personFile, clothFile);
      if (result.image_url) {
        setResultImage(result.image_url);
      } else if (result.image_base64) {
        setResultImage(`data:image/png;base64,${result.image_base64}`);
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi khi gọi API, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <section className="section vfit-wrapper">
        <div className="container">
          <h2 className="vfit-title">👗 Try Virtual Fitting Demo</h2>
          <p className="vfit-subtitle">
            Upload ảnh người và quần áo để xem thử trên mô hình AI
          </p>

          <div className="vfit-upload-section">
            {/* Upload person image */}
            <div className="vfit-upload-card">
              <User className="vfit-icon" />
              <h4>Ảnh Người</h4>

              {!personImage ? (
                <label className="vfit-upload-box">
                  <Upload size={20} />
                  <span>Chọn ảnh</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePersonUpload}
                    hidden
                  />
                </label>
              ) : (
                <div className="vfit-preview-box">
                  <img
                    src={personImage}
                    alt="Person"
                    className="vfit-preview-image"
                  />
                </div>
              )}
            </div>

            {/* Upload cloth image (nếu chưa có) */}
            <div className="vfit-upload-card">
              <Shirt className="vfit-icon" />
              <h4>Ảnh Quần Áo</h4>

              {clothImage ? (
                <div className="vfit-preview-box cloth-preview">
                  <img
                    src={clothImage}
                    alt="Cloth"
                    className={`vfit-preview-image ${isZoomed ? "zoomed" : ""}`}
                    onClick={() => setIsZoomed(!isZoomed)}
                    title="Click để phóng to / thu nhỏ"
                  />
                  <ZoomIn
                    className="zoom-icon"
                    onClick={() => setIsZoomed(!isZoomed)}
                  />
                </div>
              ) : (
                <label className="vfit-upload-box">
                  <Upload size={20} />
                  <span>Thêm ảnh quần áo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleClothUpload}
                    hidden
                  />
                </label>
              )}
            </div>
          </div>

          <button
            className="btn btn-primary btn-large"
            onClick={handleGenerate}
            disabled={!personFile || !clothFile || loading}
          >
            {loading ? (
              <>
                <Loader2 className="spin" size={20} /> Đang xử lý...
              </>
            ) : (
              "🚀 Generate Result"
            )}
          </button>

          {resultImage && (
            <div className="vfit-result">
              <h3>Kết Quả</h3>
              <div className="vfit-result-box">
                <img src={resultImage} alt="Result" />
              </div>
            </div>
          )}
        </div>
      </section>

      {loading && (
        <div className="loading-overlay">
          <div className="spinner-box">
            <Loader2 className="spin large" size={50} />
            <p>Đang xử lý hình ảnh...</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
