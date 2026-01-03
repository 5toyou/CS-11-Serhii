import classes from "./footer.module.css"
import mustHave from "../must_have.module.css"

function Footer() {

    return (
        <footer className = {classes.footer}>
            <div className = {classes.container}>
                <div className = {classes.footer_top}>
                    <div className = {classes.box}>
                        <ul>
                            <li className = {mustHave.sub_text_grey}>TOOLS</li>

                            <li className = {mustHave.btn_trans}>Generate your palettes</li>
                            <li className = {mustHave.btn_trans}>Explore popular palettes</li>
                            <li className = {mustHave.btn_trans}>Extract palette from image</li>
                            <li className = {mustHave.btn_trans}>Contrast checker</li>
                            <li className = {mustHave.btn_trans}>Preview palettes on designs</li>
                            <li className = {mustHave.btn_trans}>Color picker</li>
                            <li className = {mustHave.btn_trans}>Tailwind Colors</li>
                            <li className = {mustHave.btn_trans}>Color Bot</li>
                        </ul>
                    </div>

                    <div className = {classes.box}>
                        <ul>
                            <li className = {mustHave.sub_text_grey}>DISCOVER</li>

                            <li className = {mustHave.btn_trans}>List of colors</li>
                            <li className = {mustHave.btn_trans}>Browse gradients</li>
                            <li className = {mustHave.btn_trans}>Create a gradient</li>
                            <li className = {mustHave.btn_trans}>Make a gradient palette</li>
                            <li className = {mustHave.btn_trans}>Image converter</li>
                            <li className = {mustHave.btn_trans}>Recolor your own design</li>
                            <li className = {mustHave.btn_trans}>Create a collage</li>
                            <li className = {mustHave.btn_trans}>Browse free fonts</li>
                            <li className = {mustHave.btn_trans}>Font Generator</li>
                        </ul>
                    </div>

                    <div className = {classes.box}>
                        <ul>
                            <li className = {mustHave.sub_text_grey}>APPS</li>

                            <li className = {mustHave.btn_trans}>iOS App</li>
                            <li className = {mustHave.btn_trans}>Figma Plugin</li>
                            <li className = {mustHave.btn_trans}>Adobe Extension</li>
                            <li className = {mustHave.btn_trans}>Chrome Extension</li>
                        </ul>
                    </div>

                    <div className = {classes.box}>
                        <ul>
                            <li className = {mustHave.sub_text_grey}>COMPANY</li>

                            <li className = {mustHave.btn_trans}>Pricing</li>
                            <li className = {mustHave.btn_trans}>License</li>
                            <li className = {mustHave.btn_trans}>Terms of service</li>
                            <li className = {mustHave.btn_trans}>Privacy policy</li>
                            <li className = {mustHave.btn_trans}>Cookie policy</li>
                            <li className = {mustHave.btn_trans}>Manage cookies</li>
                            <li className = {mustHave.btn_trans}>Help center</li>
                            <li className = {mustHave.btn_trans}>Advertise</li>
                            <li className = {mustHave.btn_trans}>Affiliate</li>
                            <li className = {mustHave.btn_trans}>Contact</li>
                            <li className = {mustHave.btn_trans}>Feature Requests</li>
                        </ul>
                    </div>
                </div>

                <div className = {classes.footer_bottom}>
                    <div>© Coolors by Fabrizio Bianchi. Let's make something cool!</div>
                </div>
            </div>
        </footer>
    )

}

export default Footer