import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../store/Auth/AuthSlice";
import { useNavigate, useParams } from "react-router";
import { HOME_ROUTE } from "../router/Url";
import { useForm } from "react-hook-form";
export const DeletePostComponent = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const modalClose = (event, status:any)=>{
    dispatch(setModal(status))
    
    }
    
    const {id} = useParams()
    

      
     
      
     
      

     const Deletepost = async ()=>{
       //console.log(data.file)
       console.log('file -',data.file[0])
        try { 

         
          navigate(HOME_ROUTE)
          
        } catch (error) {
          console.log(error);
          
        }
         
        
        
    
        
      } 
       return(
        <div className="modal"  onClick={(e)=>{modalClose(e, false)}}>
        <div  className=" overflow-y-auto bg-green-50    overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center  items-center h-full w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="modal__shawow  relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
         
                  
                  <form className="modal_body relative px-20 py-5 " enctype="multipart/form-data" onSubmit={Deletepost}  onClick={(e)=>{e.stopPropagation()}}>
                  <svg className="w-3 h-3 absolute right-5 top-5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"  onClick={()=>{modalClose(false)}} >
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                     <div className=" text-lg font-semibold modal__title flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                      Вы действительно хотите удалить пост ?
                     </div>
                     
                     <div className="modal__sucsess mt-2">
                     <button  type="submit"  className="  cursor-pointer  text-white inline-flex w-full justify-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-red-800">
                     Удалить пост
                  </button>
                  <div className="detail_button mt-2">
                <button type='button'  onClick={(e)=>{modalClose(e, false)}} className=" cursor-pointer mb-2 block cursor-pointer  bg-green-700 w-full rounded  text-white px-6 pb-2 pt-2.5 text-xs hover:bg-green-800  font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">
                    Оставить
                    </button>
                </div>
                     </div>
                    
                    
                   
                  </form>
                  </div>
                  </div>
                  </div>
                  </div>
       )
    }

