import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Post{
    id: number,
    title: string,
    description: string,
    userId: number,
    img: string,
    
}
// типы 
type createPostArgs = Omit<Post, 'id'>& Partial<Pick<Post, 'id'>>
type deletePostArgs = Pick<Post,'id'>
type RequiredPost = Required<Post>
type updatePostArgs ={
    id: string|number,
    body: RequiredPost
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
       addPost:builder.mutation<Post, createPostArgs>({
        query: (title) => ({
            url: `post`,
            method: 'POST',
            body: title
          }),
       }),
       
       update:builder.mutation<Post,updatePostArgs>({
        query: ({ id, body }) => ({
            url: `/post/${id}`,
            method: 'PUT',
            body,
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
