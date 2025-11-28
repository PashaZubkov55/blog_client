
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authRouts, publicRouts } from "./routes";
import { useEffect, useState } from "react";
import { NotFaundPage } from "../pages/NotFaundPage";
const AppRouter=()=>{
    const [auth, setAuth] = useState(false)
    const user = useSelector((state) => state.auth.user)

      return(
        <Routes>
         { user.payload === true  &&  authRouts.map(({path, component})=>
        <Route key={path} path={path} Component={component}/>
        )}
          { publicRouts.map(({path, component})=> 
        <Route key={path} path={path} Component={component}/>
        )}
        <Route path="*" element={<NotFaundPage/>}/>
        </Routes>
       
     )
    
}
export default AppRouter