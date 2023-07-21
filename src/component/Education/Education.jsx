import React from "react";

import Color from "../../element/Color/Color";
import FontHeavy from "../../element/FontHeavy/FontHeavy";
import FontThine from "../../element/FontThine/FontThine";
import FontMedium from "../../element/FontMedium/FontMedium";


const Education = () => {

    return(
        <>
            <section className="pt-5 pb-5" style={{background:`${Color.primary300}`}} id="education">
                <div className="container">
                    <div className="text-center pb-5">
                        <FontHeavy className="text-white">EDUCATION</FontHeavy>
                    </div>

                    <div className="d-flex justify-content-center row text-center pt-4 pb-2">
                    <div className="col-3">
                            <FontHeavy $24 style={{color:`${Color.primary900}`}}>
                                <span  style={{borderRight : `2px solid ${Color.primary900}`,height: "80px", display: "inline-flex", alignItems: "center", paddingRight:"60px"}}> SMAN 8 BATAM</span>
                            </FontHeavy>
                            
                        </div>

                        <div className="col-4">
                            <div className="line">
                                <FontHeavy $1618 className="pt-2">HIGHSCHOOL</FontHeavy>
                            </div>
                        </div>

                        <div className="col-5 flex-column d-flex align-items-start">
                            <FontMedium $20>2017 - 2020</FontMedium>
                        </div>
                        
                    </div>

                    <div className="d-flex justify-content-center row text-center pt-5 pb-2">
                        <div className="col-3">
                            <FontHeavy $24 style={{color:`${Color.primary900}`}}>
                                <span  style={{borderRight : `2px solid ${Color.primary900}`,height: "80px", display: "inline-flex", alignItems: "center", paddingRight:"30px"}}> BINUS UNIVERSITY</span>
                            </FontHeavy>
                            
                        </div>

                        <div className="col-4">
                            <div className="line">
                                <FontHeavy $1618 className="pt-2">COLLEGE</FontHeavy>
                            </div>
                        </div>

                        <div className="col-5 flex-column d-flex align-items-start">
                            <FontMedium $20>2020 - Present</FontMedium>
                            
                        </div>
                        
                    </div>
                    
                    <div className="d-flex justify-content-center row text-center pt-5 pb-2">
                    <div className="col-3">
                            <FontHeavy $24 style={{color:`${Color.primary900}`}}>
                                <span  style={{borderRight : `2px solid ${Color.primary900}`,height: "80px", display: "inline-flex", alignItems: "center", paddingRight:"23px"}}> ALTEERA ACADEMY</span>
                            </FontHeavy>
                            
                        </div>

                        <div className="col-4">
                            <div className="line">
                                <FontHeavy $1618 className="pt-2">2023 Front-End Engineer with ReactJS</FontHeavy>
                                <FontMedium $1618>Studi Independen (Kampus Merdeka)</FontMedium>
                            </div>
                        </div>

                        <div className="col-5 flex-column d-flex align-items-start">
                            <FontMedium $20>Febuari 2023 - June 2023</FontMedium>
                            <FontThine $1625>Pada program ini, saya mengikuti kursus Front-End Engineering</FontThine>
                            <FontThine $1625>dengan fokus pada pengembangan menggunakan ReactJS. Saya</FontThine>
                            <FontThine $1625>mempelajari konsep dasar React, pengelolaan state, pembuatan</FontThine>
                            <FontThine $1625>state, pembuatan komponen, routing, dan integrasi API. Selama</FontThine>
                            <FontThine $1625>kursus ini, saya juga terlibat dalam berbagai proyek praktis untuk </FontThine>
                            <FontThine $1625>memperkuat pemahaman dan keterampilan saya dalam </FontThine>
                            <FontThine $1625>pengembangan Front-End dengan ReactJS.</FontThine>
                        </div>
                        
                    </div>

                </div>
            </section>
        </>
    )
}

export default Education