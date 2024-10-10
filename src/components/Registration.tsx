import {useForm} from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { LOGUIN_ROUTE } from '../router/Url'

export const Registration = ()=>{
    const {
        register,
        formState:{errors},
        handleSubmit,

    } = useForm()
    const isRegistration=(data)=>{
        console.log(data)
    }
    return(
        <div className="login">
        <form action='form' className="login__form" onSubmit={handleSubmit(isRegistration)}>
                <div className='form__wrapper'>
                <div className="login__title">
                    <h1>Зарегистрироватся</h1>
                </div>
                <div className="login__email">
                    <input type="text" className='login__input' placeholder='Ваше Имя'
                    {...register('name',{
                        required:'Поле к заполнению',
                    })}
                    
                    />
                     <div className = 'input__error'>{errors?.name?.message}</div>
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
                    <input type="text" className='login__input' placeholder='Вашь пароль'
                    {...register('password',{
                        required:'Поле к заполнению',
                        minLength:{
                            value: 6,
                            message: 'Пароль меньше 6 символов!'
                        }
                    })}
                    />
                    <div className = 'input__error'>{errors?.password?.message}</div>
                </div>
                <div className="form__button">
                    <button   type='submit' className="login__success">
                        Регистрация
                    </button>
                </div>
                <div className="form__message">Есть акаунт ? <NavLink to={LOGUIN_ROUTE}> Войти</NavLink></div>
                </div>
                
                </form>
      </div>
     
    )
}