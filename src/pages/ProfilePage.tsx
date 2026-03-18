import { useEffect} from "react"
import { Post } from "../components/Past"
import {Person} from '../components/Person'
import { useGetUserPostsQuery } from "../store/posts/PostsSlice"

import { NonDataComponent } from "../components/NonDataComponent"
import { useGetInfoQuery } from "../store/userInfo/UserInfoApi"




export const ProfilePage=()=>{


    const userId = Number( localStorage.getItem('userId'))
    const userInfo = useGetInfoQuery(userId)
    const userPosts = useGetUserPostsQuery(userId)
    useEffect(()=>{
           if (userInfo.isLoading && userPosts.isLoading) {
            
           }

    },[userInfo.isLoading, userPosts.isLoading])
      
    return (
        <div className="profile">
         <div className="profile__person">
        {userInfo.isSuccess && userInfo.data ? (
          <Person
            img={userInfo.data.img ?? ""}
            name={userInfo.data.name}
          />
        ) : (
          <NonDataComponent message="Нет данных о пользователе" modal="user" />
        )}
      </div>

      
          {/* Постоянный блок с постами, который всегда отображается */}
          <div className="profile__posts">
            {userPosts && userPosts.data && userPosts.data.length > 0 ? (
              userPosts.data.map((post:any) => (
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