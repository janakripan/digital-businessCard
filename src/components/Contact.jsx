import React from "react";
import { contactLinks } from "../constants";
import { TfiDownload } from "react-icons/tfi";
import DownloadVcard from "./DownloadVcard";

const Contact = () => {
  const [showVcard, setShowVcard] = React.useState(false);

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Raffi Sacrosys
N:Sacrosys;Raffi;;;
TEL;TYPE=CELL:+919876543210
EMAIL:raffi@sacrosys.com
ORG:Sacrosys Technologies
TITLE:Chief Executive Officer
ADR;TYPE=WORK:;;Dubai Internet City;Dubai;;00000;United Arab Emirates
URL:https://sacrosys.com
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/x-vcard" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "raffisacrosys.vcf";
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const handleSaveContact = () => {
    setShowVcard(true);
  };

  return (
    <div className="w-full h-fit flex flex-col gap-6 ">
      {/* Save Contact Button */}
      <button
        className="w-full h-fit border-2 border-[#3B82F6] text-[#3B82F6] p-3.5 text-center transition-all duration-200 flex items-center justify-center gap-2 rounded-lg hover:scale-103 active:scale-95 font-poppins text-sm font-semibold drop-shadow-xl"
        onClick={handleSaveContact}
      >
        <TfiDownload /> Save Contact
      </button>

      {/* Social Media Links */}
      <div className="w-full h-fit flex flex-col items-center gap-2">
        <h2 className="text-[#111827] font-poppins font-semibold text-base">
          Let's Connect
        </h2>

        <div className="w-full h-fit flex flex-row justify-between items-center">
          {contactLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.75 px-3.5 rounded-xl shadow-lg bg-white transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-5.5 h-5.5"
              />
            </a>
          ))}
        </div>
      </div>

      <DownloadVcard
        isOpen={showVcard}
        onClose={() => setShowVcard(false)}
        onDownload={downloadVCard}
      />
    </div>
  );
};

export default Contact;
