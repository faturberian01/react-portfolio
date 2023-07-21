import React from "react";

// import { Link } from "react-router-dom"
import { Link } from 'react-scroll';

import FontMedium from "../../element/FontMedium/FontMedium";

import logo2 from "../../assets/logo2.png"



const Navbar = () => {
    
    return(
        <>
             <nav className="navbar navbar-expand-md  fixed-top container-fluid " style={{background: "linear-gradient(to right, #bdc3c7, #2c3e50)" ,borderRadius:"0px 0px 24px 24px", boxShadow:"0px 5px 5px rgba(0, 0, 0, 0.1)"}}>
                <div className="container ">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse " 
                        id="navbarTogglerDemo01">
                    <div 
                        className="d-flex align-items-center  w-100">
                            <ul className="navbar-nav flex-grow-1" >
                                <a className="navbar-brand d-flex align-items-center " href="#" >
                                    <img src={logo2} alt="Logo" />
                                            {/* <FontBold $20light className='mb-1 ms-3'>SkuyPay</FontBold> */}
                                            {/* <FontHeavy $20 className="text-dark">Fatur Brian</FontHeavy> */}
                                </a>
                            </ul>

                            <div className="navbar-nav me-3">
                                    <li className="nav-item me-3">
                                        <Link to="about" style={{textDecoration:"none"}}>
                                            <a href="about" className="nav-link ">
                                                <FontMedium className="text-white" $1635>
                                                    About Me
                                                </FontMedium>
                                            </a>
                                        </Link>    
                                    </li>
                                    <li className="nav-item ms-3">
                                        <Link to="education" style={{textDecoration:"none"}}>
                                            <a href="education" className="nav-link">
                                                <FontMedium className="text-white" $1635>
                                                    Education
                                                </FontMedium>
                                            </a>
                                        </Link> 
                                    </li>
                                    <li className="nav-item ms-3" >
                                        <Link to="portfolio" style={{textDecoration:"none"}}>
                                            <a href="portfolio" className="nav-link">
                                                <FontMedium className="text-white" $1635>
                                                    Portfolio
                                                </FontMedium>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item ms-3" >
                                        <Link to="contact" style={{textDecoration:"none"}}>
                                            <a href="contact" className="nav-link">
                                                <FontMedium className="text-white" $1635>
                                                    Contact Me
                                                </FontMedium>
                                            </a>
                                        </Link>
                                    </li>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar