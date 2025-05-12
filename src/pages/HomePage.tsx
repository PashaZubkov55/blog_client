import { useEffect } from "react"
import { Loader } from "../components/Loader"
import { Post } from "../components/Past"
import { useGetPostsQuery } from "../store/posts/PostsSlice"
export const HomePage =()=>{
    const {data=[], isLoading} = useGetPostsQuery()
    useEffect(()=>{
        console.log(data)
    },[])
  
    if (isLoading) {
        return(
            <Loader/>
        )
        
    }
    return(
            
            <div className="postList  ">
            {data.map(post=>(
                <Post 
                key = {post.id} 
                title ={post.title}
                id = {post.id}
                
                />
                ))}
    
            </div>
            
    
)
}
        
    
