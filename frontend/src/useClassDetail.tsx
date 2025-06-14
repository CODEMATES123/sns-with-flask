import useSWR from "swr";
import { apiBaseURL } from "./constants";
import type { Class } from "./types";

export default function useClassDetail(id:string|undefined){
  const {data,error,isLoading}=useSWR(`${apiBaseURL}/api/class/${id}`, async (key: string) => {
    const res = await fetch(key, { credentials: "include" })
    return await (res.json() as Promise<{ class_detail: Class; class_entry: boolean} >)
  })
  return {
    classDetails:data,
    error,isLoading
  }
}