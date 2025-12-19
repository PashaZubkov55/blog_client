import { HomePage } from "../pages/HomePage";
import { PostPage } from "../pages/PostPage";
import { AuthPage } from "../pages/AuthPage";
import { ProfilePage } from "../pages/ProfilePage";
import { SettingsPage } from "../pages/SettingsPage";
import { FORGOT_PASSWORD_ROUTE, HOME_ROUTE, LOGUIN_ROUTE, POST_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, RESTORATION_MESSAGE_ROUTE, RESTORATION_PASSWORD_ROUTE, SESTTINGS_ROUTE } from "./Url";
import { RestorationPage } from "../pages/RestorationPage";



export const authRouts =[
    {
        path: PROFILE_ROUTE,
        component: ProfilePage

    },
    {
        path: SESTTINGS_ROUTE,
        component: SettingsPage

    },
    
   

   
   
]

export const publicRouts =[
    {
        path:FORGOT_PASSWORD_ROUTE ,
        component: RestorationPage

    },
    {
        path: RESTORATION_MESSAGE_ROUTE,
        component: RestorationPage

    },
    {
        path: RESTORATION_PASSWORD_ROUTE,
        component: RestorationPage

    },
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