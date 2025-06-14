import useSWR from 'swr'
import { apiBaseURL, } from '../constants'
import Menu from '../components/menu'
import { Link } from 'react-router-dom'
import type { Class } from '@/types'

const Schedule = () => {
  const { data, isLoading } = useSWR(`${apiBaseURL}/api/schedule`, (key: string) => {
    return fetch(key, { credentials: 'include' }).then(res => res.json() as Promise<Class[]>)
  })
  return (
    <div className='bg-contain bg-fixed min-h-screen max-w-full'>
        <Menu />
      <div className='gap-5 grid grid-cols-2 md:grid-cols-4 p-2'>
      {isLoading ? "ロード中" : data?.map((item,idx) => {
        console.log(item)
        return (
          <Link className='rounded-md border-blue-400 border transition-all p-4 backdrop-blur-sm hover:scale-105' key={idx} to={`/class/${item.id}`}>
            <span className='text-sm'>{item.place}</span>
            <p>{item.day}{item.time!==-10 && item.time!==-1 ? item.time : ""}</p>
            <p className='text-blue-700 hover:text-blue-900 text-xl'>{item.name}</p>
            <p className='text-sm'>{item.teacher}</p>
          </Link>
        )
      })}
      </div>
    </div>)}

  export default Schedule