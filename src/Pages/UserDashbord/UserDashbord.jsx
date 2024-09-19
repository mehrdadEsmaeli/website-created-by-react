import React, { useState } from 'react';
import "./UserDashbord.css";
import { Outlet } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useContext } from 'react';
import AuthLogin from '../../Components/Contexs/loginContex';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function UserDashbord() {

    const [isShow, setIsShow] = useState(false);
    const [menuActiv, setMenuactiv] = useState("profile");
    const authLogin = useContext(AuthLogin);

    function clickHandler(menuName) {
        setMenuactiv(menuName);
    }

    const menuClickHandler = ()=>{
        setIsShow((prev)=> !prev)
    }

    return (
        <>
            <div className="dashbord-container">
                <div className={`dashbord-menus`}>
                    <div className={`dashbord-menu ${isShow && "dashbord-menu--activ"}`}>
                        <ul className="dashbord-menu-lists">
                            <div className="close-icon-div">

                                <CloseIcon onClick={menuClickHandler} sx={{ fontSize: 25 }} className='close-icon' />
                            </div>
                            <li onClick={() => { clickHandler("profile") }} className={`dashbord-menu-li ${menuActiv == "profile" && "dashbord-menu-li--activ"} `}>پروفایل</li>
                            <li onClick={() => { clickHandler("bags") }} className={`dashbord-menu-li ${menuActiv == "bags" && "dashbord-menu-li--activ"} `}>سبد خرید</li>
                            <li onClick={() => { clickHandler("tikets") }} className={`dashbord-menu-li ${menuActiv == "tikets" && "dashbord-menu-li--activ"} `}>تیکت ها</li>
                            <li onClick={() => { clickHandler("logout"); authLogin.logOut() }} className={`dashbord-menu-li ${menuActiv == "logout" && "dashbord-menu-li--activ"} `}>خروج از حساب</li>
                        </ul>
                    </div>
                </div>
                <div className="dashbord-content">
                    <div className="user-d-header">
                        <div className="user-d__profile">
                            <NotificationsNoneIcon sx={{ fontSize: 25 }} className='notfication-icon' />
                            <div className="user-d__profile-img-div">
                                <img src="./images/images.jfif" alt="" />
                            </div>
                        </div>
                        <div className="user-d__search-div">
                            <MenuIcon onClick={menuClickHandler} sx={{ fontSize: 30 }} className='menu-icon' />
                            <input type="text" placeholder='جستجو...' />

                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default UserDashbord