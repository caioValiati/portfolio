import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { langTexts } from "../../lang";
import { PageSliderBtn } from '../../components/pageSliderBtn/PageSliderBtn'
import { motion } from "framer-motion"
import "./homePage.css"

export function HomePage() {
    const {language, setLanguage} = useOutletContext()
    const {theme, setTheme} = useOutletContext()
    const {setPageTitle} = useOutletContext()

    useEffect(() => {
        setPageTitle("Home")
    }, [])

    return (
        <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            transition={{
                duration: 1,
                delay: 0.2
            }}
            className="home-container">
            <div className="hello-container">
                <motion.h1  
                    className="h1" 
                >{ langTexts[`${language}`].home.header }</motion.h1>
                <h1 className="h1" id="hand" >👋</h1>
            </div>
            <motion.div
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                transition={{
                    duration: 1,
                    delay: 0.7
                }} >
                <p className="p">{ langTexts[`${language}`].home.descriptions[0] }</p>
                <p className="p">
                    { langTexts[`${language}`].home.descriptions[1] }
                    { langTexts[`${language}`].home.descriptionsMarkers.map(
                        (marker) => { return ( <React.Fragment key={marker.text} ><Link  className="marker" to={`http://127.0.0.1:5173/${marker.route}`}>{marker.text}</Link>{", "}</React.Fragment> ) }
                    ) }
                    { langTexts[`${language}`].home.emailConvite } { <b className="marker">caio.b.valiati@gmail.com</b> }
                    <PageSliderBtn text={langTexts[`${language}`].home.pageSliderBtn} theme={theme} route='about' />
                </p>
            </motion.div>
        </motion.div>
    );
  }
  