import { Button } from "@mui/material";
import React from "react";

const LeftMenuBar = () => {
    return <div className="flex w-[260px] bg-[#AA904D] flex-col">
        <div className="flex flex-col p-[20px] justify-center items-center">
            <p className="text-[20px] text-[#fff] font-medium">Welcome</p>
            <p className="text-[20px] text-[#fff] font-medium">Rajesh Agrawal</p></div>
        <div className="w-full h-[1px] bg-[#fff]"></div>
        <div className="flex flex-col justify-center items-center px-[15px] py-[20px] mt-4">
            <Button variant="contained" style={{ backgroundColor: 'white', color: '#AA904D',width:"100%"  }}>
                    Home
            </Button>
            <p className="text-[18px] text-[#fff] mt-[25px] ">Projects</p>
            
             <Button variant="contained" style={{ backgroundColor: '#CA0000', color: '#fff',width:"100%",marginTop:"182px"  }}>
                    Log Out
            </Button>
        </div>
               
       
        
       </div>;
};

export default LeftMenuBar;
