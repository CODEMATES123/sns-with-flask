import { apiBaseURL } from '../constants'
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
  const [searchParams,setSearchParams]=useSearchParams()
  const { data, isLoading, } = useSWR(`${apiBaseURL}/api/classes?${searchParams}`, fetcher)
  console.log(searchParams)
  return (
    <div>
      <Menu />
      <p className='mx-2'>授業名</p>
      <input type="text"  className="border border-blue-400 m-2 rounded-md text-xl p-1"onChange={async e=>{
        e.preventDefault()
        setSearchParams(pre=>({
          ...Object.fromEntries(pre),
          name:e.target.value
        }))
      }}/>
      <p className='mx-2'>学部</p>
      <Select onValueChange={async (item)=>{
        setSearchParams((pre=>({
          ...Object.fromEntries(pre),
          department:item
        })))
      }}>
        <SelectTrigger className='m-2'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className='backdrop-blur-sm'>
          <SelectGroup>
            {/* <SelectItem value='' className='my-1 border border-blue-500'>指定なし</SelectItem> */}
            {["法学部", "文学部", "経済学部", "社会学部", "経営学部", "国際文化学部", "人間環境学部", "現代福祉学部", "情報科学部", "キャリアデザイン学部", "デザイン工学部", "理工学部", "生命科学部", "グローバル教養学部", "スポーツ健康学部"].map(item => {
              return (
                <SelectItem className='my-1 border border-blue-500' value={item} key={item}>{item}</SelectItem>
              )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className='my-2'>担当者名</p>
      <input type="text" className='mx-2 border border-blue-500 rounded-md p-1 text-xl' onChange={(ele)=>{
        ele.preventDefault()
        setSearchParams(prev=>({
          ...Object.fromEntries(prev),
          teacher: ele.target.value
        }))
      }} />
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
          {data?.length>=100 ? <p className='text-pink-500 col-span-4 p-2'>検索を打ち切りました（上限100件）</p>:<></>}
          {data?.map(item => {
            return <Link to={`/class/${item.id}`} className='' key={item.id}>
              <div className='border-blue-500 border rounded-md m-2 p-2 hover:scale-105 transition-all'>
                <p className='text-xl'>{item.department}</p>
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