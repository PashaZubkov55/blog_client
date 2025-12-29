import {  useNavigate } from "react-router-dom"
import { RESTORATION_PASSWORD_ROUTE } from "../router/Url"


export  const RestorationMessage = ()=>{
    const navigate = useNavigate()
    const email = localStorage.getItem('email')
    const token = 'aaaaaaaa'
    return(
        <div className="restorationMessage">
            <div className="restorationMessage__wrapper max-w-sm mx-auto mt-40 shadow-2xl p-5">
            <div className=" restorationMessage__text mb-5">
                <span>перейдите на почту <strong>{email}</strong> для востоновление аккаунта !</span>
                <button onClick={()=> navigate(RESTORATION_PASSWORD_ROUTE) }>Перейти</button>
                </div>
            </div>
        </div>
    )
} 




