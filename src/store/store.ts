import { configureStore } from '@reduxjs/toolkit'
import AuthSlice, { authApi } from './Auth/AuthSlice'
import { postsApi } from './posts/PostsSlice'



export const store = configureStore({
  reducer: {
   auth:AuthSlice,
   [postsApi.reducerPath]: postsApi.reducer ,
   [authApi.reducerPath]:postsApi.reducer
  },


  middleware: (getDefaultMiddleware:any) =>
getDefaultMiddleware().concat(postsApi.middleware),

})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch