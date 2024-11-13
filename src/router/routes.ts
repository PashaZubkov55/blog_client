import { HomePage } from "../pages/HomePage";
import { PostPage } from "../pages/PostPage";
import { AuthPage } from "../pages/AuthPage";
import { ProfilePage } from "../pages/ProfilePage";
import { HOME_ROUTE, LOGUIN_ROUTE, POST_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from "./Url";



export const authRouts =[
    {
        path: PROFILE_ROUTE,
        component: ProfilePage

        
    },
   

   
   
]

export const publicRouts =[
    {
        path: POST_ROUTE +':id',
        component: PostPage
        
    },
    {
        path: LOGUIN_ROUTE,
        component: AuthPage

    },
    {
       path: REGISTRATION_ROUTE ,
       component: AuthPage

    },
    {
        path: HOME_ROUTE,
        component: HomePage

    }
    
   
   
]
