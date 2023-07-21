import React from "react";

import Color from "../../element/Color/Color";
import FontMedium from "../../element/FontMedium/FontMedium";
import FontThine from "../../element/FontThine/FontThine";
import FontHeavy from "../../element/FontHeavy/FontHeavy";

import {AiFillHtml5, AiFillGithub} from "react-icons/ai"
import {BiLogoCss3, BiLogoJavascript, BiLogoReact} from "react-icons/bi"
import { BsFillBootstrapFill } from "react-icons/bs"
import { SiPostman} from "react-icons/si"
import profile from "../../assets/profile.jpeg";
import vite from "../../assets/vite.png"
import figma from "../../assets/figma2.png"

const About = () => {
  return (
    <>
      <section className="pt-5 pb-5 py-5" style={{ background: `${Color.white}` }} id="about">
        <div className="container px-1 py-4">
          <div className="row flex-lg-row-reverse d-flex align-items-center g-1 py-5 text-center">
            <div className="col-7 col-sm-7">
                <FontHeavy className="pb-2" style={{color : `${Color.primary}`}}>ABOUT ME</FontHeavy>
                <div className="d-flex flex-column align-items-start">
                    <FontThine $168 className="pt-5" style={{ color: `${Color.primary}` }}>
                    Hallo! I'm Fatur Brian, a 6th semester student at Bina Nusantara University. I have diverse
                    </FontThine>
                    <FontThine $168 style={{ color: `${Color.primary}` }}>
                    experience in the world of technology and design. As a 5 month graduate of the Student
                    </FontThine>
                    <FontThine $168 style={{ color: `${Color.primary}` }}>
                    Independent program at Alteera Academy, I have developed skills in the area of front-end
                    </FontThine>
                    <FontThine $168 style={{ color: `${Color.primary}` }}>
                    development. I have expertise in operating HTML, CSS, JavaScript, React, Figma, and 
                    </FontThine>
                    <FontThine $168 style={{ color: `${Color.primary}` }}>
                    API integration.
                    </FontThine>

                    <FontThine $168  className="pt-3" style={{ color: `${Color.primary}` }}>
                    In the course of my studies, I have explored various challenging courses and projects in the field
                    </FontThine>
                    <FontThine $168 style={{ color: `${Color.primary}` }}>
                    of technology. I also actively participate in the Alteera Academy program, especially in the 
                    </FontThine>
                    <FontThine $168 style={{ color: `${Color.primary}` }}>
                    Front-End Engineering course using React. I enjoy creating attractive and responsive 
                    </FontThine>
                    <FontThine $168 style={{ color: `${Color.primary}` }}>
                    displays leveraging HTML, CSS and JavaScript skills.
                    </FontThine>
              </div>
            </div>

                <div className="col-4 col-sm-4">
                    <div className="img-fluid" style={{ backgroundImage: `url(${profile})`, width: "300px", height: "300px", borderRadius: "50%", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                </div>
          </div>

          <div className=" pt-5 text-center">
                    <FontHeavy style={{ color: `${Color.primary}` }}>
                        EXPERIENCE
                    </FontHeavy>
          </div>

          <div className="row pt-5 align-items-center text-center d-flex justify-content-center">
                <div className="col-3">
                    <AiFillHtml5 size={90} color="#fc6903"/>
                    <FontThine $20>HTML</FontThine>
                </div>

                <div className="col-3">
                    <BiLogoCss3 size={100} color="#2489db"/>
                    <FontThine $20>CSS</FontThine>
                </div>

                <div className="col-3">
                    <BiLogoJavascript size={100} color="#cbdf20" />
                    <FontThine $20>JavaScript</FontThine>
                </div>

                <div className="col-3">
                    <BiLogoReact size={100} color="#236edc" />
                    <FontThine $20>ReactJS</FontThine>
                </div>
          </div>

          <div className="row pt-5 align-items-center text-center d-flex justify-content-center">
                <div className="col-3">
                    <img src={vite} alt="vite" width={100}/>
                    <FontThine $20>VITE</FontThine>
                </div>

                <div className="col-3">
                    <img src={figma} alt="figma" width={60} />
                    <FontThine $20>FIGMA</FontThine>
                </div>

                <div className="col-3">
                    <SiPostman size={100} color="#faa105" />
                    <FontThine $20>Postman</FontThine>
                </div>

                <div className="col-3">
                    <BsFillBootstrapFill size={100} color="#b400ff" />
                    <FontThine $20>Bootstrap</FontThine>
                </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
