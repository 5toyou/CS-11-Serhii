import classes from "./header.module.css"
import mustHave from "../must_have.module.css"
import { useNavigate } from "react-router-dom"

function Header() {

    const navigate = useNavigate();

    return (
        <header className={classes.container}>
            <div onClick={() => navigate('/')} className={classes.title}>coolors</div>
            <div className={classes.menu}>
                <div>tools</div>
                <div>go pro</div>
                <a onClick={() => navigate('/login')} className = {mustHave.btn_trans}>Sign in</a>
                <a onClick={() => navigate('/registration')} className = {`${mustHave.btn_blue} ${mustHave.s}`}>Sign up</a>
            </div>
        </header>
    )
}

export default Header