import './App.css'
import About from './components/pages/about/about'
import Dogs from './components/pages/dogs/dogs'
import Home from './components/pages/home/home'
import NavBar from './components/shared/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dogs' element={<Dogs />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
