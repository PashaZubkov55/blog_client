import { Post } from "../components/Past"
import { useGetPostsQuery } from "../store/posts/PostsSlice"
export const HomePage =()=>{
    const {data=[]} = useGetPostsQuery()
    console.log(data)

    return(
        <div className="container">
            {data.map(item=>(
                <p key={item.id}>{item.title}</p>
            ))}
        <Post />
        </div>
        
    )
}