import { configureStore } from '@reduxjs/toolkit'
import AuthSlice, { authApi } from './Auth/AuthSlice'
import { postsApi } from './posts/PostsSlice'
import { userInfoApi } from './userInfo/userInfoApi'



export const store = configureStore({
  reducer: {
   auth:AuthSlice,
   [postsApi.reducerPath]: postsApi.reducer ,
   [authApi.reducerPath]:authApi.reducer,
   [userInfoApi.reducerPath]: userInfoApi.reducer
  },

  middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware().concat(postsApi.middleware, authApi.middleware, userInfoApi.middleware )
    
    })
 




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch