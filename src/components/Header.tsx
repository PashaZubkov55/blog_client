
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, LOGUIN_ROUTE } from '../router/Url';
import { Navbar } from './Navbar';
export const Header =()=>{
    return(
            <header className="header">
                <div className="container">
                <div className="header__wrapper">
                
                    <div className="header_logo">Blog</div>
                    <Navbar/>
                </div>
                </div>
            </header>

        
    )
}