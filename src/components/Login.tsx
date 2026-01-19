import { useForm } from "react-hook-form"
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router"
import { FORGOT_PASSWORD_ROUTE, HOME_ROUTE, REGISTRATION_ROUTE } from "../router/Url"
import {  setColorMessage, setStatusMessage, setTextMessage, setUser, useLogInMutation } from "../store/Auth/AuthSlice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../store/store"


export const Login = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const [logIn] = useLogInMutation()
    const {
        register,
        formState:{errors},
        handleSubmit

    } = useForm()

    const isLogin =  async (data)=>{
        const formData = new  FormData()
            formData.append('email', data.email)
            formData.append('password', data.password)
                try {
                    await logIn(formData).unwrap();
                    dispatch(setUser(true))
                    dispatch(setStatusMessage(true))
                    dispatch(setTextMessage('Вы вошли в акаунт'))
                    dispatch(setColorMessage('bg-green-500'))

                    navigate(HOME_ROUTE)
                  } catch (err) {
                    dispatch(setTextMessage('Пользователь не найден !'))
                    dispatch(setStatusMessage(true))
                    dispatch(setColorMessage('bg-red-700'))


                    console.log(err)
                    //alert('Пользователь не найден');

                  }

       
       
        console.log(data.email, data.password)

    }
    return(
        <div className="login">
        
<form className="max-w-sm mx-auto mt-40 shadow-2xl p-5" onSubmit={handleSubmit(isLogin)} >
<div className="mb-5">
    <h3 className="text-4xl font-semibold dark:text-white">Войти</h3>
    </div>

  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Введите E-mail</label>
    <input type="text"  
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="name@flowbite.com" 
    {...register('email',{
        required: 'Обизательно к заполнению',
        pattern:{
            value:/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
            message:'Не валидный E-mail'
        }
    })}
    />
    <div className="input__error text-red-600">{errors?.email?.message}</div>
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Введите Пароль</label>
    <input type="text"  
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  
    {...register('password',{
        required: 'Обизательно к заполнению',
        minLength:{
            value:6,
            message : 'Пароль меньше 6 символов!'

        }
    })}
  />
   <div className="input__error text-red-600">{errors?.password?.message}</div>

  </div>
  <div className="mb-5">
    <NavLink to={FORGOT_PASSWORD_ROUTE} className='text-green-600' > Забыли пароль ? </NavLink>
  </div>
  <button type='submit' className="cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Войти</button>
    <div className="form__submit mt-5">Нет акаунта ? <NavLink to={REGISTRATION_ROUTE} className='text-green-800'>Зарегистрируйтесь</NavLink></div>
</form>


      </div>
)
}
