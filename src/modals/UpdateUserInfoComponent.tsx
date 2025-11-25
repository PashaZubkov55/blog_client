import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { setModal } from "../store/Auth/AuthSlice"
import { useDispatch } from "react-redux"
import { URL_SERVER } from "../router/Url"
import { useGetInfoQuery, useUpdateInfoMutation } from "../store/userInfo/userInfoApi"
export const UpdateUserInfoComponent =({name, img })=>{
    const dispatch = useDispatch()
    const userId = Number( localStorage.getItem('userId'))
    const [updateInfo] = useUpdateInfoMutation()
    
    const [imageVisible, setImageVisible] = useState('')
   
    const {refetch} = useGetInfoQuery(userId)
    const {
        register,
        formState:{errors},
        setValue,
        handleSubmit
        

    } = useForm()
    const modalClose = ( status:any)=>{
   
        dispatch(setModal(status))
        
        }
    useEffect(()=>{
        setValue('name', name)
        setValue('img', img)
        console.log('user-id-- ', userId)

    },[])
    const handleFileChange =(event)=>{
      console.log('выбранный файл',event.target.files[0].name)
      setImageVisible(URL.createObjectURL(event.target.files[0]))
    }

const updateUserInfo = async(data)=>{
   
    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('img', data.file[0])
      formData.append('userId',userId)
      console.log('userId -',userId)
      await updateInfo({userId, body:formData})
      await refetch()
      modalClose(false)
     
    } catch (error) {
      console.log(error)
    }
   




}
    return(
        <div className="modal"  onClick={(e)=>{modalClose( false)}}>
        <div  className=" overflow-y-auto bg-green-50    overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center  items-center h-full w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="modal__shawow  relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
         
                  
                  <form className="modal_body relative px-20 py-5 " enctype="multipart/form-data" onSubmit={handleSubmit(updateUserInfo)}  onClick={(e)=>{e.stopPropagation()}}>
                  <svg className="w-3 h-3 absolute right-5 top-5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"  onClick={()=>{modalClose(false)}} >
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                     <div className=" text-lg font-semibold modal__title flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                      Изменить данные
                     </div>
                     
                     <div className="modal__input mt-2">
                     <input 
                     type="text"  id="text" 
                     
                     {...register('name',{
                      required: 'Поля обизательное'
                     })}
                     onChange={(e)=>setValue('name', e.target.value)}
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={name}  />
                     </div>
                     <div className = 'input__error mt-2 text-red-600'>{errors?.name?.message}</div>
                     
                    
                     
                     <div className=" person__awatar flex justify-center">
                      {imageVisible? 
                       <div className=" h-auto max-w-lg  my-3  ">
                      <img className=" w-40 h-40 rounded-full border-3 border-green-400" src={imageVisible} alt='Woman looking front'/>
                      </div>
                      :
                      <div className=" h-auto max-w-lg  my-3  ">
                      <img className=" w-40 h-40 rounded-full border-3 border-green-400" src={URL_SERVER+img} alt='Woman looking front'/>
                      </div>
                        }
                       
                      </div>
                     <div className="modal__files ">
                     <input type="file" 
                   {...register('file',{
                    required:'файл не выбран'
                   })}
                     className=" modal__file  flex flex-column mt-4 text-white inline-flex w-full justify-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
                    
                     
                    onChange={handleFileChange}
                    />
                      
                      
                      <div className = 'input__error mt-2 text-red-600'>{errors?.file?.message}</div>
                      
                     </div>
                    
                     <div className="modal__sucsess mt-2">
                     <button  type="submit"  className="text-white inline-flex w-full justify-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                     Изменить пост
                  </button>
                     </div>
                    
                    
                   
                  </form>
                  </div>
                  </div>
                  </div>
                  </div>
    )
}