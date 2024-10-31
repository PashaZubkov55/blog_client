import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
  name: 'auth',
  initialState:{
    isAuth: false
  },
  reducers: {
    setStatus(state, auth){
       state.isAuth = auth
    }
  },
})

// Action creators are generated for each case reducer function
export const {setStatus } = AuthSlice.actions

export default AuthSlice.reducer