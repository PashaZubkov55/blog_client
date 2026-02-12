import { useLocation } from "react-router-dom"
import { FORGOT_PASSWORD_ROUTE, } from "../router/Url"
import { ForgotPassword } from "@components/ForgotPassword"
import { RestorationMessage } from "@components/RestorationMessage"


export  const RestorationPage = ()=>{
    const location = useLocation()

    if (location.pathname == FORGOT_PASSWORD_ROUTE) {
        return <ForgotPassword/>
        
    } else{
        return <RestorationMessage/>
    }

}