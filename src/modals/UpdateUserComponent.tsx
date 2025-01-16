import React from "react"
import { useDispatch } from "react-redux"
import { setModal } from "../store/Auth/AuthSlice"
export const UpdateUserComponent =()=>{

    const dispatch = useDispatch()
    const modalClose= (status:any)=>{
        dispatch(setModal(status))
    }


    return(
            <div className="modal">
                <div className="modal__container">
                    <form className="modal__body">
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
                            className="input-text" />
                        </div>
                        <img 
                        src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" 
                        alt="avatar" 
                        className="modal__img"
                        />
                        <div className="modal__input">
                        <input type="file" className="input--file" />
                        </div>
                    <div className="modal__sucsess">
                    <button type="button" className="button-success"> Создать</button>
                   </div>
                        
                    </form>
                </div>
            </div>
    )
}