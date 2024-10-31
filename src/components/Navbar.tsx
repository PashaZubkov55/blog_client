import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { HOME_ROUTE, LOGUIN_ROUTE, PROFILE_ROUTE } from "../router/Url" 
import { useEffect, useState } from "react"
export const Navbar=()=>{
   const [menuList,setMenuList] = useState([])
    const auth = useSelector((state) => state.auth.isAuth)
    useEffect(()=>{
        console.log(auth)
    },[auth])
     return(  
         <nav className="navbar">
            {auth?
                   <ul className="navbar_list list">
                   <NavLink  to={HOME_ROUTE} className='list__item'>Главная </NavLink>
                   <NavLink  to={PROFILE_ROUTE} className='list__item'>Профиль </NavLink>   
                   <NavLink to={HOME_ROUTE}  className='list__item' >Выйти </NavLink>  
                        </ul>
                        : 
                        <ul className="navbar_list list">
                        <NavLink  to={HOME_ROUTE} className='list__item'>Главная </NavLink>   
                        <NavLink to={LOGUIN_ROUTE}  className='list__item' > Войти </NavLink>  
                             </ul>

        
        
        }
         </nav>
     )
    }
    
       
      
   
