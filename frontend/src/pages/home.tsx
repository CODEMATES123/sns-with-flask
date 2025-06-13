// import React, { useEffect, useState } from 'react'
// import { apiBaseURL } from '../constants'
import { Link } from 'react-router-dom'
import Menu from '../components/menu'
// import useSWR from 'swr'
import usePosts from '../usePosts'
 


const Home = () => {
  // const [posts,setPosts]=useState([])
  const {isLoading,posts}=usePosts("")
  return (
    <div>
    <Menu/>
    {isLoading?"ロード中...":posts?.length==0?"投稿がありません":posts?.map((item,i)=>{
      return (<div className='border border-gray-300 rounded-md shadow' key={i}>
        <p className='text-2xl'>{item.post.title}</p>
        <p>{item.post.content}</p>
        <Link className='text-blue-500' to={`user/${item.post.user_id}`}>{item.username}</Link>
        <Link className='text-blue-500' to={`post/${item.post.id}`}>詳細</Link>
      </div>)
    })}
    </div>
  )
}

export default Home