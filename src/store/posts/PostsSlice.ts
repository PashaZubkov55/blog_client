import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Post{
    id: number,
    title: string,
    description: string,
    userId: number,
    img: string,
    
}


export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        //baseUrl: 'https://jsonplaceholder.typicode.com/',
        baseUrl: 'http://localhost:5000/api/'
       
    }),
    keepUnusedDataFor: 10,
    endpoints: (builder) => ({
       getPosts: builder.query <Post[], void>({
        query: ()=> 'post/',
        

       }),
       getPost: builder.query<Post, number>({
        query: (id:number)=>  `post/${id}`,
       

       
       }),
       getUserPosts:builder.query<Post[], number>({
        query: (userId:number)=>  `post/${userId}/userPosts`,
       }),
       addPost:builder.mutation({
        query: (body) => ({
            url: `post`,
            method: 'POST',
            body
          }),
       }),
       
       update:builder.mutation({
        query: ({ id, body }) => ({
            url: `/post/${id}`,
            method: 'PUT',
            body,
          }),
       }),
       delete:builder.mutation({
        query: ( id ) => ({
            url: `/post/${id}`,
            method: 'DELETE',
          }),
       })
       

       
       })

    })


//export const UseUpdateMutation = postsApi.useUpdateMutation();
export const {useGetPostsQuery,useGetPostQuery,useAddPostMutation,useDeleteMutation, useUpdateMutation, useGetUserPostsQuery} = postsApi
