import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import AuthLogin from '../Contexs/loginContex';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function NavBar() {

    useEffect(()=>{
        gsap.fromTo(".nav-bar-section > *",{
            scrollTrigger: ".nav-bar-section",
            y: 20,
            opacity:0,
            duration: 0,
        },{
            y:0,
            opacity:1,
            duration: 1,
        })
    },[])

    let authLogin = useContext(AuthLogin);
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    function clickHandler(){
        setIsMobileMenu((prev)=>{
            return (!prev)
        })
    }

    return (
        <nav className='nav-bar-section'>
            <div  className={`mobile-nav ${isMobileMenu && "mobile-nav--activ"}`}>
                <ul className="mobile-nav__ul">
                    <div onClick={clickHandler} className="mobile-menu__close-icon"><CloseIcon sx={{ fontSize: 20 }}/></div>
                    {authLogin.isLogin ? (<Link to="/dashbord" className="nav-bar__btn-register-mobile btn">داشبورد</Link>) : (<Link to="/register" className="nav-bar__btn-register-mobile btn">ثبت نام / ورود</Link>)}
                    <li className="mobile-nav__li"><a href="" className="mobile-nav-bar__btn">راهنما</a></li>
                    <li className="mobile-nav__li"><a href="" className="mobile-nav-bar__btn">آپدیت ها</a></li>
                    <li className="mobile-nav__li"><a href="" className="mobile-nav-bar__btn">مشتری ها</a></li>
                    <li className="mobile-nav__li"><a href="" className="mobile-nav-bar__btn">ویژگی ها</a></li>
                    <li className="mobile-nav__li"><a href="" className="mobile-nav-bar__btn">درباره ما</a></li>
                </ul>
            </div>
            <div className="nav-bar__btns">
                <div onClick={clickHandler} className="nav-bar__hamburger"></div>
                {authLogin.isLogin ? (<Link to="/dashbord" className="nav-bar__btn-register btn">داشبورد</Link>) : (<Link to="/register" className="nav-bar__btn-register btn">ثبت نام / ورود</Link>)}
                <a href="" className="nav-bar__btn">راهنما</a>
                <a href="" className="nav-bar__btn">آپدیت ها</a>
                <a href="" className="nav-bar__btn">مشتری ها</a>
                <a href="" className="nav-bar__btn">ویژگی ها</a>
                <a href="" className="nav-bar__btn">درباره ما</a>
            </div>
            <ul className="nav-bar__logos">
                <li className="nav-bar__logo">
                    <img className='nav-bar__logo-img-1' src="./svgs/logo.svg" alt="" />
                </li>
                <div className='nav-bar__logo-tex-div'>
                    <li className="nav-bar__logo">Framer</li>
                    <li className="nav-bar__logo">
                        <img src="./svgs/Vector.svg" alt="" />
                    </li>
                    <li className="nav-bar__logo">Made by</li>

                </div>
            </ul>
        </nav>
    )
}

export default NavBar