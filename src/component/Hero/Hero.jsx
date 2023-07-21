import React from "react"

import FontHeavy from "../../element/FontHeavy/FontHeavy"

import FontThine from "../../element/FontThine/FontThine"

const Hero = () => {

    return(
        <>
            <section className="pt-5 bg-body-tertiary py-5 d-flex justify-content-center align-items-center " style={{background:"linear-gradient(to right, #2c3e50, #2c3e50)", height:"710px"}} id="hero"> 
                <div className="container px-1 py-5 ">
                    <div className="row flex-lg-row-reverse align-items-center text-center d-flex g-5 pb-5 pt-5 ">

                        {/* <div className="col-lg-12 col-sm-12 col-lg-7 pb-2 py-1">
                            <img src={profile} alt="" className="img-thumbnail"/>
                        </div> */}

                        <div className="col-lg-12 col-sm-12 pt-5 pb-5 ">
                            <FontHeavy $60 className="text-white ">Fatur Brian Hidayat Siregar</FontHeavy>
                            <FontThine $24 className="pt-3 text-white py-5 pb-5">Front-end Engineer | UI Designer | Student</FontThine>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero