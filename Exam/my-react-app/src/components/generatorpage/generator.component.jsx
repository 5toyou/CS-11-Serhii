import { useState, useEffect, useCallback } from "react";
import { getRandomPalette } from "../../shared/colorPaletteGenerator.js" 
import classes from "./generator.module.css"
import mustHave from "../must_have.module.css"

import heart_logo from "../../assets/icons8-heart-24.png"

function Generator() {

    const [num, setNum] = useState(5);
    
    const [colors, setColors] = useState(() => getRandomPalette());

    const generateNewPalette = useCallback(() => {
        setColors(getRandomPalette(num));
    }, [num]);

    useEffect(() => {
        generateNewPalette();
    }, [num, generateNewPalette]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Space") {
                event.preventDefault();
                generateNewPalette();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [generateNewPalette]);

    const addColumn = () => {
        setNum(prev => {
            if (prev >= 8) {
                return prev;
            }
            return prev + 1;
        });
    };

    return (
        <div className = {classes.container}>
            <div className = {classes.header}>
                <div>Press the spacebar to generate color palettes!</div>
                <div className = {mustHave.btn_trans}><img src={heart_logo} alt="" />&nbsp;Save</div>
            </div>
            <div className = {classes.palette}>
               {colors.map((hex, index) => (
                    <div key={index} className={classes.colorColumn} style={{ backgroundColor: hex }}>
                        <div></div>
                        <div className={classes.hexText}>
                            <div>{hex.replace("#", "").toUpperCase()}</div>
                            <div>Color Name</div>
                        </div>
                        <div onClick={addColumn}>+</div>
                    </div>
                ))}
            </div>

        </div>
    )

}


export default Generator