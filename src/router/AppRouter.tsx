
import { Routes, Route,  } from "react-router-dom";
import { useSelector } from "react-redux";
import { authRouts, publicRouts } from "./routes";
import { NotFaundPage } from "../pages/NotFaundPage";
import { RootState } from "../store/store";
const AppRouter=()=>{
    const user = useSelector((state:RootState) => state.auth.user)

      return(
        <Routes>
         { user == true  &&  authRouts.map(({path, component})=>
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