import React from "react";
import './socialArea.css'

export function SocialArea({theme}) {
    return (
        <div className="social-container">
            <a href="https://github.com/caioValiati">
                <img src={`media/icons/github-${theme}.png`} />
            </a>
            <a href="https://www.linkedin.com/in/caio-geraldo-botelho-valiati-7596a7224/">
                <img src={`media/icons/linkedin-${theme}.png`} />
            </a>
            <a href="https://www.instagram.com/caiovaliati/">
                <img src={`media/icons/instagram-${theme}.png`} />
            </a>
        </div>
    )
}