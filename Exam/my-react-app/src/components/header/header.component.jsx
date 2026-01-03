import classes from "./header.module.css"
import mustHave from "../must_have.module.css"

function Header() {

    return (
        <header className={classes.container}>
            <div className={classes.title}>coolors</div>
            <div className={classes.menu}>
                <div>tools</div>
                <div>go pro</div>
                <a className = {mustHave.btn_trans}>Sign in</a>
                <a className = {`${mustHave.btn_blue} ${mustHave.s}`}>Sign up</a>
            </div>
        </header>
    )
}

export default Header