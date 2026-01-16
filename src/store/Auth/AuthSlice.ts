import { createSlice, isAction, PayloadAction } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { jwtDecode } from 'jwt-decode'
//import { Login } from '../../components/Login'

interface AutchState{
  isAuth: boolean,
  modal: string,
  statusMessage: boolean,
  textMessage: string,
  colorMessage: string,
  user: boolean
}
interface User{
  id: number
  email: string,
  password: string
}
type userArgs = Required<User>
type deleteUserArgs = Pick<User,'id'>
type forgotPasswordArgs = Pick<User,'email'>
type resetPasswordArgs = {
  token:string
  body:User
}

const initialState: AutchState= {
  isAuth: false,
  modal: '',
  statusMessage:true,
  textMessage: 'message',
  colorMessage: '',
  user: false
}
export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>){
      state.isAuth = action.payload
    },
    setUser(state, action: PayloadAction<boolean>){
      state.user = action.payload
    },
    
    setModal(state, action: PayloadAction<string>){
      state.modal = action.payload
    }, 
    setStatusMessage(state, action: PayloadAction<boolean>){
      state.statusMessage = action.payload
    },
    setTextMessage(state, action: PayloadAction<string>){
      state.textMessage = action.payload
    },
    setColorMessage(state, action: PayloadAction<string>){
      state.colorMessage = action.payload
    }
  },
})

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:5000/api/'
  }),
    endpoints: (builder) => ({
       registration: builder.mutation<User, userArgs>({
        query: (body)=>({
          url: 'user/registration',
          method: 'POST',
          body,
        }),
        transformResponse: response=>{
          return jwtDecode(response.token)
          
            
        }
       }),
       LogIn: builder.mutation<User, userArgs>({
        query: credentials =>({
          url: 'user/login',
          method: 'POST',
          body: credentials
        }),
        transformResponse: response=>{
          localStorage.setItem('token', response.token)
          localStorage.setItem('userId', response.id)

          return jwtDecode(response.token)
            
        }
       }),
     
       Auth:builder.query<User, void>({
        query: ()=>({
          url: 'user/auth',
          method: 'GET',
          headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }),

        transformResponse: response=>{
          localStorage.setItem('token', response.token)
          return jwtDecode(response.token)
            
        }
       }),
       deleteUser:builder.mutation<User,deleteUserArgs>({
          query:(id)=>({
            url: `user/${id}`,
            method: 'DELETE'
          })
       }),
       forgot:builder.mutation<User, forgotPasswordArgs>({
        query:(body)=>({
          url: 'user/forgot-password',
           method: 'POST',
            body
        })
       }),
       resetPassword:builder.mutation<User,resetPasswordArgs>({
          query:({token,body}) =>({
            url: `user/reset-password/${token}`,
            method: 'PUT',
            body,
          })
       })
})
})


// Action creators are generated for each case reducer function
export const {setAuth,  setUser, setModal, setStatusMessage, setTextMessage, setColorMessage } = AuthSlice.actions
export const {useAuthQuery, useRegistrationMutation, useLogInMutation, useDeleteUserMutation, useResetPasswordMutation, useForgotMutation} = authApi
export default AuthSlice.reducer