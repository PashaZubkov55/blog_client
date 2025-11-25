import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { jwtDecode } from 'jwt-decode'
//import { Login } from '../../components/Login'


export const AuthSlice = createSlice({
  name: 'auth',
  initialState:{
    isAuth: false,
    modal: false,
  },
  reducers: {
    setStatus(state, auth){
       state.isAuth = auth
    },
    setModal(state, status){
      state.modal = status
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
          setStatus(true)
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
       })
})
})


// Action creators are generated for each case reducer function
export const {setStatus, setModal } = AuthSlice.actions
export const {useAuthQuery, useRegistrationMutation, useLogInMutation, useDeleteUserMutation} = authApi
export default AuthSlice.reducer