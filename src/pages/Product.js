import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Product.scss';

import img1 from '../cloth/00006_00.jpg';
import img2 from '../cloth/00008_00.jpg';
import img3 from '../cloth/00013_00.jpg';
import img4 from '../cloth/00017_00.jpg';
import img5 from '../cloth/00034_00.jpg';
import img6 from '../cloth/00035_00.jpg';
import img7 from '../cloth/00055_00.jpg';
import img8 from '../cloth/00057_00.jpg';
import img9 from '../cloth/00064_00.jpg';
import img10 from '../cloth/00067_00.jpg';

export default function Product() {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Degrey 23' Washed Jacket Tan - 23JACKT", price: "950,000₫", image: img1 },
    { id: 2, name: "Degrey 23'Basic Jacket V3 / Black Grape / Washed-...", price: "950,000₫", image: img2 },
    { id: 3, name: "Áo khoác bomber Degrey màu trắng", price: "750,000₫", originalPrice: "880,000₫", image: img3 },
    { id: 4, name: "Áo Khoác Degrey Jean Jacket Basic Wax Gray", price: "750,000₫", originalPrice: "880,000₫", image: img4 },
    { id: 5, name: "Áo khoác bomber Degrey màu đen", price: "750,000₫", originalPrice: "880,000₫", image: img5 },
    { id: 6, name: "Degrey Color Block Jacket - Multi", price: "850,000₫", image: img6 },
    { id: 7, name: "Degrey Sport Jacket - Blue Red", price: "650,000₫", image: img7 },
    { id: 8, name: "Degrey Jersey #84 - White Blue", price: "450,000₫", image: img8 },
    { id: 9, name: "Degrey Graphic Shirt - Black Red", price: "350,000₫", image: img9 },
    { id: 10, name: "Degrey Basic Tee - White", price: "250,000₫", image: img10 },
  ];

  const handleViewDetail = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleTryOn = (image) => {
    navigate("/demo", { state: { clothImage: image } });
  };

  return (
    <div className="product-page">
      <Header />

      <main className="product-main">
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card" onClick={() => handleViewDetail(product)}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <button
                  className="try-on-button"
                  onClick={() => handleTryOn(product.image)}
                >
                  View
                </button>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">
                  <span className="current-price">{product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
