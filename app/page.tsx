import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col gap-5 items-center justify-items-center min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
      <main className="w-full h-[635px] bg-[url(/imgs/moutains-8445767_1920.jpg)] bg-cover bg-center flex items-center flex-col gap-[18px] justify-center">
                <h1 className="text-5xl text-white">Lorem ipsum dolor sit amet consectetur.</h1>
                <h3 className="text-[32px] text-white">One-stop Platform community for Agents and Operator in Thailand.</h3>
      </main>
      <h3 className=" text-[32px] font-bold">Lorem ipsum</h3>
      <div className="w-full flex justify-center items-center gap-2">
        <div className="w-[320px] h-[438px] flex justify-center items-center flex-col gap-2">
          <Image
                      
                      src="/imgs/moutains-8445767_1920.jpg"
                      alt="File icon"
                      width={1920}
                      height={1080}
                      className="w-full h-[272px]"
                    />
          <h5 className="text-[18px] font-bold">Lorem ipsum</h5>
          <p className="text-sm text-center">One-stop Platform community for 
          Agents and Operator in Thailand.</p>
          <button className="h-[48px] bg-[#2A4B6A] rounded-[33px] p-4 flex items-center justify-center">
            <h5 className="text-[16px] text-white">Buy package</h5>
          </button>
        </div>
        <div className="w-[320px] h-[438px] flex justify-center items-center flex-col gap-2">
          <Image
                      
                      src="/imgs/moutains-8445767_1920.jpg"
                      alt="File icon"
                      width={1920}
                      height={1080}
                      className="w-full h-[272px]"
                    />
          <h5 className="text-[18px] font-bold">Lorem ipsum</h5>
          <p className="text-sm text-center">One-stop Platform community for 
          Agents and Operator in Thailand.</p>
          <button className="h-[48px] bg-[#2A4B6A] rounded-[33px] p-4 flex items-center justify-center">
            <h5 className="text-[16px] text-white">Buy package</h5>
          </button>
        </div>
        <div className="w-[320px] h-[438px] flex justify-center items-center flex-col gap-2">
          <Image
                      
                      src="/imgs/moutains-8445767_1920.jpg"
                      alt="File icon"
                      width={1920}
                      height={1080}
                      className="w-full h-[272px]"
                    />
          <h5 className="text-[18px] font-bold">Lorem ipsum</h5>
          <p className="text-sm text-center">One-stop Platform community for 
          Agents and Operator in Thailand.</p>
          <button className="h-[48px] bg-[#2A4B6A] rounded-[33px] p-4 flex items-center justify-center">
            <h5 className="text-[16px] text-white">Buy package</h5>
          </button>
        </div>
        <div className="w-[320px] h-[438px] flex justify-center items-center flex-col gap-2">
          <Image
                      
                      src="/imgs/moutains-8445767_1920.jpg"
                      alt="File icon"
                      width={1920}
                      height={1080}
                      className="w-full h-[272px]"
                    />
          <h5 className="text-[18px] font-bold">Lorem ipsum</h5>
          <p className="text-sm text-center">One-stop Platform community for 
          Agents and Operator in Thailand.</p>
          <button className="h-[48px] bg-[#2A4B6A] rounded-[33px] p-4 flex items-center justify-center">
            <h5 className="text-[16px] text-white">Buy package</h5>
          </button>
        </div>
      </div>
    </div>
  );
}
