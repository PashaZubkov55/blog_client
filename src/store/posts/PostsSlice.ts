import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Post{
    id: number,
    title: string,
    description: string,
    userId: number,
    img: string,
    
}
// типы 


type deletePostArgs = Pick<Post,'id'>

type updatePostArgs ={
   id: string|undefined
    formData: FormData
}
type getPostsArgs = Required<Post>
export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        //baseUrl: 'https://jsonplaceholder.typicode.com/',
        baseUrl: 'http://localhost:5000/api/'
       
    }),
    keepUnusedDataFor: 10,
    endpoints: (builder) => ({
       getPosts: builder.query <Post[], getPostsArgs>({
        
        query: (title)=>  `post/${title}/all`
        
        

       }),
       getPost: builder.query<Post, number>({
        query: (id:number)=>  `post/${id}`,
       

       
       }),
       getUserPosts:builder.query<Post[], string>({
        query: (userId:string)=>  `post/${userId}/userPosts`,
       }),
       addPost:builder.mutation<Post, FormData>({
        query: (formData) => ({
            url: `post`,
            method: 'POST',
            body:formData
          }),
       }),
       
       update:builder.mutation<Post,updatePostArgs>({
        query: ({id,formData}) => ({
            url: `/post/${id}`,
            method: 'PUT',
            body: formData,
          }),
       }),
       delete:builder.mutation<void, deletePostArgs>({
        query: ( id ) => ({
            url: `/post/${id}`,
            method: 'DELETE',
          }),
       })
       

       
       })

    })


//export const UseUpdateMutation = postsApi.useUpdateMutation();
export const {useGetPostsQuery,useGetPostQuery,useAddPostMutation,useDeleteMutation, useUpdateMutation, useGetUserPostsQuery} = postsApi
