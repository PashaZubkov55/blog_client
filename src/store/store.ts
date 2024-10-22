import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './Auth/AuthSlice'
import { postsApi } from './posts/PostsSlice'



export const store = configureStore({
  reducer: {
   auth:AuthSlice,
   [postsApi.reducerPath]: postsApi.reducer 
  },


  middleware: (getDefaultMiddleware:any) =>
getDefaultMiddleware().concat(postsApi.middleware),

})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch