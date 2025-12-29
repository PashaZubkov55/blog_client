import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { jwtDecode } from 'jwt-decode'
//import { Login } from '../../components/Login'


export const AuthSlice = createSlice({
  name: 'auth',
  initialState:{
    isAuth: false,
    modal: false,
    statusMessage:true,
    textMessage: 'message',
    colorMessage: '',
    user: ''
  },
  reducers: {
    setAuth(state, payload){
      state.isAuth = payload
    },
    setUser(state, status){
      state.user = status
    },
    
    setModal(state, status){
      state.modal = status
    }, 
    setStatusMessage(state, status){
      state.statusMessage = status
    },
    setTextMessage(state, status){
      state.textMessage = status
    },
    setColorMessage(state, status){
      state.colorMessage = status
    }
  },
})

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:5000/api/'
  }),
    endpoints: (builder) => ({
       registration: builder.mutation({
        query: (body)=>({
          url: 'user/registration',
          method: 'POST',
          body,
        }),
        transformResponse: response=>{
          return jwtDecode(response.token)
          
            
        }
       }),
       LogIn: builder.mutation({
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
     
       Auth:builder.query({
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
       deleteUser:builder.mutation({
          query:(id:number)=>({
            url: `user/${id}`,
            method: 'DELETE'
          })
       }),
       forgot:builder.mutation({
        query:(body)=>({
          url: 'user/forgot-password',
           method: 'POST',
            body
        })
       }),
       resetPassword:builder.mutation({
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