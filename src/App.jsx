import { routes } from './rotes';
import { useNavigate, useRoutes } from 'react-router-dom';
import AuthLogin from './Components/Contexs/loginContex';
import { useEffect, useState } from 'react';


import './App.css';

function App() {
  const [isLoding, serIsLoding] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [userInfos, setUserInfos] = useState("mehrdad");

  let navigate = useNavigate();

  const login = () => {
    setIsLogin(true);
    // setUserInfos("");
    // localStorage.setItem("userToken", JSON.stringify(userData.id));
  }
  const logOut = () => {
    setIsLogin(false);
    // setUserInfos();
    // localStorage.removeItem("userToken");
    navigate("/");

  }

  let roter = useRoutes(routes);


  // useEffect(() => {
  //   let dataStorage = JSON.parse(localStorage.getItem("userToken"));
  //   if (dataStorage) {
  //     fetch(`http://localhost:3000/users/${dataStorage}`)
  //       .then(res => {
  //         if (res.ok) {
  //           return res.json();
  //         }
  //       })
  //       .then(data => {
  //         login(data);
  //       })
  //   }
  // }, [])


  useEffect(() => {
    setTimeout(() => {
      serIsLoding(false);

    }, 1000);


  }, [])

  return (
    <>
    
      {isLoding ? (<div className="loader-div"><div className="loader"></div></div>) : (

        <AuthLogin.Provider value={{
          isLogin,
          userInfos,
          login,
          logOut
        }}>
          <div className="container">
            {roter}

          </div>
        </AuthLogin.Provider>
      )}
    </>


  )
}

export default App
