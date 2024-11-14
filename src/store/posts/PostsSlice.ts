import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
       
    }),
    keepUnusedDataFor: 10,
    endpoints: (builder:any) => ({
       getPosts: builder.query({
        query: ()=> 'posts',
        

       }),
       getPost: builder.query({
        query: (id:string)=>  `posts/${id}`,
       

       
       })

    })

})

export const {useGetPostsQuery,useGetPostQuery} = postsApi
