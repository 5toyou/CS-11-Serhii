import classes from "./register.module.css"
import mustHave from "../must_have.module.css"
import { useNavigate } from "react-router-dom"

import bg_img from "../../assets/bg.png"

function Register() {

    const navigate = useNavigate();

    return (
        <div className = {classes.split_screen}>
            <div className = {classes.screen_left}>
                <div></div>
                <div className = {classes.register_box}>
                    <div>Sign up</div>
                    <div>Create a free account with your email.</div>
                    <input name="full_name" type="text" placeholder="Full Name" />
                    <input name="email" type="text" placeholder="Email" />
                    <input name="password" type="text" placeholder="Password" />
                    <a onClick={() => navigate('/')} className = {mustHave.btn_blue}>Create your free account</a>
                    <div>Already have an account? Sign in</div>
                </div>
                <div>By continuing, you agree to our <a >Terms of Service.</a> Read our <a >Privacy Policy.</a></div>
            </div>
            <img src={bg_img} className = {classes.screen_right} />
        </div>
    )

}


export default Register