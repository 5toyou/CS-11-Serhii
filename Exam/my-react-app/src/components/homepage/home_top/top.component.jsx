import classes from "./top.module.css"
import HoverColorLetter from "../../hoverColorLetters/hoverColorLetter.jsx"
import HoverColorLetters from "../../hoverColorLetters/hoverColorLetters.jsx"

function Top() {

    const myColors = 
    ['#ff0000', '#ff8400ff', '#ff9d00ff', '#f6ff00ff', '#b7ff00ff',
    '#73ff00ff', '#00ff00ff', '#00ff7bff', '#00d0ffff', '#0055ffff',
    '#2600ffff', '#6200ffff', '#8400ffff', '#ff009dff'];

    return (
        <div className = {classes.box}>
            <div><HoverColorLetters text="The super fast color palettes generator!" defaultColor="black" colors={myColors} /></div>
            <div>Create the perfect palette or get inspired by thousands of beautiful color schemes.</div>
        </div>
    )
}

export default Top