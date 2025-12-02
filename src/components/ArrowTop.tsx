import { useEffect, useState } from "react"

 export const ArrowTop=()=>{
    const [visible, setVisible] = useState(false)
    const visibleArrow=()=>{
        if (window.scrollY > 200) {
            setVisible(true)
           
        } else{
            setVisible(false)
        }

    }
    const arrowTogle =()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }
    useEffect(()=>{
        document.addEventListener('scroll', visibleArrow)
    },[window.scrollY])
    return(
        <div className="arrow ">
        {visible?  <div className="arrow__top bg-green-700 " onClick={arrowTogle}></div>:false}
   
</div>
            

        
       
    )
}