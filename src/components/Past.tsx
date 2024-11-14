import { useEffect } from "react";
import { useNavigate } from "react-router"
import { POST_ROUTE } from "../router/Url"
import { useGetPostsQuery } from "../store/posts/PostsSlice";

export const Post = ({title, id})=>{
    const navigate = useNavigate()
return(
   
   <div className="post" onClick={(()=>{navigate(POST_ROUTE+ id)})}>
    <div className="post__wrapper">
        <div className="post__img">
            <img src="https://avatars.mds.yandex.net/i?id=b0d08c2379524331b4b93ac74511c383a9cd1f44-4234302-images-thumbs&n=13" alt="imgPost" />
        </div>
        <div className="post__info">
            <div className="post__title">{title}</div>
            <div className="post__auter">Автер поста</div>
        </div>
    </div>
   </div>
)
}