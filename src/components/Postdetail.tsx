import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGetPostQuery } from "../store/posts/PostsSlice"
import { Loader } from "./Loader"


export const Postdetail = ()=>{
    const {id} = useParams()
    const {data, isLoading} =  useGetPostQuery(id,{
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
    })
    useEffect(()=>{
        console.log(id, data)
    },[])

        if (isLoading) {
            return(
                <Loader/>
            )
            
        }
        return(
        
        <div className=" flex justify-center ">    
        <div className="detail  px-5 py-4 ">
        <div className="detail__header ">
        <img className= 'object-cover  bg-center h-100 w-400' src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" alt="detail"/>
          </div>      
                <div className="detail__title ">
                    <h1 className='title   text-5xl font-extrabold dark:text-white '>{data.title}</h1>
                    </div>
                <div className="detail__description text-xl py-5">{data.body}</div>
                <div className="detail_buttons ">
                <div className="details_button">
                <button type='button' className="mb-2 block   bg-green-700 w-full rounded  text-white px-6 pb-2 pt-2.5 text-xs hover:bg-green-800  font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">Редактировать</button>
                </div>
                
                <button type="button" className="mb-2 block   bg-red-700 w-full rounded  text-white px-6 pb-2 pt-2.5 text-xs hover:bg-red-800  font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">Удалить</button>
                </div>

     </div>
     </div>
        )
}

    
    
    
       

    
    
