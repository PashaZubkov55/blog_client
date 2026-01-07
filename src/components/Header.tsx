
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, LOGUIN_ROUTE } from '../router/Url';
import { Navbar } from './Navbar';
export const Header =()=>{
    return(
            <header className="header  bg-green-700  h-20">
                <div className="container w-80% mx-auto  ">
                <div className="header__wrapper flex justify-between items-center pt-4 items-center text-white  text-2xl" >
                
                    <NavLink className='header__logo' to={HOME_ROUTE}>Blog</NavLink>
                    
                    <Navbar/>
                    
                  
                </div>
                </div>
                
            </header>

        
    )
}