import { useEffect, useState } from "react"
import { Post } from "../components/Past"
import {Person} from '../components/Person'
import { useGetPostsQuery } from "../store/posts/PostsSlice"
import { useNavigate } from "react-router"
import { SESTTINGS_ROUTE } from "../router/Url"

import { Loader } from "../components/Loader"
import { useGetInfoQuery } from "../store/userInfo/userInfoApi"
import { NonDataComponent } from "../components/NonDataComponent"


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

    },[userInfo.isLoading, userPosts.isLoading])
      
    return(
      
        <div className="profile">
        <div className="profile__person">
        {
                userInfo.data? 
                <Person
                   userImg={userInfo.data.img}
                   userName={userInfo.data.name}
                  

                
                />: <NonDataComponent
                
                message='данных'
                modal='post'
            />
        }
        </div>
       

        <div className="profile__body">
           <div className="profile__posts">
            <div className="profile__title">
                <h1 className="text-2xl font-semibold mt-4 pl-15">Мои Посты</h1>
            </div>
            
          
            {
                    userPosts.data?
                    userPosts.data.map(post=>(
                        <Post
                            key={post.id}
                            id={post.id}
                            title= {post.title}
                            img={post.img}
                        
                        />
                    )):  <NonDataComponent
                    message='постов'
                    modal='post'
                    />
                
                }
        
            </div>
            
           
           
        </div>
        </div>
       

     
    )
}