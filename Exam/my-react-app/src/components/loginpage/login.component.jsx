import classes from "./login.module.css"
import mustHave from "../must_have.module.css"
import { useNavigate } from "react-router-dom"

import bg_img from "../../assets/bg.png"

function Login() {

    const navigate = useNavigate();

    return (
        <div className = {classes.split_screen}>
            <div className = {classes.screen_left}>
                <div></div>
                <div className = {classes.login_box}>
                    <div>Hello!</div>
                    <div>Use your email or another service to continue<br/> with Coolors.</div>
                    <a className = {mustHave.btn_grey}>Continue with Google</a>
                    <a className = {mustHave.btn_grey}>Continue with Apple</a>
                    <div className = {classes.or_line}></div>
                    <a onClick={() => navigate('/registration')} className = {mustHave.btn_blue}>Continue with email</a>
                </div>
                <div>By continuing, you agree to our <a >Terms of Service.</a> Read our <a >Privacy Policy.</a></div>
            </div>
            <img src={bg_img} className = {classes.screen_right} />
        </div>
    )   

}


export default Login