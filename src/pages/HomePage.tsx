import { useEffect, useState } from "react"
import { Loader } from "../components/Loader"
import { Post } from "../components/Past"
import { useGetPostsQuery } from "../store/posts/PostsSlice"
import { NonDataComponent } from "../components/NonDataComponent"
import { useDebounce } from "../hooks/useDebounce"
import { Message } from "../components/Message"
export const HomePage =()=>{
   
   
    const [searchValue, setSearchValue] = useState('')
    const title = useDebounce(searchValue)
    const {data=[], isLoading, refetch} = useGetPostsQuery(title)

    useEffect(()=>{
      console.log(data)

    },[])
    const formPrevent =(e)=>{
        e.preventDefault()
        

    }
  /*
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
            <div className="conteiner">
                
            <div className="postList ">
                
               
                
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
            </div>
            
            
)
*/
return(
    <div className="post">
           
            <div className="search">
            <div className="search">
        <div className="search bg-green-700   pt-5 pb-5">
   <div className="search__wrapper flex justify-center">
    <form className=" search__form " onSubmit={(e)=>{formPrevent(e)}}>
        <input
            onChange={e=> setSearchValue(e.target.value)}
            value={searchValue}
            type="text"
            className=" w-100 h-10 m-0 block  flex-auto rounded  border  border-solid border-green-700 bg-red-50  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
            placeholder="&#128270; Найти пост"
            aria-label="Search"
            id="exampleFormControlInput2"
            aria-describedby="button-addon2" />
            </form>
    </div>
</div>
        </div>
            </div>
        
        {isLoading? <Loader/>: !data|| data.length== 0?
        <NonDataComponent
        message ='постов'
        modal ='post'
        />:  <div className="posts__postList ">
                     
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

        }
    </div>
)
            
}


        
    
