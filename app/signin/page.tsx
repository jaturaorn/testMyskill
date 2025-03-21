"use client"

import { RiDeleteBin5Line } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscEye } from "react-icons/vsc";

import { useState } from "react"
import PhoneInput from "react-phone-number-input/input";
import { E164Number } from "libphonenumber-js";
import { useFormStore } from "@/State/useStore";
import { useRouter } from "next/navigation";
import { useImageStore } from "@/State/useStoreImg";

const page = () => {
    const [hover, setHover] = useState(false);
    const [openModalImg,setOpenModalImg] = useState(false);
    const [phone, setPhone] = useState<E164Number | string>("")
    
    const { name, setName, submitForm } = useFormStore();
    const {handleDrop, handleClick, handleDelete, image} = useImageStore();

    const router = useRouter()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
};

  const handleChangePhone = (value: Value) => {
    setPhone(value);
};

const SubmitAndRedirect = () => {
  submitForm();
  router.push("/")
}

  return (
    <div className=" flex flex-col gap-5 items-center justify-items-center min-h-screen w-full relative">
        <div className="w-[1160px] h-[911px] shadow-2xl flex flex-col items-center justify-center gap-3 p-8" 
        >
        <div className=" size-[150px] rounded-[100px] border border-[#021E42] flex items-center justify-center cursor-pointer relative"
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        onDrop={handleDrop}
        onClick={() => {
          if (image) {
            // Do nothing or add logic here
          } else {
            handleClick(); // Add () to call the function
          }
        }}
        >
            {image ? (
        <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-[100px]" />
      ) : (
        <span>Drop an image</span>
      )}
      {image &&
      hover && <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-full rounded-[100px] bg-zinc-600/50 flex items-center justify-center">
      <div className="flex gap-3 items-center">
        <button className=" cursor-pointer" onClick={()=>setOpenModalImg(true)}>
      <HiOutlineEye className="text-white" />
        </button>
      <button className=" cursor-pointer" onClick={handleDelete}>
      <RiDeleteBin5Line className="text-white" />
      </button>
      </div>
      </div>}
        </div>
        <div className="w-full flex justify-center gap-3">
          <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="">Email</label>
          <div className="flex gap-2 items-center border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3">
          <MdOutlineMail className="text-[#021E42]" />
          <input type="text" className="flex-1" placeholder="Enter your Email" />
          </div>
          </div>
          <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="">Password</label>
          <div className="flex gap-2 items-center border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3">
          <RiLockPasswordLine className="text-[#021E42]" />
          <input type="text" className="flex-1" placeholder="Enter your password" />
          <VscEye className="text-[#021E42]" />
          </div>
          </div>
          <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="">Confirmed Password</label>
          <div className="flex gap-2 items-center border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3">
          <RiLockPasswordLine className="text-[#021E42]" />
          <input type="text" className="flex-1" placeholder="Enter your password" />
          <VscEye className="text-[#021E42]" />
          </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#D9D9D9] my-3" />
        <div className="w-full flex justify-center gap-3 flex-col">
          <h3 className="text-[20px] text-[#255FA8] font-semibold">Information</h3>
          <div className="w-full flex justify-center gap-3">
            <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="">Company Name</label>
          <div className="flex gap-2 items-center border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3">
          <input type="text" className="flex-1" placeholder="Enter company name" />
          </div>
            </div>
            <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="">Tax ID</label>
          <div className="flex gap-2 items-center border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3">
          <input type="text" className="flex-1" placeholder="Enter Tax ID" />
          </div>
            </div>
            <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="">Full Name</label>
          <div className="flex gap-2 items-center border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3">
          <input type="text" className="flex-1" placeholder="Enter Full name" value={name} onChange={handleChange} />
          </div>
            </div>
          </div>
          <div className="w-full flex justify-center gap-3">
            <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="">Country</label>
          <select className="flex-1 border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3">
    <option value="volvo">Thailand</option>
    <option value="saab">China</option>
    <option value="opel">USA</option>
    <option value="audi">India</option>
  </select>
            </div>
            <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="">Phone Number</label>
            <PhoneInput
                    country={"US"}
                    value={phone}
                    onChange={ handleChangePhone} // Fix: Uses value, not event
                    placeholder="Enter phone number"
                    className="h-full border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3"
                />
            </div>
            <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="">Website</label>
          <div className="flex gap-2 items-center border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3">
          <input type="text" className="flex-1" placeholder="Enter website" />
          </div>
            </div>
          </div>
          <div className="w-full flex justify-center gap-3">
            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor="">Address</label>
              <textarea name="" id="" placeholder="Enter Address" className="flex-1 border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3"></textarea>
            </div>
            <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="">State/Province</label>
          <select className="flex-1 border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3">
    <option value="volvo">Thailand</option>
    <option value="saab">China</option>
    <option value="opel">USA</option>
    <option value="audi">India</option>
  </select>
  <label htmlFor="">City/District</label>
          <select className="flex-1 border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3">
    <option value="volvo">Thailand</option>
    <option value="saab">China</option>
    <option value="opel">USA</option>
    <option value="audi">India</option>
  </select>
            </div>
            <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="">Sub-District</label>
          <select className="flex-1 border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3">
    <option value="volvo">Thailand</option>
    <option value="saab">China</option>
    <option value="opel">USA</option>
    <option value="audi">India</option>
  </select>
  <label htmlFor="">Zip Code</label>
          <select className="flex-1 border border-[#D0D5DD] rounded-[4px] py-[8px] pr-6 pl-3">
    <option value="volvo">Thailand</option>
    <option value="saab">China</option>
    <option value="opel">USA</option>
    <option value="audi">India</option>
  </select>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <button className="px-[16px] py-[14px] bg-[#021E42] rounded-full w-[160px]">
              <h4 className="text-[20px] font-semibold text-white">Cancel</h4>
              </button>
            </div>
            <div>
              <button className="px-[16px] py-[14px] bg-[#5FC198] rounded-full w-[160px]" onClick={SubmitAndRedirect}>
              <h4 className="text-[20px] font-semibold text-white">Submit</h4>
              </button>
              </div>
          </div>
        </div>
        </div>
        {openModalImg && <div className=" absolute w-full h-full z-10 bg-black/50 flex justify-center items-center">
        <div className="w-[452px] h-[424px] relative">
        <img src={image || undefined} alt="Uploaded" className="w-full h-full object-cover" />
        <div className=" absolute top-0 right-0 bg-red-600 text-3xl text-white rounded-full size-8 text-center" onClick={()=>setOpenModalImg(false)}>X</div>
        </div>
        
        </div>}
    </div>
  )
}

export default page