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
       }

       )
        
       })

    })
      
    })
 
export const {useGetInfoQuery, useCreteInfoMutation} = userInfoApi