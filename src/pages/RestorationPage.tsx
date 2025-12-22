import { useLocation } from "react-router"
import { FORGOT_PASSWORD_ROUTE, RESTORATION_MESSAGE_ROUTE, RESTORATION_PASSWORD_ROUTE } from "../router/Url"
import { ForgotPassword } from "../components/ForgotPassword"
import { RestorationMessage } from "../components/RestorationMessage"
import { RestorationPassword } from "../components/RestorationPassword"

export  const RestorationPage = ()=>{
    const location = useLocation()

    if (location.pathname == FORGOT_PASSWORD_ROUTE) {
        return <ForgotPassword/>
        
    } else{
        return <RestorationMessage/>
    }

}