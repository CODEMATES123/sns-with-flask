import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='rounded-md border border-black/20 p-2 bg-blue-200 m-2 text-black'>
      <Link className='hover:underline p-2 rounded-md' to={"/"}>ホーム</Link>
      <Link className='hover:underline p-2 rounded-md' to={"/friends"}>フレンド</Link>
      <Link className='hover:underline p-2 rounded-md' to={"/schedule"}>時間割</Link>
      <Link className='hover:underline p-2 rounded-md' to={"/create"}>投稿</Link>
      <Link className='hover:underline p-2 rounded-md' to={"/login"}>ログイン</Link>
      <Link className='hover:underline p-2 rounded-md' to={"/classes"}>授業一覧</Link>
    </div>
  )
}

export default Menu