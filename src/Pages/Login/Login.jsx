import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthLogin from '../../Components/Contexs/loginContex';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Parallax from 'parallax-js';
import { useEffect } from 'react';

function Login() {

  useEffect(() => {
    let element = document.getElementById("scene");
    let parallax = new Parallax(element);
    let element2 = document.getElementById("scene2");
    let parallax2 = new Parallax(element2);
  })

  let authLogin = useContext(AuthLogin);
  let navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm()

  const submit = (data) => {
    // fetch(`http://localhost:3000/users?username=${data.username}&password=${data.password}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.length) {
    //       authLogin.login(data[0]);
    //       Swal.fire({
    //         title: "با موفقیت وارد شدید.",
    //         icon: "success",
    //         confirmButtonText: 'اوکی'
    //       }).then(result => {
    //         navigate("/");

    //       })
    //     } else {
    //       Swal.fire({
    //         title: "کاربری با این مشخصات یافت نشد!",
    //         icon: "error",
    //         confirmButtonText: 'اوکی'
    //       }).then(result => {
    //         setValue("username", "");
    //         setValue("password", "");
    //       })
    //     }
    //   })
    Swal.fire({
      title: " ورود با موفقیت انجام شد.",
      icon: "success",
      showConfirmButton: true,
      confirmButtonText: "اوکی"
    }).then(result => {
      authLogin.login();
      navigate("/");
    })
  }



  return (
    <div className="register-main-container">

      <div className="register-container">
        <form className="register" onSubmit={handleSubmit(submit)}>
          <input {...register("username", { required: true, minLength: 4, maxLength: 10 })} placeholder='نام کاربری' type="text" className="register__input" />
          {errors.username && (<p className='register-error-ms'>لطفا نام کاربری خود را وارد کنید!</p>)}
          <input {...register("password", { required: true, minLength: 4, maxLength: 25 })} placeholder='رمزعبور' type="text" className="register__input" />
          {errors.password && (<p className='register-error-ms'>لطفا رمز عبور خود را وارد کنید!</p>)}
          <input type="submit" className="register__btn btn" value='ورود' />
          <span className="register__btn-login">برای ثبت نام کلیک کنید <Link to="/register" className='register__btn-login-span'>ثبت نام</Link></span>
        </form>

      </div>

      <div id='scene' data-friction-x="0.02" data-friction-y="01" data-scalar-x="30" data-scalar-y="5" className="circle-container">
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

export default Login