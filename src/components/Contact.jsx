import React from 'react'
import { contactLinks } from '../constants'
import { TfiDownload } from 'react-icons/tfi'

const Contact = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-6 ">
        {/* save contact button  */}
        <button className="w-full h-fit border-2 border-[#3B82F6] text-[#3B82F6] p-3.5 text-center transition-all duration-200 flex items-center justify-center gap-2 rounded-lg hover:scale-103 active:scale-95 font-poppins text-sm font-semibold drop-shadow-xl ">
          <TfiDownload /> Save Contact
        </button>

        {/* social media links  */}
        <div className="w-full h-fit flex flex-col items-center gap-2">
          <h2 className="text-[#111827] font-poppins font-semibold text-base  ">
            Let's Connect
          </h2>

          <div className="w-full h-fit flex flex-row justify-between items-center ">
            {contactLinks.map((item, idx) => (
              <a key={idx} href={item.path} target="_blank"
              className="py-2.75 px-3.5 rounded-xl shadow-lg bg-white transition-all duration-200 hover:scale-105 active:scale-95 "
              >
                 <img src={item.image} alt={item.title} className="w-5.5 h-5.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Contact
