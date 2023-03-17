import React, { useState } from "react";
import { Link } from "react-router-dom";
import './header.css'
import { langTexts, changeLanguage } from "../../lang";
import { motion, AnimatePresence } from "framer-motion";

export function Header({props}) {
    const [dropdownMenuActive, setDropdownMenuActive] = useState(false)
    const [hamburguerActive, setHamburguerActive] = useState(false)
    const [logoThemeColor, setLogoThemeColor] = useState(handleThemeChange())
    var lang = props[1]

    function handleThemeChange() {

        if (localStorage.getItem('theme') == 'light') {
            return 'dark'
        }else {
            return 'light'
        }
    }
    return (
        <div className={`header-container`}>
            <button 
                className={`hamburguer-btn`}
                onClick={() => { setHamburguerActive(!hamburguerActive) }}
            >
                <img src={`media/icons/hamburger-${logoThemeColor}.png`} />
            </button>
            <Link to={'/'} >
                    <img src={`media/logo/signature-short-${logoThemeColor}.png`} className="logo" />            
            </Link>
            <div className={`menu-container ${hamburguerActive}`}>
                <ul className="menu">
                    <li className="option">
                        <Link to={'about'}>{langTexts[`${lang}`].menu[0]}</Link>
                    </li>
                    <li className="option">
                        <Link to={'projects'}>{langTexts[`${lang}`].menu[1]}</Link>
                    </li>
                    <li className="option">
                        <Link to={'contact'}>{langTexts[`${lang}`].menu[2]}</Link>
                    </li>
                </ul>
            <div className="dropdown-menu-container">
                <button className="dropdown-theme" onClick={() => { 
                    localStorage.setItem('theme', handleThemeChange())
                    setLogoThemeColor(handleThemeChange())
                    props[2](localStorage.getItem("theme")) 

                }} >  
                    <i className="fa-solid fa-circle-half-stroke"></i>
                </button>
                <div className="dropdown-menu-btn">
                    <button
                        className="dropdown-menu"
                        onClick={() => { setDropdownMenuActive(!dropdownMenuActive) }}
                    ><img src={`media/icons/language-${logoThemeColor}.png`} /></button>
                </div>
                <div className={`dropdown-menu-${dropdownMenuActive}`}>
                    <ul className="dropdown-select">
                        <li>
                            <button className="dropdown-lang" onClick={() => { 
                                changeLanguage("br")
                                props[0](localStorage.getItem("lang"))
                                setDropdownMenuActive(!dropdownMenuActive)
                                }} >
                                    <img className="flag" src="media/flags/br-flag.png" />
                                    <p>{langTexts[`${lang}`].dropdownMenu[1]}</p>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-lang" onClick={() => { 
                                changeLanguage("eua")
                                props[0](localStorage.getItem("lang")) 
                                setDropdownMenuActive(!dropdownMenuActive)
                                }} >  
                                    <img className="flag" src="media/flags/usa-flag.png" />
                                    <p>{langTexts[`${lang}`].dropdownMenu[2]}</p>
                            </button>   
                            
                        </li>
                    </ul>
                </div>
              </div>
            </div>

        </div>
    )
}