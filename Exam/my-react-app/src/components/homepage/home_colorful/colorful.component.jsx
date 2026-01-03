import classes from "./colorful.module.css"
import HoverColorLetters from "../../hoverColorLetters/hoverColorLetters.jsx"


function Colorful() {

    const myColors = 
    ['#ff0000', '#ff8400ff', '#ff9d00ff', '#f6ff00ff', '#b7ff00ff',
    '#73ff00ff', '#00ff00ff', '#00ff7bff', '#00d0ffff', '#0055ffff',
    '#2600ffff', '#6200ffff', '#8400ffff', '#ff009dff'];

    return (
        <div>
            <div ><HoverColorLetters text="Make&nbsp;something&nbsp;coolorful!" defaultColor="lightgrey" colors={myColors} className = {classes['style']}  /></div>
        </div>
    )

}

export default Colorful