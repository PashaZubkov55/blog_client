
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authRouts, publicRouts } from "./routes";
import { useEffect, useState } from "react";
import { NotFaundPage } from "../pages/NotFaundPage";
const AppRouter=()=>{
    const [auth, setAuth] = useState(false)
   // const auth = useSelector((state) => state.auth.isAuth)
   const token =localStorage.getItem('token') 
   useEffect(()=>{
       if (token) {
        setAuth(true)
        
       }else{setAuth(false)}
      },[token])
      return(
        <Routes>
         { auth && authRouts.map(({path, component})=>
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