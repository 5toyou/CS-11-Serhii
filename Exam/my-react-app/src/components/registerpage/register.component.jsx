import classes from "./register.module.css"
import mustHave from "../must_have.module.css"
import { useNavigate } from "react-router-dom"
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react';

import bg_img from "../../assets/bg.png"

function Register() {

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
                    <div className={classes.pass_pos}>
                        <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Password"  />
                        <button id="blur_btn" className = {classes.eyeButton} onClick={togglePasswordVisibility} >{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                    </div>

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