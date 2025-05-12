import { useEffect } from "react";
import { useNavigate } from "react-router"
import { POST_ROUTE } from "../router/Url"
import { useGetPostsQuery } from "../store/posts/PostsSlice";

export const Post = ({title, id})=>{
    const navigate = useNavigate()
return(
    <div className="post  ">
    <div className="flex flex-col justify-center items-center  my-8  w-full">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
            <div className="post__img">
        <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" alt="Mountain" className="w-full h-64 object-cover">
            </img>
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
            </div>
            <div className="post__button flex justify-end p-10">
            <button  onClick={(()=>{navigate(POST_ROUTE+ id)})}  type='button' 
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                читать
                </button>
            </div>
        </div>
    </div>
    </div>
    </div>
)
}
