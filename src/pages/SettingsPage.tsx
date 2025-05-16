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
                <div className="details_button mt-20">
                <button 
                 onClick={()=>{visibleModal('user')}}
                type='button'   className="mb-2 block   bg-green-700 w-full rounded  text-white px-6 pb-2 pt-2.5 text-xs hover:bg-green-800  font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">
               Редактировать Профиль</button>
               
               <button 
                 onClick={()=>{visibleModal('post')}}
                type='button'  className="mb-2 block   bg-green-700 w-full rounded  text-white px-6 pb-2 pt-2.5 text-xs hover:bg-green-800  font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">Добавить нновый пост</button>
               
                <button 
                 onClick={()=>{visibleModal('user')}}
                type='button' className="mb-2 block   bg-red-700 w-full rounded  text-white px-6 pb-2 pt-2.5 text-xs hover:bg-red-800  font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">
                Удалить профиль</button>
                </div>
                
              
                </div>   
                
                
                </div>
            </div>
        
        { modalStatus.payload == 'post'? <CreatePostComponent/>: modalStatus.payload == 'user'? <UpdateUserComponent/>:false}
        </>
    )
}