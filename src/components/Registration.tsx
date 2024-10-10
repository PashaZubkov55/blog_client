export const Registration = ()=>{
    return(
        <div className="login">
        <form action='form' className="login__form">
                <div className='form__wrapper'>
                <div className="login__title">
                    <h1>Зарегистрироватся</h1>
                </div>
                <div className="login__email">
                    <input type="text" className='login__input' placeholder='Ваше Имя'/>
                </div>
                <div className="login__email">
                    <input type="text" className='login__input' placeholder='Вашь E-mail'/>
                </div>
                <div className="login__password">
                    <input type="text" className='login__input' placeholder='Вашь пароль'/>
                </div>
                <div className="form__button">
                    <button   type='button' className="login__success">
                        Регистрация
                    </button>
                </div>
            </div>
        </form>
      </div>
    )
}