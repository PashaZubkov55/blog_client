import { useDispatch } from "react-redux"
import { setColorMessage, setModal, setStatusMessage, setTextMessage, setUser, useDeleteUserMutation } from "../store/Auth/AuthSlice"
import { useNavigate } from "react-router"
import { useGetInfoQuery } from "../store/userInfo/userInfoApi"
import { useGetPostsQuery, useGetUserPostsQuery } from "../store/posts/PostsSlice"
import { HOME_ROUTE } from "../router/Url"
import { AppDispatch } from "../store/store"

export  const  DeleteUserComponent = ()=>{
    const [Userdelete] = useDeleteUserMutation()
    const id = Number(localStorage.getItem('userId'))
    const userId = Number(localStorage.getItem('userId'))

    const dispatch = useDispatch<AppDispatch>()
    const userInfo =useGetInfoQuery(userId)
    const posts = useGetPostsQuery()
    const userPosts = useGetUserPostsQuery(userId)
    const navigate = useNavigate()
  
    const modalClose = ( status:any)=>{
        dispatch(setModal(status))
       
        }
       
        const deleteUser = async (e)=>{
            try {
               
                e.preventDefault()
                await Userdelete(id)
                await posts.refetch().unwrap()
                await userInfo.refetch().unwrap()
                await userPosts.refetch().unwrap()
                dispatch(setStatusMessage(true))
                dispatch(setTextMessage('Аккаунт Удален!'))
                dispatch(setColorMessage('bg-green-500'))
                modalClose(false)
                dispatch(setUser(false))
                localStorage.clear()
                navigate(HOME_ROUTE)
            } catch (error) {
                console.log(error)
                
            }
          
         }
    return (
        <div className="modal"  onClick={(e)=>{modalClose( false)}}>
        <div  className=" overflow-y-auto bg-green-50    overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center  items-center h-full w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="modal__shawow  relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
         
                  
                  <form className="modal_body relative px-20 py-5 " enctype="multipart/form-data" onSubmit={(e)=>{deleteUser(e)}}  onClick={(e)=>{e.stopPropagation()}}>
                  <svg className="w-3 h-3 absolute right-5 top-5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"  onClick={()=>{modalClose(false)}} >
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                     <div className=" text-lg font-semibold modal__title flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                      Вы действительно хотите удалить акаунт ?
                      Вся информация включая посты будет тоже удалена !
                     </div>
                     
                     <div className="modal__sucsess mt-2">
                     <button  type="submit" className="  cursor-pointer  text-white inline-flex w-full justify-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-red-800">
                     Удалить акаунт
                  </button>
                  </div>
                  
                  <div className="detail_button mt-2">
                <button type='button'  onClick={()=>{modalClose(false)}} className=" cursor-pointer mb-2 block cursor-pointer  bg-green-700 w-full rounded  text-white px-6 pb-2 pt-2.5 text-xs hover:bg-green-800  font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">
                    Оставить
                    </button>
                </div>
                </form>
                     </div>
                    
                    
                   
                 
                  </div>
                  </div>
                  </div>
                 
    
)
}