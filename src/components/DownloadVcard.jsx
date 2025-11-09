import React from "react";
import { TfiDownload } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/images/logo.png";

const DownloadVcard = ({ isOpen, onClose, onDownload }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vcard-dialog-title"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-[360px] flex-col gap-5 rounded-3xl border border-white/20 bg-linear-to-br from-[#020617] via-[#0b1226] to-[#020617] p-6 text-white shadow-2xl transition-all duration-300"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:scale-105 hover:bg-white/20"
          onClick={onClose}
          aria-label="Close save contact dialog"
        >
          <IoMdClose size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <img src={logo} alt="Sacrosys logo" className="h-10 w-10 object-contain" />
          </div>
          <div>
            <h3
              id="vcard-dialog-title"
              className="font-poppins text-lg font-semibold tracking-wide"
            >
              Save contact and stay connected
            </h3>
            <p className="font-montserrat text-xs text-white/70">
              Instant access to Raffi’s details with a downloadable vCard.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex flex-col gap-1">
            <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-[#3B82F6]">
              Name
            </span>
            <p className="font-poppins text-base font-semibold text-white">
              Raffi Tharayan Kandthil
            </p>
            <span className="font-montserrat text-sm text-white/70">
              Chief Executive Officer • Sacrosys Technologies
            </span>
          </div>

          <div className="flex flex-col gap-2 text-sm font-montserrat text-white/80">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.24em] text-white/50">Phone</span>
              <a href="tel:+919876543210" className="text-white transition hover:text-[#3B82F6]">
                +91 98765 43210
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.24em] text-white/50">Email</span>
              <a
                href="mailto:raffi@sacrosys.com"
                className="text-white transition hover:text-[#3B82F6]"
              >
                raffi@sacrosys.com
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.24em] text-white/50">Location</span>
              <p>Dubai Internet City, Dubai, UAE</p>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.24em] text-white/50">Website</span>
              <a
                href="https://sacrosys.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition hover:text-[#3B82F6]"
              >
                sacrosys.com
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3B82F6] px-5 py-3.5 font-poppins text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(59,130,246,0.8)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(59,130,246,0.9)] active:translate-y-0"
          onClick={() => {
            onDownload?.();
            onClose?.();
          }}
        >
          <TfiDownload size={16} />
          Download vCard (.vcf)
        </button>
      </div>
    </div>
  );
};

export default DownloadVcard;
