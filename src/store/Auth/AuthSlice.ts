import { createSlice } from '@reduxjs/toolkit'

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

// Action creators are generated for each case reducer function
export const {setStatus, setModal } = AuthSlice.actions

export default AuthSlice.reducer