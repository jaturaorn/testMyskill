"use client"

import { RiArrowDownSFill } from "react-icons/ri";

import { useFormStore } from "@/State/useStore";
import { useImageStore } from "@/State/useStoreImg";
import Link from "next/link"
import { useState } from "react";


const Navbar = () => {
  const { name } = useFormStore();
  const { image} = useImageStore();
  const [hover, setHover] = useState(false);
  return (
    <header className="w-full h-[80px] flex justify-between items-center px-8" >
      <Link href={`/`} >
      <button className=" size-16 rounded-full bg-black flex justify-center items-center cursor-pointer">
        <h5 className="text-sm text-white text-center">Logo</h5>
        </button>
        </Link>
      <div>
        <h4 className="text-[20px] text-[#2A4B6A] underline underline-offset-1 decoration-[#2A4B6A] uppercase">home</h4>
      </div>
      { name && image ? <div className="flex gap-3 items-center relative" onClick={()=>setHover(!hover)}>
        <div className=" size-16 rounded-full" >
        <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-full" />
        </div>
        <RiArrowDownSFill />
        {!hover && <div className=" absolute -translate-x-1/2 translate-y-1/2 -bottom-[160%] left-[30%] bg-white shadow-2xl w-[160px] flex flex-col justify-center rounded-lg p-6">
        <div className="flex flex-col gap-3 items-center">
          <div className=" size-10 rounded-full">
          <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-full" />
          </div>
          <p className="text-sm">{name}</p>
        </div>
        <div className="w-full h-[2px] bg-zinc-500" />
        <h5 className="text-[18px] text-[#2A4B6A]">Profile</h5>
        <h5 className="text-[18px] text-[#2A4B6A]">Logout</h5>
        </div>}
      </div> 
      : 
      <Link href={`/signin`} >
      <button className="w-[141px] h-[48px] bg-[#2A4B6A] rounded-[33px] p-4 flex items-center justify-center cursor-pointer">
        <h4 className="text-[20px] text-white">Sign in</h4>
      </button>
      </Link>}
    </header>
  )
}

export default Navbar