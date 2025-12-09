import { useEffect, useState } from "react"

export const useDebounce = (value:string, delay:number=600)=>{
    const [debounceValue, setDebounceValue] = useState('')
   useEffect(()=>{
    const timer = setTimeout(()=>{
        setDebounceValue(value)
        return ()=> clearTimeout(timer)
    },delay)
     
   },[value])
   return debounceValue
}