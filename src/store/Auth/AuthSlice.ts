import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { jwtDecode } from 'jwt-decode'
//import { Login } from '../../components/Login'

interface AutchState{
  isAuth: boolean,
  modal: string| boolean,
  statusMessage: boolean|string,
  textMessage: string,
  colorMessage: string,
  user: boolean
}
interface User{
  id: number,
  email: string,
  password:string
  token:string| undefined
}

type resetPasswordArgs = {
  token:string
  body:FormData
}
interface AuthResponse {
  token: string;
  id: string;
}


const initialState: AutchState= {
  isAuth: false,
  modal: '',
  statusMessage:true,
  textMessage: '',
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
    
    setModal(state, action: PayloadAction<string|boolean>){
      state.modal = action.payload
    }, 
    setStatusMessage(state, action: PayloadAction<boolean|string>){
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
       registration: builder.mutation<User, any>({
        query: (body)=>({
          url: 'user/registration',
          method: 'POST',
          body,
        }),
        transformResponse: response=>{
          return jwtDecode((response as { token: string }).token);
          
            
        }
       }),
       LogIn: builder.mutation<User, FormData>({
        query: credentials =>({
          url: 'user/login',
          method: 'POST',
          body: credentials
        }),
        transformResponse: (response:AuthResponse)=>{
          localStorage.setItem('token', response.token)
          localStorage.setItem('userId',response.id)
          return jwtDecode(response.token);

          

            
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

        transformResponse: (response: AuthResponse)=>{
          localStorage.setItem('userId',response.token)
          return jwtDecode(response.token);

            
        }
       }),
       deleteUser:builder.mutation<User,number|undefined>({
          query:(id)=>({
            url: `user/${id}`,
            method: 'DELETE'
          })
       }),
       forgot:builder.mutation<User, FormData>({
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