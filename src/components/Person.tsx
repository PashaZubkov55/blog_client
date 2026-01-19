import react, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { SESTTINGS_ROUTE, URL_SERVER } from '../router/Url'
import { NonDataComponent } from './NonDataComponent'
type person = {
    userName: string
    userImg: string
}

export const  Person: FC<person>= ({ userName, userImg})=>{
    if (!userName) {
        return(
           <NonDataComponent
            message='данных'
           
           />
        )
    }else{
        return(
            <div className="person">
                <div className="person__wrapper flex flex-col items-center  w-full p-4  bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="person__awatar  w-32 h-32  my-3 border-4 border-green-600 rounded-full overflow-hidden">
                <img className=" object-cover h-32" src={URL_SERVER+userImg} alt='Woman looking front'/>
               
                </div>
                <div className="person__name">
                    <h1 className='person__title text-2xl mb-2'>{userName}</h1>
                </div>
                <div className="person__settings">
                <NavLink to={SESTTINGS_ROUTE}>
                <button type='submit' className="cursor-pointer  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Настройки</button>
                </NavLink>
                </div>
            </div>
                
            </div>
    
        )
    }
    
   
}
