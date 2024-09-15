import Index from "./Pages/Index/Index"
import Register from "./Pages/Register/Register"
import Login from "./Pages/Login/Login"
import UserDashbord from "./Pages/UserDashbord/UserDashbord"
import UserProfile from "./Pages/UserDashbord/UserProfile/UserProfile"
import PrivateUserDas from "./Components/privateUserDas/PrivateUserDas"


const routes = [
    {path: "/", element: <Index/>},
    {path: "/register", element: <Register/>},
    {path: "/login", element: <Login/>},
    {path: "/dashbord", element: <PrivateUserDas> <UserDashbord/> </PrivateUserDas>, children:[
        {path: "", element: <UserProfile/>},
        {path: "bag-buy", element: <Register/>},
        {path: "tickets", element: <Register/>},
    ]}
]


export {routes};