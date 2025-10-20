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
    const userInfo = useGetInfoQuery(id)
    const userPosts = useGetPostsQuery(id)
   
   /* myPost = data.filter((item:any)=>{
        if (item.id<=5) {
            return item
            
        }
    })
        */
    //console.log(myPost)
    useEffect(()=>{
           if (userInfo.isLoading && userPosts.isLoading) {
            console.log('загрузка...')
           }
           console.log('данные пользователя - ', userInfo.data)
           console.log('данные постов пользователя - ', userPosts.data)

    },[userInfo.isLoading])
    return(
      
        <div className="profile">
        <div className="profile__person">
        {
                userInfo.isLoading? 
                <Loader/>:
                <Person
                    id = {userInfo.data.id}
                    name= {userInfo.data.name}
                    img= {userInfo.data.img}

                
                />
            }
      
        </div>

        <div className="profile__body">
           <div className="profile__posts">
            <div className="profile__title">
                <h1 className="text-2xl font-semibold mt-4 pl-15">Мои Посты</h1>
            </div>
            
            <div className="profile_posts">
                {
                    userPosts.data?
                    userPosts.data.map(post=>(
                        <Post
                            key={post.id}
                            id={post.id}
                            title= {post.title}
                            img={post.img}
                        
                        />
                    )): <Loader/>

                
                }
           
            </div>
            
           
                
        
        </div>
        </div>
        </div>

     
    )
}