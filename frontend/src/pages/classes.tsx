import { apiBaseURL,departments } from '../constants'
import useSWR from 'swr'
import Menu from '../components/menu'
import type { Class } from '../types'
import { Link, useSearchParams } from 'react-router-dom'
import { Skeleton } from '@/components/ui/skeleton'
import { Select, SelectGroup, SelectItem, SelectTrigger, SelectValue, SelectContent } from '@/components/ui/select'

const Classes = () => {
  const fetcher = async (key: string) => {
    const res = await fetch(key)
    return await (res.json() as Promise<Class[]>)
  }
  const [searchParams, setSearchParams] = useSearchParams({})
  const { data, isLoading, } = useSWR(`${apiBaseURL}/api/classes?${searchParams}`, fetcher)
  console.log(searchParams)
  // const navigate = useNavigate()
  const menus=[{value:"*",text:"指定なし"},...departments.map(item=>{
    return {value:item,text:item}})]
  return (
    <div>
      <Menu />
      {/* <button className='bg-blue-500 shadow p-1 text-white mx-2 rounded-md' onClick={() => {
        navigate("/classes")
      }}>検索条件をクリア</button> */}
      <p className='mx-2'>授業名</p>
      <input type="text" className="border border-blue-400 m-2 rounded-md text-xl p-1" onChange={async e => {
        e.preventDefault()
        setSearchParams(pre => ({
          ...Object.fromEntries(pre),
          name: e.target.value
        }))
      }} defaultValue={searchParams.get("name") || ""} />
      <p className='mx-2'>学部</p>
      <Select onValueChange={async (item) => {
        setSearchParams((pre => ({
          ...Object.fromEntries(pre),
          department: item
        })))
      }} defaultValue={searchParams.get("department")||"*"}>
        <SelectTrigger className='m-2'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className='backdrop-blur-sm'>
          <SelectGroup>
            {menus.map(item => {
              return (
                <SelectItem className='my-1 bg-blue-300 text-black shadow-lg' value={item.value} key={item.value}>{item.text}</SelectItem>
              )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className='my-2'>担当者名</p>
      <input type="text" className='mx-2 border border-blue-500 rounded-md p-1 text-xl' onChange={(ele) => {
        ele.preventDefault()
        setSearchParams(prev => ({
          ...Object.fromEntries(prev),
          teacher: ele.target.value
        }))
      }} defaultValue={searchParams.get("teacher") || ""} />
      <div className='grid grid-cols-2 md:grid-cols-4'>
        {isLoading ? Array.from({ length: 100 }).map(() => {
          return (
            <Skeleton className='rounded-md bg-blue-400/10 m-2 p-2 hover:scale-110 transition-all'>
              <Skeleton className='rounded-md bg-black/20 h-6 my-1'></Skeleton>
              <Skeleton className='rounded-md bg-black/20 h-4 my-1'></Skeleton>
              <Skeleton className='rounded-md bg-black/20 h-4 my-1'></Skeleton>
              <Skeleton className='rounded-md bg-black/20 h-4 my-1'></Skeleton>
              <Skeleton className='rounded-md bg-black/20 h-4 my-1'></Skeleton>
            </Skeleton>
          )
        }) : <>
          {data && data?.length >= 100 ? <p className='text-pink-500 col-span-2 md:col-span-4 p-2'>検索を打ち切りました（上限100件）</p> : <></>}
          {data?.map(item => {
            return <Link to={`/class/${item.id}`} className='' key={item.id}>
              <div className='border-blue-500 border rounded-md m-2 p-2 hover:scale-105 transition-all'>
                <p className='text-xl'>{item.department}</p>
                <p>{item.day}{item.time!==-10 && item.time!==-1 ? item.time : "" }</p>
                <p>{item.code}</p>
                <p>{item.name}</p>
                <p>{item.teacher}</p>
              </div>
            </Link>
          })}</>
        }
      </div>
    </div>
  )
}

export default Classes