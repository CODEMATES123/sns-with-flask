// import React from 'react'
// import { apiBaseURL } from '../constants'
// import useSWR from 'swr'
import Menu from '../components/menu'
import useFriends from '../useFrends'

const Friends = () => {
  const {friends,isLoading}=useFriends()
  return (
    <div>
      <Menu/>
      {isLoading?"ロード中":friends.length==0?"フレンドがいません":JSON.stringify(friends)}</div>
  )
}

export default Friends