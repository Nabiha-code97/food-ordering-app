import { Button } from './ui/button'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'

export default function MobileNav() {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-orange-500'/>
        </SheetTrigger>
        <SheetContent className='space-y-2 p-5'>
            <SheetTitle className=''>
                <span>Welcome to MERNeats.com</span>
            </SheetTitle>
            <SheetDescription className='flex'>
                <Button className='flex-1 font-bold bg-orange-500'>Log In</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}
