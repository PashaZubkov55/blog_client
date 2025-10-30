import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 


interface Userinfo{
    id: number,
    userName: string,
    userId: number,
    userImg: string,
    
}



export const userInfoApi = createApi({
    reducerPath: 'userInfoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/'
       
    }),
   
    endpoints: (builder) => ({
       getInfo: builder.query <Userinfo[], void> ({
        query: (userid)=> `userInfo/${userid}`,
        

       }),
       creteInfo: builder.mutation({
       query:(body)=>({
        url: 'userInfo',
        method: 'POST',
        body
       })
        
       }),
       updateInfo: builder.mutation({
        query: ({ UserId, body })=>({
            url: `userInfo/${UserId}`,
            method: 'PUT',
            body: body

        })
       })


    })
      
    })
 
export const {useGetInfoQuery, useCreteInfoMutation, useUpdateInfoMutation} = userInfoApi