import { NavLink, useNavigate } from "react-router-dom"
import {useDispatch, useSelector } from "react-redux"
import { HOME_ROUTE, LOGUIN_ROUTE, PROFILE_ROUTE } from "../router/Url" 
import { setColorMessage, setStatusMessage, setTextMessage, setUser } from "../store/Auth/AuthSlice"
import { NavbarMobile } from "./NavbarMobile"
import { useState } from "react"
import { AppDispatch, RootState } from "../store/store"
export const Navbar=()=>{
    const navigate = useNavigate()
    const user = useSelector((state:RootState)=>state.auth.user)
    const dispatch = useDispatch<AppDispatch>()
    const [burgerMenuStatus, setBurgerMenuStatus] = useState(false)
    
    const menuStatus =()=>{
       if (burgerMenuStatus == true) {
        setBurgerMenuStatus(false)
        console.log(burgerMenuStatus)
       }else{
        setBurgerMenuStatus(true)
        console.log(burgerMenuStatus)
       }

       
    }
    const logOut = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        dispatch(setUser(false))
        dispatch(setStatusMessage(true))
        dispatch(setTextMessage('вы вышли!'))
        dispatch(setColorMessage('bg-green-500'))
        navigate(HOME_ROUTE)
        
    }
     return( 
        <div className="menu">
          <div className="block md:hidden" >
            <div className="menu__burger  cursor-pointer" onClick={()=>{setBurgerMenuStatus(true)}}>
            <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="30" height="4" rx="2" fill="#FFFFFF"/>
            <rect x="0" y="8" width="30" height="4" rx="2" fill="#FFFFFF"/>
            <rect x="0" y="16" width="30" height="4" rx="2" fill="#FFFFFF"/>
            </svg>
            </div>
            {burgerMenuStatus == true? 
          <nav  className="mwenu__mobile" onClick={()=>{menuStatus()}}>
          {user === true?
                 <ul className="">
                  <li> <NavLink  to={HOME_ROUTE} className='list__item'>Главная </NavLink></li>
                  <li>  <NavLink  to={PROFILE_ROUTE} className='list__item'>Профиль </NavLink>   </li>
                  <li><span onClick={()=>{logOut()}}className='list__item  cursor-pointer' >Выйти </span></li>
                
               
                   
                      </ul>
                      : 
                      <ul className="">
                          <li> <NavLink  to={HOME_ROUTE} className='list__item'>Главная </NavLink>   </li>
                          <li> <NavLink to={LOGUIN_ROUTE}  className='list__item' > Войти </NavLink>  </li>
                     
                     
                           </ul>

      
      
      }
          </nav>  : false  
        
        }
          
          </div>
         <nav className="hidden navbar md:block ">
            {user === true?
                   <ul className="navbar_list list">
                   <NavLink  to={HOME_ROUTE} className='list__item'>Главная </NavLink>
                   <NavLink  to={PROFILE_ROUTE} className='list__item'>Профиль </NavLink>   
                   <span onClick={()=>{logOut()}}className='list__item  cursor-pointer' >Выйти </span>  
                        </ul>
                        : 
                        <ul className="navbar_list list">
                        <NavLink  to={HOME_ROUTE} className='list__item'>Главная </NavLink>   
                        <NavLink to={LOGUIN_ROUTE}  className='list__item' > Войти </NavLink>  
                             </ul>

        
        
        }
         </nav>
         </div>
     )
    }
    
       
      
   
