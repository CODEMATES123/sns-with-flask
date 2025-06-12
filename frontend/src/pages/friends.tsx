import React from 'react'
import { apiBaseURL } from '../constants'
import useSWR from 'swr'
import useFriends from '../useFrends'

const Friends = () => {
  const {friends,isLoading}=useFriends()
  return (
    <div>{isLoading?"ロード中":JSON.stringify(friends)}</div>
  )
}

export default Friends