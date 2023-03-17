import React from "react";
import { Link } from "react-router-dom";
import './pageSliderBtn.css'

export function PageSliderBtn({text, theme, route}) {
    return (
        <Link to={`https://caio-geraldo.vercel.app/${route}`} className="see-more-btn"> 
            <p className="p see-more">{text}</p>
            <img src={`media/icons/right-arrow-${theme}.png`} />
        </Link>
    )
}