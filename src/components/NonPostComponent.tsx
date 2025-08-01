import { useEffect,  } from "react"
import { useParams } from "react-router-dom"
import { useGetPostQuery } from "../store/posts/PostsSlice"
import { Loader } from "./Loader"
import { useDispatch, useSelector } from "react-redux"
import { setModal } from "../store/Auth/AuthSlice"
import { CreatePostComponent } from "../modals/CreatePostComponent"



export const NonPostComponent = ()=>{
    const modalStatus = useSelector((state)=> state.auth.modal)
    const {id} = useParams()
    const {data, isLoading} =  useGetPostQuery(id,{
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
    })
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(id, data)

    },[])

        if (isLoading) {
            return(
                <Loader/>
                
            )

            
        }
        return(
            <div className=" flex justify-center   ">    
            <div className="detail bg-white  overflow-hidden  max-w-200 mb-18 pb-6 mt-8 bg-white border border-gray-200 rounded-lg shadow-sm    ">
            
                    <div className="detail__title px-8 ">
                        <h1 className='title   text-3xl font-extrabold dark:text-white px8 '>На сайте еще нет постов</h1>
                        </div>
                   
                    <div className="details_button">
                    <button type='button' onClick={()=>{dispatch(setModal('post'))}} className="mb-2 mt-2 block cursor-pointer  bg-green-700 w-full rounded  text-white px-6 pb-2 pt-2.5 text-xs hover:bg-green-800  font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">Добавить пост ?</button>
                    </div>
                    </div>
                    { modalStatus.payload == 'post'? <CreatePostComponent/>:false}

         </div>
        )
}

    
    
    
       