import { useParams } from 'react-router-dom'
import { apiBaseURL } from '../constants'
import Menu from '../components/menu'
import useClassDetail from '../useClassDetail'
import { Skeleton } from '@/components/ui/skeleton'
const ClassDetail = () => {
  const { id } = useParams()
  const {classDetails, isLoading } = useClassDetail(id)
  return (<>
    <Menu/>
    <div>{isLoading? <>
    <Skeleton className='bg-blue-300/30 rounded-md p-3 m-2'>
      <Skeleton className='bg-black/20 rounded-md h-6 my-1'></Skeleton>
      <Skeleton className='bg-black/20 rounded-md h-6 my-1'></Skeleton>
      <Skeleton className='bg-black/20 rounded-md h-6 my-1'></Skeleton>
      <Skeleton className='bg-black/20 rounded-md h-6 my-1'></Skeleton>
      <Skeleton className='bg-black/20 rounded-md h-6 my-1'></Skeleton>
      <Skeleton className='bg-black/20 rounded-md h-6 my-1'></Skeleton>
      <Skeleton className='bg-black/20 rounded-md h-6 my-1'></Skeleton>
      <Skeleton className='bg-black/20 rounded-md h-6 my-1'></Skeleton>
    </Skeleton>
    </> : <>
      <div className='border-blue-300 border rounded-md p-3 m-2'>
        <p>授業コード:{classDetails?.class_detail.code}</p>
        <p>学部:{classDetails?.class_detail.department}</p>
        <p>授業名:{classDetails?.class_detail.name}</p>
        <p>場所:{classDetails?.class_detail.place}</p>
        <p>曜日:{classDetails?.class_detail.day}</p>
        <p>時限:{classDetails?.class_detail.time==-10 ? "集中・その他" : classDetails?.class_detail.time}</p>
        <p>単位数:{classDetails?.class_detail.unit}</p>
        <p>注意事項:{classDetails?.class_detail.note}</p>
        <p>配当最大年次:{classDetails?.class_detail.grade_max}</p>
        <p>配当最小年次:{classDetails?.class_detail.grade_min}</p>
        {classDetails?.class_detail.error!==""?<>
        <p className='text-red-500'>取得エラー！:{classDetails?.class_detail.error}</p>
        </>:<></>}
        <p>登録状況:{classDetails?.class_entry ? "登録済み":"未登録"}</p>
        <a href={classDetails?.class_detail.url} className='text-blue-700 underline'>シラバスURL</a>
        <button className='bg-blue-500 rounded-md shadow p-2 text-white' onClick={()=>{
          if(classDetails?.class_entry){
            fetch(`${apiBaseURL}/class/${id}/delete`,{credentials:"include"}).then(res=>res.json()).then(()=>{
              alert("登録を解除しました")
            })
          }else{
            fetch(`${apiBaseURL}/api/class/${id}/add`,{credentials:"include"}).then(res=>res.json()).then(()=>{
              alert("授業を登録をしました")
            })
          }
        }}>{classDetails?.class_entry?"登録を解除する":"登録する"}</button>
      </div>
    </>}</div>
  </>
  )
}

export default ClassDetail