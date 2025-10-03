import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { HOME_ROUTE, LOGUIN_ROUTE, PROFILE_ROUTE } from "../router/Url" 
import { useEffect, useState } from "react"
import { setStatus } from "../store/Auth/AuthSlice"
export const Navbar=()=>{
   const [menuList,setMenuList] = useState([])
    const auth = useSelector((state) => state.auth.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const logOut = ()=>{
        localStorage.removeItem('token')
        dispatch(setStatus(false))
        navigate(HOME_ROUTE)
        window.location.reload()
        console.log('Вы вышли !')
        
    }
     return(  
         <nav className="navbar">
            {auth ?
                   <ul className="navbar_list list">
                   <NavLink  to={HOME_ROUTE} className='list__item'>Главная </NavLink>
                   <NavLink  to={PROFILE_ROUTE} className='list__item'>Профиль </NavLink>   
                   <span onClick={()=>{logOut()}}className='list__item' >Выйти </span>  
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
    
       
      
   
