const Navbar = () => {
  return (
    <div className="px-4 h-20 flex items-center justify-between w-full bg-black">
        <div className="">
            <div className="w-12 h-12 rounded-full bg-blue-600"></div>
        </div>
        <div className="flex items-center gap-32 justify-around">
            <div className="md:flex hidden items-center justify-center gap-8">
                <div className="cursor-pointer">
                    Home
                </div>
                <div className="cursor-pointer">
                    Events
                </div>
                <div className="cursor-pointer">
                    CA Portal
                </div>
                <div className="cursor-pointer">
                    Sponsors
                </div>
                <div className="cursor-pointer">
                    Workshops
                </div>
                <div className="cursor-pointer">
                    Our Team
                </div>
            </div>
            <div className="py-2 px-3 text-sm rounded-full hover:bg-blue-800 cursor-pointer bg-blue-600">
                Login
            </div>
        </div>
    </div>
  )
}

export default Navbar