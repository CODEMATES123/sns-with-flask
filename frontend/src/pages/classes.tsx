import { apiBaseURL } from '../constants'
import useSWR from 'swr'
import Menu from '../components/menu'

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
      {isLoading ? "ロード中" : data?.map(item => {
        return <a href={item.url}>{item.name}</a>
      })}
    </div>
  )
}

export default Classes