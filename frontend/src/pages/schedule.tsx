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
    <div className=''>
        <Menu />
      <div className='grid grid-cols-6 gap-3 w-full'>
      {isLoading ? "ロード中" : data?.map(item => {
        return (
          <div className='rounded-md border-green-400 border-2 p-4'>
            <Link to={`/class/${item.id}`} className='text-blue-700 hover:text-blue-900'>{item.name}</Link>
          </div>
        )
      })}
      </div>
    </div>)}

  export default Schedule