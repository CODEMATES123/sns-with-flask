import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='rounded-md border border-black/20 p-2 bg-blue-200 m-2'>
      <Link className='hover:underline p-2 rounded-md' to={"/"}>ホーム</Link>
      <Link className='hover:underline p-2 rounded-md' to={"/friends"}>フレンド</Link>
      <Link className='hover:underline p-2 rounded-md' to={"/schedule"}>時間割</Link>
      <Link className='hover:underline p-2 rounded-md' to={"/create"}>投稿</Link>
    </div>
  )
}

export default Menu