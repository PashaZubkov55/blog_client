import { useEffect, useState } from "react"
import { Post } from "../components/Past"
import {Person} from '../components/Person'
import { useGetPostsQuery } from "../store/posts/PostsSlice"
import { useNavigate } from "react-router"
import { SESTTINGS_ROUTE } from "../router/Url"

import { Loader } from "../components/Loader"
import { useGetInfoQuery } from "../store/userInfo/userInfoApi"

export const ProfilePage=()=>{
    const navigate = useNavigate()
    //const {data} = useGetPostsQuery()
    const id = localStorage.getItem('userId')
    const {data = {}, isLoading} = useGetInfoQuery(id)
   
   /* myPost = data.filter((item:any)=>{
        if (item.id<=5) {
            return item
            
        }
    })
        */
    //console.log(myPost)
    useEffect(()=>{
           if (isLoading) {
            console.log('загрузка...')
           }
           console.log('данные', data)
    },[isLoading])
    return(
      
        <div className="profile">
        <div className="profile__person">
        {
                isLoading? 
                <Loader/>:
                <Person
                    id = {data.id}
                    name= {data.name}
                    img= {data.img}

                
                />
            }
      
        </div>

        <div className="profile__body">
           <div className="profile__posts">
            <div className="profile__title">
                <h1 className="text-2xl font-semibold mt-4 pl-15">Мои Посты</h1>
            </div>
            
            <div className="profile_posts">
           
            </div>
            
           
                
        
        </div>
        </div>
        </div>

     
    )
}