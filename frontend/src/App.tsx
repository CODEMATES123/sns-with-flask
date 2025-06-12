import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/home"

function App() {

  return (
    <BrowserRouter basename="/">
        <Routes>
            <Route path="home" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
