import { useNavigate } from "react-router-dom"
import { LOGUIN_ROUTE, REGISTRATION_ROUTE, SESTTINGS_ROUTE } from "../router/Url"

import { FC } from "react"
type Message = {
    message: string,
    modal?: boolean|string
}


export const NonDataComponent :FC<Message> = ({message,})=>{
    const navigate = useNavigate()
        if (!localStorage.token) {
            return (
                <div className="restorationMessage">
                <div className="restorationMessage__wrapper max-w-sm mx-auto mt-40 shadow-2xl p-5">
                <div className=" restorationMessage__text mb-5">
                    <span>на сайте нет постов!
                        <span className="cursor-pointer  text-green-600" onClick={()=>{navigate(LOGUIN_ROUTE)}}> войдите в акаунт </span>
                         чтобы  добавить пост 
                    </span>
                        
                    </div>
                </div>
            </div>
            )
        }
        return(

            <div className=" flex justify-center  mt-20  ">    
            <div className="detail bg-white  overflow-hidden  max-w-200 mb-18 pb-6 mt-8 bg-white border border-gray-200 rounded-lg shadow-sm    ">
            
                    <div className="detail__title px-8 ">
                        <h1 className='title   text-3xl font-extrabold dark:text-white px8 '> {message}</h1>
                        </div>
                   
                    <div className="details_button">
                    <button type='button' onClick={()=>{navigate(SESTTINGS_ROUTE)}} className="mb-2 mt-2 block cursor-pointer  bg-green-700 w-full rounded  text-white px-6 pb-2 pt-2.5 text-xs hover:bg-green-800  font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">
                    Добавить
                    </button>
                    </div>
                    </div>

         </div>
        )
}

    
    
    
       