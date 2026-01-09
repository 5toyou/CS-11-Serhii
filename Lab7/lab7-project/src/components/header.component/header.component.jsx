import classes from './header.module.css'

function HeaderComponent() {

    return (
        <header>
            <div className = {classes.topRow}>
                <a>Log in</a>
                <a>Create an account</a>
                <a>Check out</a>
            </div>
            <div className = {classes.bottomRow}>
                <div className = {classes.mainText}>
                    <div className = {classes.title}>
                        <div>Furniture</div>
                        <div>Store</div>
                    </div>
                    <div>The biggest choice on the web</div>
                </div>
                <div className = {classes.barGap}>
                    <div className = {classes.cartBar}>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <div>My cart:</div>&nbsp;
                            <div>0 item(s) -</div>&nbsp;
                            <div>$0.00</div>
                        </div>
                    </div>
                    <div className = {classes.searchBar}>
                        <input type="text" placeholder='Search store...' />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
    
}

export default HeaderComponent