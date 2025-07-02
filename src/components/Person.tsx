import react from 'react'
import { NavLink } from 'react-router-dom'
import { SESTTINGS_ROUTE } from '../router/Url'

const Person = ()=>{
    return(
        <div className="person">
            <div className="person__wrapper flex flex-col items-center  w-full p-4  bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="person__awatar  w-32 h-32  my-3 border-4 border-green-600 rounded-full overflow-hidden">
            <img className=" object-cover h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front'/>
           
            </div>
            <div className="person__name">
                <h1 className='person__title text-2xl mb-2'>Alice</h1>
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
export default Person