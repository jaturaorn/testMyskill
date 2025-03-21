

const Navbar = () => {
  return (
    <header className="w-full h-[80px] flex justify-between items-center  ">
      <div className=" size-16 rounded-full bg-black flex justify-center items-center">
        <h5 className="text-sm text-white text-center">Logo</h5>
        </div>
      <div>
        <h4 className="text-[20px] text-[#2A4B6A] underline underline-offset-1 decoration-[#2A4B6A] uppercase">home</h4>
      </div>
      <div className="w-[141px] h-[48px] bg-[#2A4B6A] rounded-[33px] p-4 flex items-center justify-center">
        <h4 className="text-[20px] text-white">Sign in</h4>
      </div>
    </header>
  )
}

export default Navbar