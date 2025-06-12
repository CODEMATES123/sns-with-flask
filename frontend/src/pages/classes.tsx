import React from 'react'
import { apiBaseURL } from '../constants'
import useSWR from 'swr'

const Classes = () => {
  const fetcher=(key:string)=>{
    return fetch(key).then(res=>res.json())
  }
  const {data,isLoading,error}=useSWR(`${apiBaseURL}/api/classes`,fetcher)
  console.log({data,isLoading,error})
  return (
    <div>{isLoading?"ロード中":JSON.stringify(data)}</div>
  )
}

export default Classes