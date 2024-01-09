import { useState } from "react";
import Image from 'next/image'

const MobileNavBar = () => {
    const [view,setView]=useState(false)
    return <div className="flex w-full drop-shadow bg-white S items-center px-[5px] py-[12px] justify-between">
        <Image
            width={109}
            height={29}
          className=" w-[109px] h-[29px] object-cover"
          alt=""
          src="/image-4@2x.png"
        />
        <div className="flex flex-row justify-center items-center gap-[20px]"> 
            <Image
                width={16}
                height={16}
            className="h-[16px] w-[16px] "
            alt=""
            src="/group-632534@2x.png"
          />
            <Image
                 width={16}
                height={16}
            className="h-[16px] w-[16px] "
            alt=""
            src="/group@2x.png"
          />
        </div>
  </div>;
};

export default MobileNavBar;