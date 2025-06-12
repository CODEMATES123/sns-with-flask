import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { apiBaseURL } from '../constants'

const ClassDetail = () => {
  const {id}=useParams()
  const {data,isLoading}=useSWR(`${apiBaseURL}/api/class/${id}`,(key:string)=>{
    return fetch(key,{credentials:"include"}).then(res=>res.json())
  })
  return (
    <div>{isLoading ? "ロード中":JSON.stringify(data)}</div>
  )
}

export default ClassDetail