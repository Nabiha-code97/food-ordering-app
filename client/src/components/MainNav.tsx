import { Button } from './ui/button'
import {useAuth0} from "@auth0/auth0-react"

export default function MainNav() {
  const {loginWithRedirect} = useAuth0();
  return (
    <div>
      <Button onClick={async ()=>{await loginWithRedirect()}}variant="ghost" className='!text-lg text-gray-700 font-bold text-white hover:text-orange-500 hover:bg-white'>
        Log In
      </Button>
    </div>
  )
}
