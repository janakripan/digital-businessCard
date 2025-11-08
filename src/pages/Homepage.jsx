import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import { RiRocketLine, RiTeamLine, RiTrophyLine } from "react-icons/ri";
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
          Leading Sacrosys Technologies since 2001, I specialize in delivering
          cutting-edge IT solutions across the Middle East. With over two
          decades of expertise in digital transformation, cybersecurity, and
          custom software development, I help organizations navigate the
          evolving digital landscape with confidence and innovation.
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
            Lead company to 300% revenue growth
          </p>
        </div>

        <div className="w-full h-fit bg-[#F3F9FF] gap-3 rounded-lg p-2.75 flex flex-row items-center ">
          <div className="flex items-center rounded-full bg-[#010724] text-white text-sm justify-center p-4 ">
            <RiTeamLine />
          </div>
          <p className="text-[#3E3E3E] font-montserrat text-[12px]  ">
            Built and managed teams of 5k+ professionals
          </p>
        </div>

        <div className="w-full h-fit bg-[#F3F9FF] gap-3 rounded-lg p-2.75 flex flex-row items-center ">
          <div className="flex items-center rounded-full bg-[#010724] text-white text-sm justify-center p-4 ">
            <RiRocketLine />
          </div>
          <p className="text-[#3E3E3E] font-montserrat text-[12px]  ">
            Successfully launched 20+ market-disrupting products
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
                    <img src={itm.image} alt="" className="w-full h-auto aspect-square"/>

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
