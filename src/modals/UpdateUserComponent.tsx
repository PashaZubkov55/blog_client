import React from "react"
import { useDispatch } from "react-redux"
import { setModal } from "../store/Auth/AuthSlice"
import { useForm } from "react-hook-form"
export const UpdateUserComponent =()=>{

    const dispatch = useDispatch()
    const modalClose= (status:any)=>{
        dispatch(setModal(status))
    }
    const {
        register,
        formState:{errors},
        handleSubmit,
    } = useForm()
   const updateUser = (data)=>{
        console.log(data)
    }


    return(
            <div className="modal">
                <div className="modal__container">
                    <form className="modal__body" onSubmit={handleSubmit(updateUser)}>
                        <div className="modal__title">
                        <span className="modal__close" onClick={()=>{modalClose(false)}}></span>
                        </div>
                        <div className="modal__title">
                            Изменить свои данные
                        </div>
                        <div className="modal__input">
                            <input 
                            type="text" 
                            placeholder="Павел"
                            className="input-text" 
                           {...register('text',{
                            required: 'Поля обизательное'
                           })}
                            />
                        </div>
                        <div className = 'input__error'>{errors?.text?.message}</div>
                        <img 
                        src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" 
                        alt="avatar" 
                        className="modal__img"
                        />
                        <div className="modal__input">
                        <input 
                        type="file" 
                        className="input--file" 
                         {...register('file')}
                        
                        />
                        </div>
                    <div className="modal__sucsess">
                    <button 
                    type="submit" 
                    className="button-success"
                    > Создать</button>
                   </div>
                        
                    </form>
                </div>
            </div>
    )
}