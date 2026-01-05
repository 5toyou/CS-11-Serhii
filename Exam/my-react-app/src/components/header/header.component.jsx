import classes from "./header.module.css"
import mustHave from "../must_have.module.css"
import { useNavigate } from "react-router-dom"

import expand_arrow from "../../assets/icons8-expand-arrow-50.png"

function Header() {

    const navigate = useNavigate();

    return (
        <header className={classes.container}>
            <div onClick={() => navigate('/')} className={classes.title}>coolors</div>
            <div className={classes.menu}>
                <a className = {mustHave.btn_trans}>Tools&nbsp;<img src={expand_arrow} /></a>
                <a className = {mustHave.btn_pink}>Go Pro</a>
                <div></div>
                <a onClick={() => navigate('/login')} className = {mustHave.btn_trans}>Sign in</a>
                <a onClick={() => navigate('/registration')} className = {`${mustHave.btn_blue} ${mustHave.s}`}>Sign up</a>
            </div>
        </header>
    )
}

export default Header