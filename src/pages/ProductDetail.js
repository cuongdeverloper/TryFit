import React, { useState } from 'react';
import { Upload, Loader2 } from "lucide-react";
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ProductDetail.scss';
import { generateTryOn } from '../service/TryonService';

export default function ProductDetail() {
  const { state } = useLocation();
  const product = state?.product;

  // fake data thêm mô tả + size
  const sizes = ['S', 'M', 'L', 'XL'];
  const description = `
    Áo khoác Degrey được làm từ chất liệu cotton pha polyester cao cấp, 
    mang lại cảm giác thoải mái, thoáng mát và dễ chịu khi mặc. 
    Thiết kế hiện đại, form dáng unisex, phù hợp cho cả nam và nữ. 
    Sản phẩm có độ bền cao, dễ giặt và giữ form tốt sau nhiều lần sử dụng.
  `;

  // State popup try-on
  const [showPopup, setShowPopup] = useState(false);
  const [personFile, setPersonFile] = useState(null);
  const [personImage, setPersonImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) return <div style={{ padding: 20 }}>Không tìm thấy sản phẩm.</div>;

  // Handle upload & generate
  const handlePersonUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPersonFile(file);
      setPersonImage(URL.createObjectURL(file));
    }
  };

  const handleGenerate = async () => {
    if (!personFile) return alert("Vui lòng chọn ảnh của bạn!");
    setLoading(true);
    setResultImage(null);

    try {
      // tạo file áo từ image product
      const res = await fetch(product.image);
      const blob = await res.blob();
      const clothFile = new File([blob], "cloth.jpg", { type: blob.type });

      const result = await generateTryOn(personFile, clothFile);

      if (result.image_url) setResultImage(result.image_url);
      else if (result.image_base64)
        setResultImage(`data:image/png;base64,${result.image_base64}`);
    } catch (err) {
      console.error(err);
      alert("Lỗi khi gọi API, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-detail-page">
      <Header />

      <main className="product-detail-main">
        <div className="detail-container">
          {/* Image */}
          <div className="detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          {/* Info */}
          <div className="detail-info">
            <h2 className="product-name">{product.name}</h2>

            <div className="price-wrapper">
              <span className="current-price">{product.price}</span>
              {product.originalPrice && (
                <span className="original-price">{product.originalPrice}</span>
              )}
            </div>

            <div className="detail-sizes">
              <h4>Chọn size:</h4>
              <div className="size-list">
                {sizes.map((size) => (
                  <span
                    key={size}
                    className={`size-item ${size === selectedSize ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-actions">
              <button className="add-cart-btn">🛒 Thêm vào giỏ</button>
              <button className="tryon-btn" onClick={() => setShowPopup(true)}>
                👕 Xem thử sản phẩm
              </button>
            </div>

            <div className="detail-description">
              <h4>Mô tả sản phẩm</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Popup Try On */}
      {showPopup && (
        <div className="tryon-popup">
          <div className="tryon-content">
            <button className="close-btn" onClick={() => setShowPopup(false)}>✖</button>

            {!resultImage ? (
              <>
                <h3>👕 Thử đồ ảo</h3>
                <p>Vui lòng tải lên ảnh của bạn để xem kết quả</p>

                {!personImage ? (
                  <label className="upload-box">
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
                  <div className="preview-box">
                    <img src={personImage} alt="Person" />
                  </div>
                )}

                <button
                  className="generate-btn"
                  onClick={handleGenerate}
                  disabled={!personFile || loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="spin" size={18} /> Đang xử lý...
                    </>
                  ) : (
                    "🚀 Tạo kết quả"
                  )}
                </button>
              </>
            ) : (
              <div className="result-box">
                <h3>Kết quả thử đồ</h3>
                <img src={resultImage} alt="Result" />
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
