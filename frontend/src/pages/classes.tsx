import { apiBaseURL } from '../constants'
import useSWR from 'swr'
import Menu from '../components/menu'
import type { Class } from '../types'

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