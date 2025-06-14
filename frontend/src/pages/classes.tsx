import { apiBaseURL } from '../constants'
import useSWR from 'swr'
import Menu from '../components/menu'
import type { Class } from '../types'
import { Link } from 'react-router-dom'
import { Skeleton } from '@/components/ui/skeleton'

const Classes = () => {
  const fetcher = async (key: string) => {
    const res = await fetch(key)
    return await (res.json() as Promise<Class[]>)
  }
  const { data, isLoading, error } = useSWR(`${apiBaseURL}/api/classes`, fetcher)
  console.log({ data, isLoading, error })
  return (
    <div>
      <Menu />
      <div className='grid grid-cols-4'>
      {isLoading ? Array.from({length:128}).map(()=>{
        return (
          <Skeleton className='rounded-md bg-blue-400/10 m-2 p-2 hover:scale-110 transition-all'>
            <Skeleton className='rounded-md bg-black/20 h-6 my-1'></Skeleton>
            <Skeleton className='rounded-md bg-black/20 h-4 my-1'></Skeleton>
            <Skeleton className='rounded-md bg-black/20 h-4 my-1'></Skeleton>
            <Skeleton className='rounded-md bg-black/20 h-4 my-1'></Skeleton>
            <Skeleton className='rounded-md bg-black/20 h-4 my-1'></Skeleton>
          </Skeleton>
        )
      }) : data?.map(item => {
        return <Link to={`/class/${item.id}`} className=''>
          <div className='border-blue-500 border rounded-md m-2 p-2 hover:scale-105 transition-all'>
            <p className='text-xl'>{item.department}</p>
            <p>{item.code}</p>
            <p>{item.name}</p>
            <p>{item.teacher}</p>
          </div>
        </Link>
      })}
      </div>
    </div>
  )
}

export default Classes