import React from "react"

import Navbar from "../component/Navbar/Navbar"
import Hero from "../component/Hero/Hero"
import About from "../component/About/About"
import Portfolio from "./Portfolio"
import Education from "../component/Education/Education"
import Contact from "../component/Contact/Contact"

const Landingpage = () => {

    return(
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Education/>
            <Portfolio/>
            <Contact/>
        </>
    )
}

export default Landingpage