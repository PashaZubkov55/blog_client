
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authRouts, publicRouts } from "./routes";
import { useEffect } from "react";
const AppRouter=()=>{
    
    const auth = useSelector((state) => state.auth.isAuth)
    useEffect(()=>{
        console.log(auth)
        
      })
      return(
        <Routes>
           { auth && authRouts.map(({path, component})=>
        <Route key={path} path={path} Component={component}/>
        )}
          { publicRouts.map(({path, component})=> 
        <Route key={path} path={path} Component={component}/>
        )}
        </Routes>
       
     )
    
}
export default AppRouter