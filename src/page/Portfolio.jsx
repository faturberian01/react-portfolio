import React from "react"

import Color from "../element/Color/Color"
import FontHeavy from "../element/FontHeavy/FontHeavy"
import FontThine from "../element/FontThine/FontThine"
import FontMedium from "../element/FontMedium/FontMedium"

import skuypay from "../assets/skuypay.png"
import turgym from "../assets/turgym.png"
import fshop from "../assets/fshop.png"
import peduli from "../assets/peduli.png"
import music from "../assets/music.png"
import {BsFillArrowRightCircleFill} from "react-icons/bs"

const Portfolio = () => {
    return(
        <>
            <section className="pt-5 pb-5 py-5" style={{background:`${Color.primary}`}} id="portfolio">
                <div className="container">
                    <div className="text-center pb-4">
                        <FontHeavy className="text-white">PORTFOLIO</FontHeavy>
                    </div>

                    <div className="row text-center align-items-center d-flex pt-5">
                        <div className="col-6 flex-column align-items-start d-flex">
                            <FontMedium $36 style={{color:`${Color.analo}`}}>Project 1</FontMedium>
                            <FontHeavy $32 className="pt-3" style={{color:`${Color.white}`}}>SkuyPay Website</FontHeavy>
                            <FontMedium $1618 className="pt-2 text-white">Tools : ReactJS, Bootstrap, netlify, Vite, Axios, Chart.js,</FontMedium>
                            <FontMedium $1618 className="text-white">HTML, CSS, JavaScript, Sweetalert, ReactToastify</FontMedium>
                            <FontThine $1424 className="pt-3" style={{color:`${Color.white}`}}>Berikut merupakan capstone project/project akhir dari Alteera</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>academy. Skuypay merupakan aplikasi untuk melakukan pem</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>bayaran tagihan yang efisien dan praktis bagi pengguna. Mel</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>alui fitur-fitur yang canggih dan mudah digunakan oleh </FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>user dengan beberapa klik di ponsel atau komputer mereka.</FontThine>

                            <a href="https://skuypay.netlify.app/" target="_blank" style={{textDecoration:"none"}}>
                                <FontThine $1625 className="pt-3 text-white "><BsFillArrowRightCircleFill className="me-3" size={20}/> Landing Page deployment</FontThine>
                            </a>
                            <a href="https://skuypay.netlify.app/login-admin" target="_blank" style={{textDecoration:"none"}}>
                                <FontThine $1625 className="pt-3 text-white "><BsFillArrowRightCircleFill className="me-3" size={20}/> Admin deployment</FontThine>
                            </a>
                            <a href=" https://drive.google.com/drive/folders/161iBSJSwLukbS505e3kdzx0bjqBxROM6" target="_blank" style={{textDecoration:"none"}}>
                                <FontThine $1625 className="pt-3 text-white "><BsFillArrowRightCircleFill className="me-3" size={20}/> Web Documentation</FontThine>
                            </a>

                        </div>

                        <div className="col-5">
                            <img src={skuypay} className="img-thumbnail" alt="skuypay" width={280}/>
                        </div>
                    </div>

                    <div className="row text-center align-items-center d-flex pt-5 ">
                     <div className="col-6">
                            <img src={turgym} className="img-thumbnail" alt="turgym" width={280}/>
                        </div>
                        <div className="col-5  flex-column align-items-start d-flex">
                            <FontMedium $36 style={{color:`${Color.analo}`}}>Project 2</FontMedium>
                            <FontHeavy $32 className="pt-3" style={{color:`${Color.white}`}}>TurGym Website</FontHeavy>
                            <FontMedium $1618 className="pt-2 text-white">Tools : ReactJS, Bootstrap, Vercel, Vite, Axios, GraphQL,</FontMedium>
                            <FontMedium $1618 className="text-white">React-icon, Hashura, Firebase, and React-router</FontMedium>
                            <FontThine $1424 className="pt-3" style={{color:`${Color.white}`}}>Berikut merupakan miniproject yang saya kerjakan dari Alteera</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>academy. TurGym merupakan website toko online yang hanya</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>menjual dan membeli peralatan gym. Dalam pembuatan web</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>site ini saya membuat dalam sisi client. Yang hanya dapat mel</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>akukan proses pembelian peralatan gym.</FontThine>

                            <a href="https://miniproject-eta.vercel.app/" target="_blank" style={{textDecoration:"none"}}>
                                <FontThine $1625 className="pt-3 text-white "><BsFillArrowRightCircleFill className="me-3" size={20}/> Website Deployment</FontThine>
                            </a>
                        </div>

                    </div>

                    <div className="row text-center align-items-center d-flex pt-5">
                        <div className="col-6 flex-column align-items-start d-flex">
                            <FontMedium $36 style={{color:`${Color.analo}`}}>Project 3</FontMedium>
                            <FontHeavy $32 className="pt-3" style={{color:`${Color.white}`}}>Fshop Website</FontHeavy>
                            <FontMedium $1618 className="pt-2 text-white">Tools : HTML, CSS, JavaScript, dan Bootstrap</FontMedium>
                            <FontThine $1424 className="pt-3" style={{color:`${Color.white}`}}>Berikut projek yang saya kerjakan dengan inisiatif saya sendiri.</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>Fshop memrupakan website toko online yang menjual dan </FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>beli berbagai outfit/pakaian yang mengikuti jaman fashionnya.</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>Dalam website ini hanya tampilan website yang dibuat</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}></FontThine>
                        </div>

                        <div className="col-5">
                            <img src={fshop} alt="fshop" className="img-thumbnail" width={280}/>
                        </div>
                    </div>

                    <div className="row text-center align-items-center d-flex pt-5 ">
                     <div className="col-6">
                            <img src={peduli} className="img-thumbnail" alt="turgym" width={300}/>
                        </div>
                        <div className="col-5  flex-column align-items-start d-flex">
                            <FontMedium $36 style={{color:`${Color.analo}`}}>Project 4</FontMedium>
                            <FontHeavy $32 className="pt-3" style={{color:`${Color.white}`}}>Peduli Sesama App Design</FontHeavy>
                            <FontMedium $1618 className="pt-2 text-white">Tools : Figma</FontMedium>
                            <FontThine $1424 className="pt-3" style={{color:`${Color.white}`}}>Berikut ini merupakan project mata kuliah Entrepreneurship. Peduli Sesama </FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>merupakan sebuah aplikasi yang ada pada bidang kesehatan, dimana</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>aplikasi ini akan mempermudah masyarakat umum untuk mendapatkan</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>berbagai kemudahan dalam menggunakan fasilitas-fasilitas kesehatan</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>yang ada disekitar mereka.</FontThine>
                            
                            <a href="https://www.figma.com/file/1PN3qyOLuznKtp88sm1heC/Rumah-Sakit?type=design&node-id=0%3A1&mode=design&t=y4sjBWGmc5NNY6JE-1" target="_blank" style={{textDecoration:"none"}}>
                                <FontThine $1625 className="pt-3 text-white "><BsFillArrowRightCircleFill className="me-3" size={20}/> Design Application</FontThine>
                            </a>
                        </div>

                    </div>

                    <div className="row text-center align-items-center d-flex pt-5">
                        <div className="col-6 flex-column align-items-start d-flex">
                            <FontMedium $36 style={{color:`${Color.analo}`}}>Project 5</FontMedium>
                            <FontHeavy $32 className="pt-3" style={{color:`${Color.white}`}}>Fatur Music App Design</FontHeavy>
                            <FontMedium $1618 className="pt-2 text-white">Tools : Figma</FontMedium>
                            <FontThine $1424 className="pt-3" style={{color:`${Color.white}`}}>Berikut tampilan design yang saya buat pada saat UAS.</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>Fatur Music merupakan aplikasi music, dimana user dapat </FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>mendengarkan music dimanapun dengan menggunakan</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>Hp. Dan user dapat memiliki member untuk user tidak terdapat</FontThine>
                            <FontThine $1424 style={{color:`${Color.white}`}}>iklan ketika mendengarkan music.</FontThine>

                            <a href="https://www.figma.com/file/W5d8S6MCvRF0NOuRy3lKp6/UAS-Interactve?type=design&node-id=26%3A657&mode=design&t=oZz4dNPsdaB4CiRC-1" target="_blank" style={{textDecoration:"none"}}>
                                <FontThine $1625 className="pt-3 text-white "><BsFillArrowRightCircleFill className="me-3" size={20}/> Design Application</FontThine>
                            </a>
                        </div>

                        <div className="col-5">
                            <img src={music} alt="music" className="img-thumbnail" width={280}/>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Portfolio