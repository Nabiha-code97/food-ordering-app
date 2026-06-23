

export default function Footer() {
  return (
    <div className="flex py-10 bg-orange-500">
        <div className="px-4 container mx-auto flex flex-col md:flex-row items-center justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">MERNeats.com</span>
        <span className="text-white font-bold tracking-tight flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms and Services</span>
        </span>
        </div>
    </div>
  )
}
