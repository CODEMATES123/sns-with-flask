import { type FormEventHandler } from 'react'
import { apiBaseURL } from '../constants'
import Menu from '../components/menu'

const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
  e.preventDefault()
  const form = new FormData(e.currentTarget)
  const title = form.get("title") || ""
  const content = form.get("content") || ""
  fetch(`${apiBaseURL}/api/create`, {
    method: "post",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, content })
  }).finally(()=>{
  })
}

const Create = () => {
  return (
    <div>
      <Menu></Menu>
      <form onSubmit={handleSubmit} className='grid grid-cols-2 max-w-md mx-auto gap-2'>
        <input className="rounded-md bg-blue-400 p-2 border-2 border-blue-600" type="text" name='title' />
        <input className="rounded-md bg-blue-400 p-2 border-2 border-blue-600" type="text" name='content' />
        <input type="submit" value="投稿" className='bg-blue-500 text-white rounded-md p-2 col-span-2' />
      </form>
    </div>
  )
}

export default Create