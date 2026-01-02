import classes from "./top.module.css"
import HoverColorLetter from "../../hoverColorLetters/hoverColorLetter.jsx"
import HoverColorLetters from "../../hoverColorLetters/hoverColorLetters.jsx"

function Top() {

    const myColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

    return (
        <div className = {classes.box}>
            <div><HoverColorLetters text="The super fast color palettes generator!" defaultColor="black" colors={myColors} /></div>
            <div>Create the perfect palette or get inspired by thousands of beautiful color schemes.</div>
        </div>
    )
}

export default Top