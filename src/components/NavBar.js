
import Image from 'next/image'

const NavBar = () => {
    
    return <div className="flex w-full drop-shadow bg-white S items-center px-[20px] py-[12px] justify-between">
        <Image
            width={126}
            height={61}
          className=" w-[136px] h-[61px] object-cover"
          alt=""
          src="/image-4@2x.png"
        />
        <div className="flex flex-row justify-center items-center gap-[20px]"> 
            <Image
                width={25}
                height={25}
            className="h-[25px] w-[25px] "
            alt=""
            src="/group-632534@2x.png"
          />
            <Image
                 width={25}
                height={25}
            className="h-[25px] w-[25px] "
            alt=""
            src="/group@2x.png"
          />
        </div>
  </div>;
};

export default NavBar;