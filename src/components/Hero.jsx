import React from 'react'
import porfile from "../assets/images/rafi.png";
import logo from "../assets/images/logo.png"

const Hero = () => {
  return (
     <div
        className="w-full h-[313px] bg-radial from-[#0546BE] to-[#220258] rounded-[16px]
         relative bg-center bg-cover flex flex-col gap-2.5 "
        style={{ backgroundImage: "url('/bg-gif.gif')" }}
      >
        {/* overlay  */}
        <div className="absolute inset-0 z-0 bg-[#01001DB2] rounded-[16px]"></div>

        {/* content  */}

        <div className="w-full h-full relative flex flex-col items-center gap-2.5 text-white z-20 py-5.5 px-3.5 ">


         {/* image  */}
          <div className="h-[112px] aspect-square rounded-full bg-white  border-4 border-white overflow-hidden ">
            <img
              src={porfile}
              alt="profile image"
              className="object-cover object-center h-full "
            />
          </div>

          {/* heading  */}

          <h1 className="font-poppins font-bold text-[24px] text-white ">
            Raffi Tharayan Kandthil
          </h1>
          <img src={logo} alt="logo"  className="h-7 w-auto " />
          <p className=" font-normal font-montserrat text-xs leading-loose  text-center text-[#DDDDDD] ">
           CEO at Sacrosys Technologies | Digital Transformation Expert IT Solution & Cyber Security 
          </p>


        </div>

       
      </div>
  )
}

export default Hero
