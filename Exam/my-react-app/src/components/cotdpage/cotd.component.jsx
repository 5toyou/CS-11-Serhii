import classes from "./cotd.module.css"
import mustHave from "../must_have.module.css"
import chroma from "chroma-js"
import { useParams } from "react-router-dom"

import heart_logo from "../../assets/icons8-heart-24.png"
import resize_logo from "../../assets/icons8-resize-48.png"
import colorDropper_logo from "../../assets/icons8-color-dropper-50.png"

function Cotd() {

    const { colorHex } = useParams();
    const full_color = `#${colorHex}`;
    const full_color_num = `${colorHex}`;

    let color;
    try {
        color = chroma(full_color);
    } catch (e) {
        color = chroma("000000");
    }

    return (
        <div className = {classes.container}>
            <div className = {classes.top_txt}>
                <div className = {classes.color_name}>
                    <a >Colors</a>
                    <div>&gt;</div>
                    <div>Tuffcolor</div>
                </div>
                <div>Tuffcolor</div>
                <div>intense mixes of different shades gives it coolness and that is kinda crazy, I am totaly not saying complete nonsense.</div>
            </div>

            <div className = {classes.color_display} style={{ backgroundColor: full_color }}>
                <div>
                    <img className = {mustHave.btn_trans_round} src={colorDropper_logo} />
                    <img className = {mustHave.btn_trans_round} src={resize_logo} />
                    <img className = {mustHave.btn_trans_round} src={heart_logo} /> 
                </div>
                <div>{full_color_num.toUpperCase()}</div>
            </div>

            <div className = {classes.bottom_txt}>
                <div>Conversion</div>

                <div>
                    <div className = {classes.numbers_column}>
                        <div className = {classes.numbers_style_1}>
                            <div>HEX</div>
                            <div>{colorHex.toUpperCase()}</div>
                        </div>
                        <div className = {classes.numbers_style_2}>
                            <div>RGB</div>
                            <div>{color.rgb().join(', ')}</div>
                        </div>
                        <div className = {classes.numbers_style_1}>
                            <div>CMYK</div>
                            <div>{color.cmyk().map(v => Math.round(v * 100)).join(', ')}</div>
                        </div>
                        <div className = {classes.numbers_style_2}>
                            <div>HSB</div>
                            <div>-676767</div>
                        </div>
                        <div className = {classes.numbers_style_1}>
                            <div>HSL</div>
                            <div>{color.hsl().map((v, i) => i === 0 ? Math.round(v) || 0 : Math.round(v * 100)).join(', ')}</div>
                        </div>
                    </div>

                    <div className = {classes.numbers_column}>
                        <div className = {classes.numbers_style_1}>
                            <div>LAB</div>
                            <div>-696969</div>
                        </div>
                        <div className = {classes.numbers_style_2}>
                            <div>XYZ</div>
                            <div>-525252</div>
                        </div>
                        <div className = {classes.numbers_style_1}>
                            <div>LCH</div>
                            <div>-525252</div>
                        </div>
                        <div className = {classes.numbers_style_2}>
                            <div>LUV</div>
                            <div>-676767</div>
                        </div>
                        <div className = {classes.numbers_style_1}>
                            <div>HWB</div>
                            <div>-676767</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}


export default Cotd