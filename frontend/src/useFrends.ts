import useSWR from "swr";
import { apiBaseURL } from "./constants";

export default function useFriends(){
  const {data,error,isLoading}=useSWR(`${apiBaseURL}/api/friends`,(key:string)=>{
    return fetch(key,{method:"GET",credentials:"include"}).then(res=>res.json())
  })
  return {
    friends:data,
    isLoading,
    isError:error
  }
}
