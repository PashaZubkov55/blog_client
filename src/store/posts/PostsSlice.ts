import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Post{
    id: number,
    title: string,
    description: string,
    userId: number,
    img: string
}


export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
       
    }),
    keepUnusedDataFor: 10,
    endpoints: (builder) => ({
       getPosts: builder.query <Post[], void>({
        query: ()=> 'posts',
        

       }),
       getPost: builder.query<Post, number>({
        query: (id:number)=>  `posts/${id}`,
       

       
       })

    })

})

export const {useGetPostsQuery,useGetPostQuery} = postsApi
