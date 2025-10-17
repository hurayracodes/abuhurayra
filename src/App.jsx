import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Testimonils from './pages/Testimonials'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/testimonils' element={<Testimonils/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route /> */}
      {/* <Home />
      <Gallery /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
