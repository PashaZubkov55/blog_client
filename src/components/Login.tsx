import { useForm } from "react-hook-form"
import { NavLink } from 'react-router-dom'
import { REGISTRATION_ROUTE } from "../router/Url"

export const Login = ()=>{
    const {
        register,
        formState:{errors},
        handleSubmit

    } = useForm()

    const isLogin = (data)=>{

        console.log(data.email, data.password)
    }
    return(
        <div className="login">
        <form action='form' className="login__form" onSubmit={handleSubmit(isLogin)}>
                <div className='form__wrapper'>
                <div className="login__title">
                    <h1>Войти</h1>
                </div>
                <div className="login__email">
                    <input type="text" className='login__input' placeholder='Вашь E-mail'
                    {...register('email',{
                        required:'Поле к заполнению',
                        pattern:{
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                            message: 'Введите правельный Email'
                        }
                    })}
                    />
                    <div className = 'input__error'>{errors?.email?.message}</div>
                </div>
                <div className="login__password">
                    <input type="password" className='login__input' placeholder='Вашь пароль'
                    {...register('password',{
                        required:'Поле к заполнению',
                        minLength:{
                            value: 6,
                            message: 'Пароль меньше 6 символов!'
                        }
                    })}
                    />
                    <div className='input__error'>{errors?.password?.message}</div>
                </div>
                <div className="form__button">
                    <button   type='Submit' className="login__success">
                        Войти
                    </button>
                </div>
                <div className="form__message">Нет акаунта ?<NavLink to={REGISTRATION_ROUTE}> Завести акаунт</NavLink> </div>
            </div>
            
        </form>
      </div>
    )
}