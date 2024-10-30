import { Post } from "../components/Past"
import { useGetPostsQuery } from "../store/posts/PostsSlice"
export const HomePage =()=>{
    const {data=[]} = useGetPostsQuery()
  

    return(
        <div className="container">
            <div className="postList">
            {data.map(item=>(
                <Post 
                key = {item.id} 
                title ={item.title}
                
                />
            ))}
       </div>
        </div>
        
    )
}