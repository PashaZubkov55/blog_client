import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../store/Auth/AuthSlice";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useGetPostQuery, useUpdateMutation } from "../store/posts/PostsSlice";
import { Loader } from "../components/Loader";
import { URL_SERVER } from "../router/Url";
export const UpdatePostComponent = ()=>{
    const [update] = useUpdateMutation()
    const dispatch = useDispatch()
    const fileInputRef = useRef(null);
    const [image, setImage] = useState('')
    const [imageVisible, setImageVisible] = useState('')

   const [post,setPost]= useState({})
    const {
        register,
        formState:{errors},
        setValue,
        handleSubmit
        

    } = useForm()

   const modalClose = (event, status:any)=>{
   
    dispatch(setModal(status))
    
    }
    
    const {id} = useParams()
    const {data = [], isLoading} =  useGetPostQuery(id,{
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
    })

      
      const handleFileChange = (event) => {
        console.log('Выбранный файл:', event.target.files[0].name);
        const selectedFile = event.target.files[0];
       setImage(selectedFile)
        console.log('file',selectedFile)
        console.log('data',data.img)
        setImageVisible((URL.createObjectURL(event.target.files[0])))
        
      
           
      };
      
      useEffect(()=>{
        setValue('title',data.title)
        setValue('description',data.description)
        setValue('img',data.img)



      },[])
      

     const updatePost = async ()=>{
       //console.log(data.file)
       
         
          const  formData = new FormData()
        formData.append('title',data.title)
        formData.append('description',data.description)
        formData.append('img',  image)
        formData.append('userId', data.id )
        console.log(data.img)
        for(let value of formData.entries()){
          console.log(value)
        }
          await update({id,formData})
        
        
    
        
      }
         

      
       
       if (isLoading) {
            return <Loader/>
       }return(
        <div className="modal"  onClick={(e)=>{modalClose(e, false)}}>
        <div  className=" overflow-y-auto bg-green-50    overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center  items-center h-full w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="modal__shawow  relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
         
                  
                  <form className="modal_body relative px-20 py-5 " onSubmit={handleSubmit(updatePost)}  onClick={(e)=>{e.stopPropagation()}}>
                  <svg className="w-3 h-3 absolute right-5 top-5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"  onClick={()=>{modalClose(false)}} >
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                     <div className=" text-lg font-semibold modal__title flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                      Изменить  пост
                     </div>
                     <div className="modal__input mt-2">
                     <input 
                     type="text"  id="text" 
                     
                     {...register('id',{
                      required: 'Поля обизательное'
                     })}
                     onChange={(e)=>setValue('id', e.target.value)}
                     />
                     </div>
                     
                     <div className="modal__input mt-2">
                     <input 
                     type="text"  id="text" 
                     
                     {...register('title',{
                      required: 'Поля обизательное'
                     })}
                     onChange={(e)=>setValue('title', e.target.value)}
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Название"  />
                     </div>
                     <div className = 'input__error mt-2 text-red-600'>{errors?.title?.message}</div>
                     <div className="modal__input mt-2">
                     <textarea id="description" rows="4" 
                      {...register('description',{
                        required: 'Поля обизательное'
                       })}
                       onChange={(e)=>setValue('description', e.target.value)}
                     class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Текст поста"></textarea>                    
                     </div>
                     <div className = 'input__error mt-2 text-red-600' text-red-600>{errors?.description?.message}</div>
                     
                     <div className=" person__awatar flex justify-center">
                      {image? 
                       <div className=" h-auto max-w-lg  my-3  ">
                      <img className=" h-auto max-w-lg rounded-lg" src={imageVisible} alt='Woman looking front'/>
                      </div>
                      :
                      <div className=" h-auto max-w-lg  my-3  ">
                      <img className=" h-auto max-w-lg rounded-lg" src={URL_SERVER+data.img} alt='Woman looking front'/>
                      </div>
                        }
                       
                      </div>
                     <div className="modal__files ">
                     <input type="file" 
                   {...register('img',{
                    required:'файл не выбран'
                   })}
                     className=" modal__file  flex flex-column mt-4 text-white inline-flex w-full justify-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
                    
                     
                    onChange={handleFileChange}
                    />
                      
                      
                      <div className = 'input__error mt-2 text-red-600'>{errors?.img?.message}</div>
                      
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

