import { useEffect } from "react"
import { Loader } from "../components/Loader"
import { Post } from "../components/Past"
import { useGetPostsQuery } from "../store/posts/PostsSlice"
import { NonDataComponent } from "../components/NonDataComponent"
export const HomePage =()=>{
    const {data=[], isLoading} = useGetPostsQuery()
    useEffect(()=>{
        console.log(data)
    },[])
  
    if (isLoading ) {
        return(
            <Loader/>
        )
    } 
    if (!data || data.length === 0) {
        return <NonDataComponent
        message ='постов'
        modal ='post'
        />
    }
       
       

    return(
            
            <div className="postList  ">
               
                
               {
                data?
                data.map(post=>(
                
                    <Post 
                    key = {post.id} 
                    title ={post.title}
                    img = {post.img}
                    id = {post.id}
                    
                    />
                    ))
                    : false
                    
            
                }
           
    
            </div>
            
            
)
            
}


        
    
