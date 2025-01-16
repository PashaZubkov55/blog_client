import React, { useEffect } from "react";
import { CreatePostComponent } from "../modals/CreatePostComponent";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../store/Auth/AuthSlice";
import { UpdateUserComponent } from "../modals/UpdateUserComponent";

export const SettingsPage = ()=>{
    const modalStatus = useSelector((state)=> state.auth.modal)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(modalStatus)
    },[modalStatus])
    const visibleModal =(status:any)=>{
        dispatch(setModal(status))
        console.log(modalStatus)
    }
    

   
    

    return(
       

        <>
                
        <div className="setting">
            <div className="setting__wrapper">
                <div className="setting__item">
                <button className="setting__btn"
                onClick={()=>{visibleModal('user')}}
                >
                    Редактировать  данные
                </button>
                </div>
                <div className="setting__item">
                <button className="setting__btn"
                onClick={()=>{visibleModal('post')}}
                >
                    Добавить пост
                </button>
                
                </div>
            </div>
        </div>
        { modalStatus.payload == 'post'? <CreatePostComponent/>: modalStatus.payload == 'user'? <UpdateUserComponent/>:false}
        </>
    )
}