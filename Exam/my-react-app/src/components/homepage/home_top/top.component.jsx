import classes from "./top.module.css"
import mustHave from "../../must_have.module.css"
import HoverColorLetter from "../../hoverColorLetters/hoverColorLetter.jsx"
import HoverColorLetters from "../../hoverColorLetters/hoverColorLetters.jsx"
import andMuchMore from "../../../assets/and_much_more.svg"
import { useNavigate } from "react-router-dom"

function Top() {

    const navigate = useNavigate();

    const myColors = 
    ['#ff0000', '#ff8400ff', '#ff9d00ff', '#f6ff00ff', '#b7ff00ff',
    '#73ff00ff', '#00ff00ff', '#00ff7bff', '#00d0ffff', '#0055ffff',
    '#2600ffff', '#6200ffff', '#8400ffff', '#ff009dff'];

    return (
        <div className = {classes.box}>
            <div className = {classes.left}>
                <div className = {classes.container}><HoverColorLetters text="The super fast color palettes generator!" defaultColor="black" colors={myColors} /></div>
                <img className = {classes.img} src={andMuchMore} alt="And much more" />
                <div className = {mustHave.sub_text}>Create the perfect palette or get inspired by <br/>thousands of beautiful color schemes.</div>
                <div className = {classes.bta}>
                    <a onClick={() => navigate('/generator')} className = {mustHave.btn_blue}>Start the Generator</a>
                    <a className = {mustHave.btn_grey}>Explore 10M+ Palettes</a>
                </div>
            </div>
            <div className = {classes.right}>
                <div>animmmm</div>
            </div>
        </div>
    )
}

export default Top