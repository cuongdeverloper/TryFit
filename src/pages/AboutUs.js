import React from "react";
import "./AboutUs.scss";
import DHC from '../assets/DHC.jpg'
import MA from '../assets/MA.jpg'
import HA from '../assets/HA.jpg'
import HN from '../assets/HN.jpg'
import VK from '../assets/VK.jpg'
import TT from '../assets/TT.jpg'
const team = [
  {
    name: "Bùi Ngọc Minh Anh",
    role: "CEO",
    desc: "Multimedia student, responsible for brand messaging, public relations, and strategic storytelling.",
    img: MA,
  },
  {
    name: "Trần Hoài Anh",
    role: "COO - CCO",
    desc: "Multimedia student, in charge of operations, team management, and marketing direction.",
    img: HA,
  },
  {
    name: "Hiếu Ngân",
    role: "CDO",
    desc: "Design student, responsible for UI/UX and visual branding.",
    img: HN,
  },
  {
    name: "Lê Trung Thành",
    role: "CPO - DEV",
    desc: "Software student, skilled in product development and UX/UI.",
    img: TT,
  },
  {
    name: "Đỗ Hùng Cường",
    role: "CTO - DEV",
    desc: "Software student, skilled in product development and UX/UI.",
    img: DHC,
  },
  {
    name: "Khoa Nguyễn",
    role: "CIO - DEV",
    desc: "Software student, skilled in product development and UX/UI.",
    img: VK,
  },
];

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">TRYFIT’S TEAM</h2>
      <div className="team-container">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
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
