import {useForm} from 'react-hook-form'
import {  useNavigate, useParams } from 'react-router'
import { setColorMessage, setStatusMessage, setTextMessage, useResetPasswordMutation } from '../store/Auth/AuthSlice'
import { useDispatch } from 'react-redux'
import { LOGUIN_ROUTE } from '../router/Url'
import { AppDispatch } from '../store/store'
export const RestorationPasswordPage = ()=>{
    const [resetPassword] = useResetPasswordMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const {token} = useParams()
    type TFormData= {
        password: string,
        repeatPassword: string
    }
    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm()
   
   
    const restorationAccount = async (data:TFormData)=>{
       
       
           
          
           if (data.password !== data.repeatPassword ) {
            dispatch(setTextMessage('Пароль не совподает'))
            dispatch(setStatusMessage(true))
            dispatch(setColorMessage('bg-red-700')) 
           } else{
            try {
                const formData = new FormData()
                formData.append('newPassword', data.password)
                await resetPassword({token, body: formData}).unwrap()
                dispatch(setStatusMessage(true))
                dispatch(setTextMessage('Акаут востановлен !'))
                dispatch(setColorMessage('bg-green-500'))
                navigate(LOGUIN_ROUTE)
            } catch (error) {
                console.log(error)
            }
          
           }
       

    }
    return (
        <div className="restoration">
        
        <form className="max-w-sm mx-auto mt-40 shadow-2xl p-5" onSubmit={handleSubmit(restorationAccount)} >
        <div className="mb-5">
            <h3 className="text-4xl font-semibold dark:text-white">Изменение пароля </h3>
            </div>
        
          <div className="mb-5">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Введите новый пароль</label>
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
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Повторите Пароль</label>
            <input type="text"  
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  
            {...register('repeatPassword',{
                required: 'Обизательно к заполнению',
                minLength:{
                    value:6,
                    message : 'Пароль меньше 6 символов!'
        
                }
            })}
          />
           <div className="input__error text-red-600">{errors?.repeatPassword?.message}</div>
        
          </div>
          <div className="flex items-start mb-5">
          </div>
          <button type='submit' className="cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Востановить</button>

        </form>
        
        
              </div>
    )
}