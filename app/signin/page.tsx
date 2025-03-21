"use client"

import Image from "next/image"
import { useState } from "react"

const page = () => {
    const [image, setImage] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleClick = async () => {
    try {
      // Open file picker (Mimics input[type="file"])
      const [fileHandle] = await (window as any).showOpenFilePicker({
        types: [{ description: "Images", accept: { "image/*": [".png", ".jpg", ".jpeg"] } }],
        multiple: false,
      });

      const file = await fileHandle.getFile();
      const reader = new FileReader();

      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    } catch (err) {
      console.error("File selection canceled or not supported", err);
    }
  };

  const handleDelete = () => {
    setImage(null); // Reset the image state
  };

  return (
    <div className=" flex flex-col gap-5 items-center justify-items-center min-h-screen w-full">
        <div className="w-[1260px] h-[911px] shadow-2xl flex flex-col items-center justify-center gap-3" 
        >
            <div className=" size-[150px] rounded-[100px] border border-[#021E42] flex items-center justify-center cursor-pointer" onDrop={handleDrop}
       onClick={handleClick}>
            {image ? (
        <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-[100px]" />
      ) : (
        <span>Drop an image</span>
      )}
      
            </div>
            {image && (
        <button
          onClick={handleDelete}
          className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Remove
        </button>
      )}
        </div>
    </div>
  )
}

export default page