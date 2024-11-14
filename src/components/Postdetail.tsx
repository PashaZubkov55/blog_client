import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGetPostQuery } from "../store/posts/PostsSlice"


export const Postdetail = ()=>{
    const {id} = useParams()
    const {data, isLoading} =  useGetPostQuery(id,{
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
    })
    useEffect(()=>{
        console.log(id, data)
    },[])
        return(
        
    
        <div className="container">
            {isLoading?<h1>loading...</h1>:
        <div className="detail">
                <div className="detail__header">
                    <img src="https://avatars.mds.yandex.net/i?id=b0d08c2379524331b4b93ac74511c383a9cd1f44-4234302-images-thumbs&n=13" alt="detail" />
                </div>
                <div className="detail__title">
                    <h1 className='title'>{data.title}</h1>
                    </div>
                <div className="detail__description">{data.body}</div>
        </div>
}
        </div>
        )
}

    
    
    
       

    
    
