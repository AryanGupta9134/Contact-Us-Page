const Navbar = () => {
  return (
    <div className="h-1/10 flex justify-between p-3 items-center">
      <div className="ml-20 w-12 rounded-full bg-purple-400 text-white h-full">
        <p className="text-center text-3xl">A</p>
      </div>
        <div className="h-full flex gap-5 p-3 text-lg">
            <a href="#" className="text-black">Home</a>
            <a href="#" className="text-black">About</a>
            <a href="#" className="text-black">Contact</a>
        </div>
    </div>
  )
}

export default Navbar
