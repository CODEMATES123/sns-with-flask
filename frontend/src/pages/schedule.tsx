import useSWR from 'swr'
import { apiBaseURL, } from '../constants'
import Menu from '../components/menu'
import { Link } from 'react-router-dom'

type Class = {
  url: string | undefined
  id: number,
  department: string,
  code: string,
  name: string,
  season: string,
  time: string,
  day: string,
  place: string,
  unit: number,
  teacher: string,
  grade_min: number,
  grade_max: number,
  note: string,
  error: string,
  is_spring: boolean,
  is_autumn: boolean
}

const Schedule = () => {
  const { data, isLoading } = useSWR(`${apiBaseURL}/api/schedule`, (key: string) => {
    return fetch(key, { credentials: 'include' }).then(res => res.json() as Promise<Class[]>)
  })
  return (
    <div className='bg-[url(/economics.jpg)] bg-contain bg-fixed min-h-screen max-w-full p-5'>
        <Menu />
      <div className='gap-5 grid grid-cols-2 md:grid-cols-4'>
      {isLoading ? "ロード中" : data?.map((item,idx) => {
        return (
          <Link className='rounded-md border-white/30 border hover:shadow-blue-600 hover:shadow transition-all p-4 backdrop-blur-sm bg-orange-300/30 hover:scale-105' key={idx} to={`/class/${item.id}`}>
            <span className='border-red-500/50 border-2 rounded-md p-1'>{item.place}</span>
            <p className='text-blue-700 hover:text-blue-900 text-xl'>{item.name}</p>
            <p className='text-sm'>{item.teacher}</p>
          </Link>
        )
      })}
      </div>
    </div>)}

  export default Schedule