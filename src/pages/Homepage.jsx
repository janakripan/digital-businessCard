import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import { RiRocketLine, RiTeamLine, RiTrophyLine } from "react-icons/ri";
import { GoVerified } from "react-icons/go";
import { products, services } from "../constants";

const Homepage = () => {
  return (
    <div className="w-full h-fit flex flex-col p-3.5 gap-5">
      {/* hero section  */}
      <Hero />

      {/* Contact  */}
      <Contact />

      {/* about  */}

      <div className="w-full h-fit flex flex-col gap-4 items-center mt-3">
        <h3 className="text-[#111827] font-poppins font-semibold text-base">
          About Me
        </h3>

        <p className="text-[#4B5563] font-montserrat text-[14px] text-center  ">
          As the CEO of Sacrosys Technologies, I’ve been driving innovation and
          digital excellence across the Middle East since 2001. With over two
          decades of experience, I specialize in digital transformation, custom
          software development, cybersecurity, and enterprise IT solutions. My
          mission is to help organizations scale securely, adopt emerging
          technologies, and lead confidently in a connected world.
        </p>
      </div>

      {/* achievements  */}

      <div className="w-full h-fit flex flex-col gap-4 items-center  p-3.5 ">
        <h3 className="text-[#111827] font-poppins font-semibold text-base">
          Key Achievements
        </h3>

        <div className="w-full h-fit bg-[#F3F9FF] gap-3 rounded-lg p-2.75 flex flex-row items-center ">
          <div className="flex items-center rounded-full bg-[#010724] text-white text-sm justify-center p-4 ">
            <RiTrophyLine />
          </div>
          <p className="text-[#3E3E3E] font-montserrat text-[12px]  ">
           Spearheaded 300%+ revenue growth through innovation and strategic leadership
          </p>
        </div>

        <div className="w-full h-fit bg-[#F3F9FF] gap-3 rounded-lg p-2.75 flex flex-row items-center ">
          <div className="flex items-center rounded-full bg-[#010724] text-white text-sm justify-center p-4 ">
            <RiTeamLine />
          </div>
          <p className="text-[#3E3E3E] font-montserrat text-[12px]  ">
            Built and led a high-performing team of 500+ professionals and partner experts across regions
          </p>
        </div>

        <div className="w-full h-fit bg-[#F3F9FF] gap-3 rounded-lg p-2.75 flex flex-row items-center ">
          <div className="flex items-center rounded-full bg-[#010724] text-white text-sm justify-center p-4 ">
            <RiRocketLine />
          </div>
          <p className="text-[#3E3E3E] font-montserrat text-[12px]  ">
            Delivered 20+ innovative IT and cybersecurity solutions transforming businesses across the Middle East
          </p>
        </div>
        
        <div className="w-full h-fit bg-[#F3F9FF] gap-3 rounded-lg p-2.75 flex flex-row items-center ">
          <div className="flex items-center rounded-full bg-[#010724] text-white text-sm justify-center p-4 ">
           <GoVerified />
          </div>
          <p className="text-[#3E3E3E] font-montserrat text-[12px]  ">
            Expanded Sacrosys into a multi-domain IT powerhouse serving enterprise and government sectors
          </p>
        </div>
      </div>

      {/* services  */}

      <div className="w-full h-fit flex flex-col gap-3 items-center mt-3">
        <h3 className="text-[#111827] font-poppins font-semibold text-base">
          Core Services
        </h3>

        <div className="p-2 grid grid-cols-2 gap-2 gap-y-4 ">
          {services.map((itm, idx) => (
            <div
              key={idx}
              className="p-2 py-3 flex flex-col gap-2.25 rounded-lg border-l-2 border-[#121212] shadow-[0px_2px_12px_0px_#3C3C3C3D] "
            >
              <h5 className="font-bold text-sm text-[#121212] font-poppins capitalize ">
                {itm.title}
              </h5>
              <p className=" w-full text-[12px] font-montserrat text-[#333333]   ">
                {itm.description}
              </p>
            </div>
          ))}
        </div>

        {/* products  */}

        <div className="w-full h-fit flex flex-col gap-3 items-center mt-3">
          <h3 className="text-[#111827] capitalize font-poppins font-semibold text-base">
            our products
          </h3>

          <div className="p-2 grid grid-cols-2 gap-2 gap-y-4 ">
            {products.map((itm, idx) => (
              <div
                key={idx}
                className="p-2 py-3 w-full flex flex-row gap-2.25 rounded-lg border-l-2 border-[#121212] shadow-[0px_2px_12px_0px_#3C3C3C3D] "
              >
                <div className="w-7 h-full flex items-start justify-center">
                  <img
                    src={itm.image}
                    alt=""
                    className="w-full h-auto aspect-square"
                  />
                </div>

                <div className="flex flex-col gap-2.25 ">
                  <h5 className="font-bold text-sm text-[#121212] font-poppins capitalize ">
                    {itm.title}
                  </h5>
                  <p className=" w-full text-[12px] font-montserrat text-[#333333]   ">
                    {itm.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
