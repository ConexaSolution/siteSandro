import SlideShow from "../scripts/slideShow";
import Header from "./Header";
import Services from "./Services";
import InfoAbout from "./infoAbout";
import '../resoucers/styles/home.css'
import FormContact from "./FormContact";
import React,{ useEffect, useRef } from "react";
import Footer from "./Footer";

const Home = ()=>{

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    return(
        <div className="home">
            <Header ref1={ref1} ref2={ref2} ref3={ref3}/>
            <SlideShow ref1={ref1}/>
            <InfoAbout />
            <Services ref2={ref2}/>
            <FormContact ref3={ref3}/>
            <Footer/>
        </div>
    )
}

export default Home;