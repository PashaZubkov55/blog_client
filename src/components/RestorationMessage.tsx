


export  const RestorationMessage = ()=>{
    
    const email = localStorage.getItem('email')
    return(
        <div className="restorationMessage">
            <div className="restorationMessage__wrapper max-w-sm mx-auto mt-40 shadow-2xl p-5">
            <div className=" restorationMessage__text mb-5">
                <span>перейдите на почту <strong>{email}</strong> для востоновление аккаунта !</span>
                </div>
            </div>
        </div>
    )
} 




