import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setStatusMessage } from "../store/Auth/AuthSlice"
import { RootState } from "../store/store"

export const Message = ()=>{
    const statusMessage = useSelector((state:RootState)=>state.auth.statusMessage)
    const textMessage = useSelector((state:RootState)=>state.auth.textMessage)
    const colorMessage = useSelector((state:RootState)=>state.auth.colorMessage)


       const  dispatch = useDispatch()

    useEffect(()=>{
        
    const timer = setTimeout(()=>{
        console.log('66666')
        dispatch(setStatusMessage(false))
        console.log(statusMessage)
    },5000)
       return ()=>{clearTimeout(timer)}
    },[statusMessage])
    return(
        <div className={ `fixed flex  items-center  ${colorMessage} text-white text-sm font-bold  top-5 left-10 px-4 py-3`} role="alert">
   
    <p>{textMessage}</p> 
</div>
    )
}