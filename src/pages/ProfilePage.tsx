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
      
    return (
        <div className="profile">
          {/* Блок с информацией о пользователе */}
          <div className="profile__person">
            {userInfo && userInfo.data ? (
              <Person userImg={userInfo.data.img} userName={userInfo.data.name} />
            ) : (
              <NonDataComponent message="Нет данных о пользователе" modal="user" />
            )}
          </div>
      
          {/* Постоянный блок с постами, который всегда отображается */}
          <div className="profile__posts">
            {userPosts && userPosts.data && userPosts.data.length > 0 ? (
              userPosts.data.map((post) => (
                <Post
                  key={post.id}
                  title={post.title}
                  img={post.img}
                  id={post.id}
                />
              ))
            ) : (
              <NonDataComponent message="Нет постов" modal="post" />
            )}
          </div>
        </div>
      );
}