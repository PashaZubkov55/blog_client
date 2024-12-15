import { useEffect, useState } from "react"
import { Post } from "../components/Past"
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
      <main className="container">
        <div className="profile">
        <div className="profile__head">
            <div className="profile__icon">
                <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" alt="avatar" />

            </div>
            <div className="profile__info">
                <h1>Person</h1>
            </div>
            <img className="profile__Settings"  onClick={()=>{navigate(SESTTINGS_ROUTE)}}src="https://media.forgecdn.net/avatars/482/965/637782295613298008.png" alt="" />
        </div>
        </div>
        <div className="profile__body">
            <h2 className="profile__title">Мои посты</h2>
            <hr className = 'profile__line' />
           <div className="profile__posts">
            
            {
            
            myPost.map((item:any)=>(
            <Post
               key = {item.id}
               title= {item.title}
               id = {item.id}
               />
                
                
               ))}
              
           </div>
        </div>
      </main>
    )
}