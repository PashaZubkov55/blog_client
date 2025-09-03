import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


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
        })
        

       }),
})
})


// Action creators are generated for each case reducer function
export const {setStatus, setModal } = AuthSlice.actions
export const {useRegistrationMutation} = authApi
export default AuthSlice.reducer