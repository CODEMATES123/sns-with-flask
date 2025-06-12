import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/home"
import { thisBaseURL } from "./constants"
import Classes from "./pages/classes"
import Friends from "./pages/friends"
import Login from "./pages/login"

function App() {

  return (
    <BrowserRouter basename={thisBaseURL}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/classes" element={<Classes/>}/>
            <Route path="/friends" element={<Friends/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
