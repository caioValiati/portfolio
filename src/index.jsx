import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Header } from "./components/header/header";
import { SocialArea } from "./components/socialArea/SocialArea";
import { langTexts } from "./lang";


export function App() {

    const [language, setLanguage] = useState(localStorage.getItem("lang"))
    const [theme, setTheme] = useState(localStorage.getItem("theme"))
    const [pageTitle, setPageTitle] = useState("")

    useEffect(() => {
        document.title = pageTitle + langTexts.title
      }, [pageTitle])

    useEffect(() => {
        if (theme == 'light') {
            document.documentElement.style.setProperty('--font-color', '#242424');
            document.documentElement.style.setProperty('--background-color', '#ECF2FF');
            document.documentElement.style.setProperty('--menu-bg-color', '#F9F9F9');
            document.documentElement.style.setProperty('--menu-hover-bg-color', '#B9B9B9');
            document.documentElement.style.setProperty('--mark-color', '#B9B9B9');
        }else {
            document.documentElement.style.setProperty('--font-color', '#ECF2FF');
            document.documentElement.style.setProperty('--background-color', '#000000');
            document.documentElement.style.setProperty('--menu-bg-color', '#282A3A');
            document.documentElement.style.setProperty('--menu-hover-bg-color', '#404258');
            document.documentElement.style.setProperty('--mark-color', '#020a13');
        }
    }, [theme])

    return (
        <div className="index-container">
            <Header props={[setLanguage, language, setTheme]}/>
            <div className="page-container">
                    <Outlet context={{language, setLanguage, theme, setTheme, setPageTitle}} />
                <SocialArea theme={theme} />
            </div>
        </div>
    )
}