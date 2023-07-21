import React from "react";

import Color from "../../element/Color/Color";
import FontHeavy from "../../element/FontHeavy/FontHeavy";
import FontThine from "../../element/FontThine/FontThine";

import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"

const Contact = () => {

    return(
        <>
            <section className="pt-5 pb-5 py-5" style={{background: `${Color.primary50}`}} id="contact">
                <div className="container px-1 py-4">
                    <div className="text-center pb-3">
                        <FontHeavy style={{color:`${Color.primary900}`}}>CONTACT ME</FontHeavy>
                    </div>

                    <div className="pt-5 pb-5 row g-0">
                        <div className="col  d-flex justify-content-center" >
                            <a href="https://www.linkedin.com/in/fatur-brian-hidayat-siregar-4688aa1b7/" target="_blank" className="me-5" style={{borderRadius:"50%", justifyContent:"center", background:`${Color.primary300}`, textDecoration:"none", height:"75px", width:"75px", alignItems:"center", border:"none", display:"flex", transition: "transform 0.3s"}} 
                                onMouseEnter={(e) => {
                                    e.target.style.transform = "scale(1.3)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.transform = "scale(1)";
                                  }}>
                                <BsLinkedin size={40} color="#1A2A39"/>
                            </a>

                            <a href="https://www.instagram.com/faturberian/" target="_blank" className="me-5" style={{borderRadius:"50%", justifyContent:"center", background:`${Color.primary300}`, textDecoration:"none", height:"75px", width:"75px", alignItems:"center", border:"none", display:"flex", transition: "transform 0.3s"}} 
                                onMouseEnter={(e) => {
                                    e.target.style.transform = "scale(1.3)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.transform = "scale(1)";
                                  }}>
                                <BsInstagram size={50} color="#1A2A39"/>
                            </a>

                            <a href="https://github.com/faturberian01?tab=repositories" target="_blank" className="me-5" style={{borderRadius:"50%", justifyContent:"center", background:`${Color.primary300}`, textDecoration:"none", height:"75px", width:"75px", alignItems:"center", border:"none", display:"flex", transition: "transform 0.3s"}} 
                                onMouseEnter={(e) => {
                                    e.target.style.transform = "scale(1.3)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.transform = "scale(1)";
                                  }}>
                                <BsGithub size={50} color="#1A2A39"/>
                            </a>

                            <a href="mailto:fatur.siregar@binus.ac.id" target="_blank" className="me-1" 
                                style={{borderRadius:"50%", justifyContent:"center", background:`${Color.primary300}`, textDecoration:"none", height:"75px", width:"75px", alignItems:"center", border:"none", display:"flex", transition: "transform 0.3s"}} 
                                onMouseEnter={(e) => {
                                    e.target.style.transform = "scale(1.3)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.transform = "scale(1)";
                                  }}>
                                <HiOutlineMail size={50} color="#1A2A39"/>
                            </a>

                        </div>

                        {/* <div className="col px-0" style={{margin: "0"}}>
                            <a href="" target="_blank">
                                <BsInstagram size={40}/>
                            </a>

                        </div>

                        <div className="col px-0" style={{margin: "0"}}>
                            <a href="" target="_blank">
                                <BsGithub size={40}/>
                            </a>

                        </div>

                        <div className="col px-0" style={{margin: "0"}}>
                            <a href="" target="_blank">
                                <HiOutlineMail size={50}/>
                            </a>

                        </div> */}
                    </div>

                    <div className="pt-5 text-center" >
                            <FontThine $1424>© FATUR BRIAN HIDAYAT SIREGAR</FontThine>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Contact

