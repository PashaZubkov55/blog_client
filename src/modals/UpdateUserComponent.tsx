import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../store/Auth/AuthSlice";
import { useForm } from "react-hook-form";

export const UpdateUserComponent = ()=>{
    const dispatch = useDispatch()
    const fileInputRef = useRef(null);
    const [image, setImage] = useState('')
   
    const {
        register,
        formState:{errors},
        handleSubmit
        

    } = useForm()

   const modalClose = (event, status:any)=>{
   
    dispatch(setModal(status))
    
    }
    
      const handleFileChange = (event) => {
        console.log('Выбранный файл:', event.target.files[0].name);
        const selectedFile = event.target.files[0];
        setImage((URL.createObjectURL(event.target.files[0])))
        
      
           
      };
     
      const createPost=(data)=>{
       //console.log(data.file)
        
      const  formData = new FormData()
        formData.append('postTitle',data.PostTitle)
        formData.append('postText',data.PostText)
        formData.append('file',  data.file)
    

        for(let [key, value] of formData.entries()){
           console.log(`${key}: ${value}`)
        }

      }
     
    return(
      

           <div></div>

    )
}