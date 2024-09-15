import React from 'react';
import { useContext } from 'react';
import AuthLogin from '../Contexs/loginContex';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function PrivateUserDas({children}) {
    let authLogin = useContext(AuthLogin);


    return authLogin.isLogin ? children : <Navigate to={"/"}/>
}

export default PrivateUserDas