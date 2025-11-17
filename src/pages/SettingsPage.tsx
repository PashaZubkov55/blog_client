import React, { useEffect } from "react";
import { CreatePostComponent } from "../modals/CreatePostComponent";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../store/Auth/AuthSlice";
import { CreateUserInfo } from "../modals/CreateUserInfoComponent";
import { useGetInfoQuery } from "../store/userInfo/userInfoApi";
import { UpdateUserInfoComponent } from "../modals/UpdateUserInfoComponent";
export const SettingsPage = ()=>{
    const modalStatus = useSelector((state)=> state.auth.modal)
    const dispatch = useDispatch()
    const id = Number(localStorage.getItem('userId'))
    const {data= []} = useGetInfoQuery(id)
    useEffect(()=>{
        console.log('data-',data)
        console.log(modalStatus)
    },[modalStatus])
    const visibleModal =(status:any)=>{
        dispatch(setModal(status))
        console.log(modalStatus)
    }
    

   
    

    return(
       

        
                
        <div className="setting">
            <div className="setting__wrapper flex flex-col justify-center items-center  mb-25 mt-10">
                <div className="setting__item">
                <div className="details_button mt-20">
                <button 
                 onClick={()=>{visibleModal('createUnfo')}}
                type='button'   className=" cursor-pointer mb-2 block   bg-green-700 w-full rounded  text-white px-6 pb-2 pt-2.5 text-xs hover:bg-green-800  font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">
               Добавить о себе</button>
               
                <button 
                 onClick={()=>{visibleModal('updateInfo')}}
                type='button'   className=" cursor-pointer mb-2 block   bg-green-700 w-full rounded  text-white px-6 pb-2 pt-2.5 text-xs hover:bg-green-800  font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">
               Редактировать Профиль</button>
               
               <button 
                 onClick={()=>{visibleModal('post')}}
                type='button'  className="mb-2 block  cursor-pointer bg-green-700 w-full rounded  text-white px-6 pb-2 pt-2.5 text-xs hover:bg-green-800  font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">Добавить новый пост</button>
               
                <button 
                 onClick={()=>{visibleModal('delete')}}
                type='button' className="mb-2 block  cursor-pointer  bg-red-700 w-full rounded  text-white px-6 pb-2 pt-2.5 text-xs hover:bg-red-800  font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">
                Удалить профиль</button>
                </div>
                
              
                </div>   
                
                
                </div>
               { modalStatus.payload == 'post'?
            <CreatePostComponent/> 
            :modalStatus.payload == 'createUnfo'? <CreateUserInfo/>
            : modalStatus.payload == 'updateInfo'? <UpdateUserInfoComponent
                name = {data.name}
                img = {data.img}

            />:false
            }
            </div>
        
       
    )
}