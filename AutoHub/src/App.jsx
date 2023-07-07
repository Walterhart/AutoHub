import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import "./server"
import Cars from "./pages/Cars"
import Layout from "./components/Layout"
import CarsDetail from "./components/CarsDetail"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  element = {<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cars' element={<Cars/>}/>
      <Route path='/cars/:id' element= {<CarsDetail/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  
   </>
  )
}

export default App
