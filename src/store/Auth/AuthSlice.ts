import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
  name: 'auth',
  initialState:{
    isAuth: false
  },
  reducers: {
    status(state){
        return state.isAuth 
    }
  },
})

// Action creators are generated for each case reducer function
export const {status } = AuthSlice.actions

export default AuthSlice.reducer