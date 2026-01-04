import React, { useState } from 'react';
import classes from "./subtext_cotd.module.css"
import { useNavigate } from "react-router-dom"

function Subtext_cotd() {

    const navigate = useNavigate();

    const generateRandomColor = () => {
        const hex = Math.floor(Math.random() * 16777215).toString(16);
        return `#${hex.padStart(6, '0')}`;
    };
    
    const [randomColor] = useState(generateRandomColor());

    const handleNavigation = () => {
        const hexValue = randomColor.substring(1); 
        navigate(`/colors/${hexValue}`);
    };

    return (
        <div className = {classes.flex}>
            <div className = {classes.style}>
                <div>
                    Coolors is the lightning-fast, ultra-intuitive color palette generator for designers,
                    creators, and anyone seeking visual harmony. Instantly generate beautiful palettes by hitting the spacebar,
                    or explore millions of popular ones. Extract colors from images, check accessibility, and preview them on real designs.
                    Organize your palettes into projects and export them in multiple formats—effortlessly across web, apps, and plugins. Now with AI!
                </div>

                <a onClick={handleNavigation} className = {classes.cotd_box}>
                    <div>color of the day</div>
                    <div>
                        <div className = {classes.color_box}>
                            <div style={{ backgroundColor: randomColor }}></div>
                            <div>{randomColor.toUpperCase()}</div>
                        </div>
                        <div className = {classes.about}>
                            <div>Sweet Salmon</div>
                            <div>Sweet, gentle salmon wraps with a soft glow, bringing comfort, approachability, and friendly warmth.</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )

}

export default Subtext_cotd