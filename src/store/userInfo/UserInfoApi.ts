import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 


interface Userinfo{
    id: number,
    userName: string,
    userId: number,
    userImg: string,
    
}

type getInfoArgs = Pick<Userinfo, 'userId'>


type UpdateInfoArgs=  {
    userId: number;
    formData: FormData
    
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
       creteInfo: builder.mutation<Userinfo, FormData>({
       query:(formData)=>({
        url: 'userInfo',
        method: 'POST',
        body:formData
       })
        
       }),
       updateInfo: builder.mutation<Userinfo,UpdateInfoArgs>({
        query: ({userId, formData})=>({
            url: `userInfo/${userId}`,
            method: 'PUT',
            body: formData

        })
       })


    })
      
    })
 
export const {useGetInfoQuery, useCreteInfoMutation, useUpdateInfoMutation} = userInfoApi