import { useEffect } from "react"
import { Post } from "../components/Past"
import { useGetPostsQuery } from "../store/posts/PostsSlice"
export const HomePage =()=>{
    const {data=[], isLoading} = useGetPostsQuery()
    useEffect(()=>{
        console.log(data)
    },[])
  

    return(
        <div className="container">
            {isLoading? <h1>loading...</h1>:
            
            <div className="postList">
            {data.map(post=>(
                <Post 
                key = {post.id} 
                title ={post.title}
                id = {post.id}
                
                />
                ))}
    
            </div>
            }
       
    </div>
    
)
}
        
    
