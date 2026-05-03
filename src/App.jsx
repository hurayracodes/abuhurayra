import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './Sections/Home'
import About from './Sections/About'
import Projects from './Sections/Projects'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Sections/Contact'
import Testimonils from './Sections/Testimonials'

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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
