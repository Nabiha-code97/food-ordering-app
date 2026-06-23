import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import MainNav from './MainNav'
import logo from "../assets/logo.jpg"

const Header = () => {
  return (
    <div className='bg-orange-400 py-6'>
      <div className='px-4 container mx-auto flex justify-between items-center text-white'>
        <Link to="/"
        className='flex gap-2 items-center text-3xl font-bold tracking-tight text-white'>
            <img className='w-10 rounded-3xl' src={logo} alt="logo" />
            MERNeats.com
        </Link>
        <div className='md:hidden'>
          <MobileNav />
        </div>
        <div className='hidden md:block'>
          <MainNav />
        </div>
      </div>
    </div>
  )
}

export default Header
