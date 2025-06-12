import useSWR from "swr";
import { apiBaseURL } from "./constants";

export default function usePosts(query:string){
  const {data,error,isLoading}=useSWR(`${apiBaseURL}/api/posts?${query}`,(key:string)=>{
    return fetch(key).then(res=>res.json())
  })
  return {
    posts:data,
    isLoading,
    isError:error
  }
}
