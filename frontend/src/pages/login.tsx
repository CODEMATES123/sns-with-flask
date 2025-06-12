import React, { type FormEventHandler } from 'react'
import { apiBaseURL } from '../constants'

const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
  e.preventDefault()
  const form = new FormData(e.currentTarget)
  const username = form.get("username") || ""
  const password = form.get("password") || ""
  fetch(`${apiBaseURL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    mode:"cors",
    body: JSON.stringify({ username, password }),
  }).then(res => {
    console.log(res)
    if (!res.ok) {
      throw new Error("ログイン失敗")
    }
    return res.json()
  }).then(() => {
    fetch(`${apiBaseURL}/api/friends`, {
      credentials: "include",
      mode: "cors"
    })
      .then(res => res.json()).then(data => {
        console.log(data)
      })
  }).catch(err => {
    console.error(err)
  })
}

const Login = () => {
  return (
    <>
      <form onSubmit={handleSubmit} className='grid grid-cols-2 max-w-md mx-auto mt-8 gap-4'>
        <input className='bg-blue-300 border-2 border-blue-400 rounded-md p-2' type="text" defaultValue="" name="username" />
        <input className='bg-blue-300 border-2 border-blue-400 rounded-md p-2' type="password" name="password" id="" defaultValue="" />
        <input type="submit" value="ログイン" className='bg-blue-500 rounded-md text-white col-span-2 p-2' />
      </form>
    </>
  )
}

export default Login