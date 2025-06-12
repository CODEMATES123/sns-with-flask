import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/home"
import { thisBaseURL } from "./constants"
import Classes from "./pages/classes"
import Friends from "./pages/friends"
import Login from "./pages/login"
import Schedule from "./pages/schedule"
import Create from "./pages/create"
import ClassDetail from "./pages/class_detail"
import Menu from "./components/menu"

function App() {

  return (
    <BrowserRouter basename={thisBaseURL}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/classes" element={<Classes/>}/>
            <Route path="/friends" element={<Friends/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/class/:id" element={<ClassDetail/>}/>
            <Route path="*" element={<><Menu/><p className="text-3xl">404</p></>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
