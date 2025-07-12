import { useEffect, useState } from "react"
import { Post } from "../components/Past"
import Person from '../components/Person'
import { useGetPostsQuery } from "../store/posts/PostsSlice"
import { useNavigate } from "react-router"
import { SESTTINGS_ROUTE } from "../router/Url"

export const ProfilePage=()=>{
    const navigate = useNavigate()
    const {data} = useGetPostsQuery()
    let myPost = []
   
    myPost = data.filter((item:any)=>{
        if (item.id<=5) {
            return item
            
        }
    })
    console.log(myPost)
    return(
      
        <div className="profile">
        <div className="profile__person">
            <Person/>
        </div>

        <div className="profile__body">
           <div className="profile__posts">
            <div className="profile__title">
                <h1 className="text-2xl font-semibold mt-4 pl-15">Мои Посты</h1>
            </div>
            
            {
            
            myPost.map((post:any)=>(
            <Post
               key = {post.id}
               title= {post.title}
               id = {post.id}
               img= {post.img}
               />
                
                
               ))}
              
           </div>
        </div>
        </div>
     
    )
}