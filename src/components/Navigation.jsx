import { Link } from 'react-router-dom';
  // const navItems = [
  //   { to: '/', label: 'Home', icon: '👨‍🚀' },
  //   { to: '/about', label: 'About', icon: '🧠' },
  //   { to: '/projects', label: 'Projects', icon: '🔍' },
  //   { to: '#gallery', label: 'Gallery', icon: '' },
  //   { to: '#testimonials', label: 'Testimonials', icon: '👨‍🚀' },
  //   { to: '#contact', label: 'Contact', icon: '🤖' }
  // ];
function Navigation() {
  return (
    <header className='fixed bg-slate-900 top-0 left-0 right-0 z-50 transition-all duration-500'>
      <div className='container mx-auto p-3 flex items-center justify-between'>
        <div className='text-3xl font-bold bg-gradient-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent'>Abu Hurayra</div>
        <nav className='md:flex items-center space-x-8'>
          <Link to="/" className='relative text-white font-semibold hover:text-accent transition-colors duration-300'>Home</Link>
          <Link to="/about" className='relative text-white font-semibold hover:text-accent transition-colors duration-300'>About</Link>
          <Link to="/projects" className='relative text-white font-semibold hover:text-accent transition-colors duration-300'>Projects</Link>
          <Link to="/testimonils" className='relative text-white font-semibold hover:text-accent transition-colors duration-300'>Testimonials</Link>
          <Link to="/contact" className='relative text-white font-semibold hover:text-accent transition-colors duration-300'>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
