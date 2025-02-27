import React from 'react'
import { BrowserRouter , Routes,Route} from 'react-router-dom'
import Nav from "./Pages/Nav"
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Error from './Pages/Error'
import Footer from './Pages/Footer'
const App = () => {
  return <>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </>
}

export default App;
