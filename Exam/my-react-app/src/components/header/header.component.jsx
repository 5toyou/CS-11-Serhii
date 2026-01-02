import classes from './header.module.css'

function Header() {

    return (
        <header className={classes.container}>
            <div className={classes.title}>colors</div>
            <div className={classes.menu}>
                <div>tools</div>
                <div>go pro</div>
            </div>
        </header>
    )
}

export default Header