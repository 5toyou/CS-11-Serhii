import classes from './header.module.css'

function Header() {

    return (
        <header className={classes.container}>
            <div className={classes.title}>coolors</div>
            <div className={classes.menu}>
                <div>tools</div>
                <div>go pro</div>
                <a>Sign in</a>
                <a>Sign up</a>
            </div>
        </header>
    )
}

export default Header