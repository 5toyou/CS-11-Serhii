import { useState, useEffect, useCallback } from "react";
import { getRandomPalette, getPalette } from "../../shared/colorPaletteGenerator.js" 
import classes from "./generator.module.css"
import mustHave from "../must_have.module.css"

import heart_logo from "../../assets/icons8-heart-24.png"
import black_heart_logo from "../../assets/black-heart-shape.png"


function Generator() {

    const [isSaved, setIsSaved] = useState(false);
    const [baseColor] = useState(() => getRandomPalette(1)[0]);
    const [colors, setColors] = useState(() => getPalette(baseColor, 5));

    const generateNewPalette = useCallback(() => {
        const newBase = getRandomPalette(1)[0];
        setColors(getPalette(newBase, colors.length));
    }, [colors.length]);

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

    const addColumn = (e) => {
        e.stopPropagation();
        if (colors.length < 7) {
            setColors(getPalette(colors[0], colors.length + 1));
        }
    };


    return (
        <div className = {classes.container}>
            <div className = {classes.header}>
                <div>Press the spacebar to generate color palettes!</div>
                <div className = {mustHave.btn_trans} onClick={() => setIsSaved(!isSaved)}><img src={isSaved ? black_heart_logo : heart_logo} />&nbsp;Save</div>
            </div>
            <div className = {classes.palette}>
               {colors.map((hex, index) => (
                    <div key={index} className={classes.colorColumn} style={{ backgroundColor: hex }}>
                        <div className = {classes.variousUI}>
                            <img src={heart_logo} alt="" />
                            <img src={heart_logo} alt="" />
                            <img src={heart_logo} alt="" />
                            <img src={heart_logo} alt="" />
                            <img src={heart_logo} alt="" />
                            <img src={heart_logo} alt="" />
                            <img src={heart_logo} alt="" />
                            <img src={heart_logo} alt="" />
                        </div>
                        <div className={classes.hexText}>
                            <div>{hex.replace("#", "").toUpperCase()}</div>
                            <div>Color Name</div>
                        </div>
                        <div>
                            <div className = {classes.plusAdd} onClick={addColumn}>+</div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )

}


export default Generator