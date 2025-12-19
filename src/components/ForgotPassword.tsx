import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router'
import { RESTORATION_MESSAGE_ROUTE } from '../router/Url'

export const ForgotPassword = ()=>{
    const navigate = useNavigate()
    const {
        register,
        formState:{errors},
        handleSubmit

    } = useForm()

   const  forgot =()=>{
        navigate(RESTORATION_MESSAGE_ROUTE)
   }

    return(
        <div className="login">
        
        <form className="max-w-sm mx-auto mt-40 shadow-2xl p-5" onSubmit={handleSubmit(forgot)} >
        <div className="mb-5">
            <h3 className="text-4xl font-semibold dark:text-white"> Востоновление</h3>
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
          <button type='submit' className="cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Войти</button>

    </form>
        
        
              </div>
    )
}
