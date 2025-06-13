import useSWR from "swr";
import { apiBaseURL } from "./constants";
import type { Post } from "./types";

export default function usePosts(query:string){
  const {data,error,isLoading}=useSWR(`${apiBaseURL}/api/posts?${query}`,(key:string)=>{
    return fetch(key).then(res=>res.json() as Promise<{post:Post,username:string}[]>)
  })
  return {
    posts:data,
    isLoading,
    isError:error
  }
}
