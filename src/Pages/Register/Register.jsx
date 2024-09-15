import React, { useEffect, useRef } from 'react';
import "./Register.css";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import AuthLogin from '../../Components/Contexs/loginContex';
import { useContext } from 'react';
import Parallax from 'parallax-js';

function Register() {
    let authLogin = useContext(AuthLogin);
    let navigate = useNavigate();
    useEffect(()=>{
        
        // const element = useRef();
        let element = document.getElementById("scene");
        let parallax = new Parallax(element);
        let element2 = document.getElementById("scene2");
        let parallax2 = new Parallax(element2);
    })

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm()

    const submit = (data) => {
        // fetch("http://localhost:3000/users", {
        //     method: "POST",
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then(res => {
        //     if (res.ok) {
        //         return res.json();

        //     }
        // }).then(data => {
        //     Swal.fire({
        //         title: "ثبت نام با موفقیت انجام شد.",
        //         icon: "success",
        //         showConfirmButton: true,
        //         confirmButtonText: "اوکی"
        //     }).then(result => {
        //         authLogin.login(data);
        //         navigate("/");
        //     })
        // })

        Swal.fire({
            title: "ثبت نام با موفقیت انجام شد.",
            icon: "success",
            showConfirmButton: true,
            confirmButtonText: "اوکی"
        }).then(result => {
            authLogin.login();
            navigate("/");
        })
    }

    return (
        <div className='register-main-container'>
            <div className="register-container">
                <form className="register" onSubmit={handleSubmit(submit)}>
                    <input {...register("username", { required: true, minLength: 4, maxLength: 10 })} placeholder='نام کاربری' type="text" className="register__input" />
                    {errors.username && (<p className='register-error-ms'>لطفا نام کاربری خود را وارد کنید!</p>)}
                    <input {...register("email", { required: true, minLength: 4, maxLength: 20 })} placeholder='ایمیل' type="text" className="register__input" />
                    {errors.email && (<p className='register-error-ms'>لطفا ایمیل خود را وارد کنید!</p>)}
                    <input {...register("password", { required: true, minLength: 4, maxLength: 25 })} placeholder='رمزعبور' type="text" className="register__input" />
                    {errors.password && (<p className='register-error-ms'>لطفا رمز عبور خود را وارد کنید!</p>)}
                    <input type="submit" className="register__btn btn" value='ثبت نام' />
                    <span className="register__btn-login">قبلا ثبت نام کردم <Link to="/login" className='register__btn-login-span'>ورود</Link></span>
                </form>

            </div>

            <div id='scene' className="circle-container">
                <span data-depth="0.9" className="register-circle1"></span>
                <span data-depth="0.5" className="register-circle2"></span>
                <span data-depth="0.5" className="register-circle5"></span>
                <span data-depth="0.2" className="register-circle3"></span>
                <span data-depth="0.7" className="register-circle4"></span>
            </div>
            <div id='scene2' className="background-div">
                <img data-depth="0.09" src="./images/space.jpg" alt="" className="background-img" />
            </div>
        </div>
    )
}

export default Register