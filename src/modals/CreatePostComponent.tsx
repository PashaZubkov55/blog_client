import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../store/Auth/AuthSlice";
import { useForm } from "react-hook-form";

export const CreatePostComponent = ()=>{
    const dispatch = useDispatch()
    const fileInputRef = useRef(null);
    const [image, setImage] = useState('')
    const {
        register,
        formState:{errors},
        handleSubmit

    } = useForm()

   const modalClose = (status:any)=>{
    dispatch(setModal(status))
    }
   /*  const handleClick = () => {
        // Вызываем метод click() у input элемента, чтобы открыть диалог выбора файла
        fileInputRef.current.click();
      };
       */
      const handleFileChange = (event) => {
        console.log('Выбранный файл:', event.target.files[0].name);
        setImage(URL.createObjectURL(event.target.files[0]))
           
      };
     
      const createPost=(data)=>{
      const  formData = new FormData()
        formData.append('postName',data.postName)
        formData.append('postText',data.postText)
        formData.append('file',  data.file[0])
    

        for(let [key, value] of formData.entries()){
            console.log(`${key}: ${value}`)
        }

      }
     
    return(
      <div className="modal">
      <div className=" overflow-y-auto bg-black opacity-75 overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-full w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="modal__shawow relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
       
                
                <form className="modal_body relative " onSubmit={handleSubmit(createPost)}>
                   <div className="modal__title flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    Добавить пост
                   </div>
                   <div className="modal__input">
                    <input type="text" placeholder="Название" className="input-text"
                    {...register('postName',{
                        required:'поле обизательно к заполнению'
                    })} />
                   </div>
                   <div className = 'input__error'>{errors?.postName?.message}</div>
                   <div className="modal__input">
                   <textarea className="input   modal__descriptinon" 
                    {...register('postText',{
                        required:'поле обизательно к заполнению'
                    })}
                   
                   ></textarea>
                   </div>
                   <div className = 'input__error'>{errors?.postText?.message}</div>
                   <div className="modal__files">
                   <input type="file" className="modal__file"
                    onChange={handleFileChange}
                    />
                    <div>
                    {image? <img 
                    src={image} 
                    alt="avatar" 
                    className="modal__img modal__img-post"
                    />:  <></>
                      }
                    </div>
                   </div>
                   <div className="modal__sucsess">
                    <button type="submit" className="button-success"> Создать</button>
                   </div>
                  
                  
                       
                </form>
                </div>
            </div>
            </div>
            </div>

    )
}