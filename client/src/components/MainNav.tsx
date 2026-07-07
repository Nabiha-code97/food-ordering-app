import { Button } from './ui/button'
import { useAuth0 } from "@auth0/auth0-react"
import UsernameMenu from './UsernameMenu';
import { Link } from 'react-router-dom';

export default function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className='flex space-x-2 items-center'>
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-gray-400">
            Order Status
          </Link>
          <UsernameMenu />
        </>
) : (
        <Button
          onClick={async () => { await loginWithRedirect() }}
          variant="ghost"
          className='!text-lg text-orange-700 font-bold bg-orange-500 text-white hover:text-orange-500 hover:bg-orange-700/10'>
          Log In
        </Button>)}

    </span>

  )
}
