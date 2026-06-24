import { Button } from './ui/button'
import {useAuth0} from "@auth0/auth0-react"
import UsernameMenu from './UsernameMenu';

export default function MainNav() {
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (
      <span className='flex space-x-2 items-center'>
        {isAuthenticated? (
        <UsernameMenu />) :(
        <Button 
        onClick={async ()=>{await loginWithRedirect()}}
        variant="ghost" 
        className='!text-lg text-gray-700 font-bold text-white hover:text-orange-500 hover:bg-white'>
        Log In
      </Button>)}

      </span>

  )
}
