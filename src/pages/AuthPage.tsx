
import { useLocation } from 'react-router-dom';
import { Login } from "../components/Login"
import { Registration } from '../components/registration';
import { LOGUIN_ROUTE } from "../router/Url"


export const AuthPage = ()=>{
    const location = useLocation()
const isLogin = location.pathname === LOGUIN_ROUTE
    console.log(isLogin)

    return(
        <>
        {isLogin? <Login/>:<Registration/>}
        </>
        
        
    )
}