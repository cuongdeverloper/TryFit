import React from "react";
import "./AboutUs.scss";
import DHC from "../assets/DHC.jpg";
import MA from "../assets/MA.jpg";
import HA from "../assets/HA.jpg";
import HN from "../assets/HN.jpg";
import VK from "../assets/VK.jpg";
import TT from "../assets/TT.jpg";

const team = [
  {
    name: "Bùi Ngọc Minh Anh",
    role: "CEO",
    desc: "Sinh viên Multimedia, phụ trách chiến lược thương hiệu, truyền thông và storytelling.",
    img: MA,
  },
  {
    name: "Trần Hoài Anh",
    role: "COO - CCO",
    desc: "Sinh viên Multimedia, quản lý vận hành, đội nhóm và định hướng marketing.",
    img: HA,
  },
  {
    name: "Hiếu Ngân",
    role: "CDO",
    desc: "Sinh viên Thiết kế, chịu trách nhiệm UI/UX và nhận diện hình ảnh thương hiệu.",
    img: HN,
  },
  {
    name: "Lê Trung Thành",
    role: "CPO - DEV",
    desc: "Sinh viên Công nghệ, phát triển sản phẩm và tối ưu trải nghiệm người dùng.",
    img: TT,
  },
  {
    name: "Đỗ Hùng Cường",
    role: "CTO - DEV",
    desc: "Sinh viên Công nghệ, chuyên phát triển sản phẩm và UX/UI.",
    img: DHC,
  },
  {
    name: "Khoa Nguyễn",
    role: "CIO - DEV",
    desc: "Sinh viên Công nghệ, đảm nhận phát triển sản phẩm và UX/UI.",
    img: VK,
  },
];

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      {/* Câu chuyện của chúng tôi */}
      <div className="story-container">
        <h2 className="section-title">Câu Chuyện / Tại Sao Chúng Tôi Tạo Ra Tryfit</h2>
        <p className="story-text">
          → Chúng tôi là nhóm sinh viên đam mê công nghệ và thời trang, mong muốn
          giúp các thương hiệu Việt áp dụng công nghệ mới để nâng cao trải nghiệm khách hàng.
        </p>
      </div>

      {/* Đội ngũ */}
      <h2 className="about-title">
        ĐỘI NGŨ TRYFIT
      </h2>
      <div className="team-container">
        {team.map((member, index) => (
          <div className="team-card" key={index} data-aos-delay={index * 100}>
            <img src={member.img} alt={member.name} className="team-img" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
