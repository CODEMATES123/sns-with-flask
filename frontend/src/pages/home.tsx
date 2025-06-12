// import React, { useEffect, useState } from 'react'
import { apiBaseURL } from '../constants'
import Menu from '../components/menu'
import useSWR from 'swr'
import usePosts from '../usePosts'
 
// type Class={
//   id:number,
//   department:string,
//   code:string,
//   name:string,
//   season:string,
//   time:string,
//   day:string,
//   place:string,
//   unit:number,
//   teacher:string,
//   grade_min:number,
//   grade_max:number,
//   note:string,
//   error:string,
//   is_spring:boolean,
//   is_autumn:boolean
// }

const Home = () => {
  // const [posts,setPosts]=useState([])
  const {isLoading,posts}=usePosts("")
  return (
    <div>
    <Menu/>
    {isLoading?"ロード中...":posts.length==0?"投稿がありません":JSON.stringify(posts)}
    </div>
  )
}

export default Home