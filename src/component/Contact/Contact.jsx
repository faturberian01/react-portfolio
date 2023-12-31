import React, { useState } from "react";
import Color from "../../element/Color/Color";
import FontHeavy from "../../element/FontHeavy/FontHeavy";
import FontThine from "../../element/FontThine/FontThine";

import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isMailHovered, setIsMailHovered] = useState(false);

  const handleLinkedinMouseEnter = () => {
    setIsLinkedinHovered(true);
  };

  const handleLinkedinMouseLeave = () => {
    setIsLinkedinHovered(false);
  };

  const handleInstagramMouseEnter = () => {
    setIsInstagramHovered(true);
  };

  const handleInstagramMouseLeave = () => {
    setIsInstagramHovered(false);
  };

  const handleGithubMouseEnter = () => {
    setIsGithubHovered(true);
  };

  const handleGithubMouseLeave = () => {
    setIsGithubHovered(false);
  };

  const handleMailMouseEnter = () => {
    setIsMailHovered(true);
  };

  const handleMailMouseLeave = () => {
    setIsMailHovered(false);
  };

  return (
    <>
      <section className="pt-5 pb-5 py-5" style={{ background: `${Color.primary50}` }} id="contact">
        <div className="container px-1 py-4">
          <div className="text-center pb-3">
            <FontHeavy style={{ color: `${Color.primary900}` }}>CONTACT ME</FontHeavy>
          </div>

          <div className="pt-5 pb-5 row g-0">
            <div className="col  d-flex justify-content-center">
              <a
                href="https://www.linkedin.com/in/fatur-brian-hidayat-siregar-4688aa1b7/"
                target="_blank"
                className="me-5"
                style={{
                  borderRadius: "50%",
                  justifyContent: "center",
                  background: `${Color.primary300}`,
                  textDecoration: "none",
                  height: "75px",
                  width: "75px",
                  alignItems: "center",
                  border: "none",
                  display: "flex",
                  transition: "transform 0.3s",
                  transform: isLinkedinHovered ? "scale(1.3)" : "scale(1)", // Tambahkan transformasi sesuai isLinkedinHovered
                }}
                onMouseEnter={handleLinkedinMouseEnter}
                onMouseLeave={handleLinkedinMouseLeave}
              >
                <BsLinkedin size={40} color="#1A2A39" />
              </a>

              <a
                href="https://www.instagram.com/faturberian/"
                target="_blank"
                className="me-5"
                style={{
                  borderRadius: "50%",
                  justifyContent: "center",
                  background: `${Color.primary300}`,
                  textDecoration: "none",
                  height: "75px",
                  width: "75px",
                  alignItems: "center",
                  border: "none",
                  display: "flex",
                  transition: "transform 0.3s",
                  transform: isInstagramHovered ? "scale(1.3)" : "scale(1)", // Tambahkan transformasi sesuai isInstagramHovered
                }}
                onMouseEnter={handleInstagramMouseEnter}
                onMouseLeave={handleInstagramMouseLeave}
              >
                <BsInstagram size={50} color="#1A2A39" />
              </a>

              <a
                href="https://github.com/faturberian01?tab=repositories"
                target="_blank"
                className="me-5"
                style={{
                  borderRadius: "50%",
                  justifyContent: "center",
                  background: `${Color.primary300}`,
                  textDecoration: "none",
                  height: "75px",
                  width: "75px",
                  alignItems: "center",
                  border: "none",
                  display: "flex",
                  transition: "transform 0.3s",
                  transform: isGithubHovered ? "scale(1.3)" : "scale(1)", // Tambahkan transformasi sesuai isGithubHovered
                }}
                onMouseEnter={handleGithubMouseEnter}
                onMouseLeave={handleGithubMouseLeave}
              >
                <BsGithub size={50} color="#1A2A39" />
              </a>

              <a
                href="mailto:fatur.siregar@binus.ac.id"
                target="_blank"
                className="me-1"
                style={{
                  borderRadius: "50%",
                  justifyContent: "center",
                  background: `${Color.primary300}`,
                  textDecoration: "none",
                  height: "75px",
                  width: "75px",
                  alignItems: "center",
                  border: "none",
                  display: "flex",
                  transition: "transform 0.3s",
                  transform: isMailHovered ? "scale(1.3)" : "scale(1)", // Tambahkan transformasi sesuai isMailHovered
                }}
                onMouseEnter={handleMailMouseEnter}
                onMouseLeave={handleMailMouseLeave}
              >
                <HiOutlineMail size={50} color="#1A2A39" />
              </a>
            </div>
          </div>

          
        </div>
      </section>
      <div className="pt-4 pb-4 text-center" style={{ borderTop: "1px solid #ccc", background: `${Color.primary50}`  }}>
            <FontThine $1424>© FATUR BRIAN HIDAYAT SIREGAR</FontThine>
          </div>
    </>
  );
};

export default Contact;
