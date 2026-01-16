import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 


interface Userinfo{
    id: number,
    userName: string,
    userId: number,
    userImg: string,
    
}

type getInfoArgs = Pick<Userinfo, 'userId'>
type createInfoArgs =  Omit<Userinfo, 'id'> & Partial<Pick<Userinfo, 'id'>>

type UpdateInfoArgs=  {
    userId: string;
    body: Required<Omit<Userinfo, 'id'| 'userId'>> & Partial<Pick<Userinfo,  'id'|'userId'>>;
    
}

export const userInfoApi = createApi({
    reducerPath: 'userInfoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/'
       
    }),
   
    endpoints: (builder) => ({
       getInfo: builder.query <Userinfo, getInfoArgs> ({
        query: (userid)=> `userInfo/${userid}`,
        

       }),
       creteInfo: builder.mutation<Userinfo, createInfoArgs>({
       query:(body)=>({
        url: 'userInfo',
        method: 'POST',
        body
       })
        
       }),
       updateInfo: builder.mutation<Userinfo,UpdateInfoArgs>({
        query: ({userId, body})=>({
            url: `userInfo/${userId}`,
            method: 'PUT',
            body: body

        })
       })


    })
      
    })
 
export const {useGetInfoQuery, useCreteInfoMutation, useUpdateInfoMutation} = userInfoApi