import React, { useState } from 'react';
import "./UserDashbord.css";
import { Outlet } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useContext } from 'react';
import AuthLogin from '../../Components/Contexs/loginContex';

function UserDashbord() {

    const [menuActiv, setMenuactiv] = useState("profile");
    const authLogin = useContext(AuthLogin);

    function clickHandler(menuName) {
        setMenuactiv(menuName);
    }

    return (
        <>
            <div className="dashbord-container">
                <div className="dashbord-menus">
                    <div className="dashbord-menu">
                        <ul className="dashbord-menu-lists">
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