import React from "react";
import porfile from "../assets/images/rafi.png";
import logo from "../assets/images/logo.png";
import qrImage from "../assets/images/profile-qr.jpeg";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isModalFlipped, setIsModalFlipped] = React.useState(false);

  React.useEffect(() => {
    if (isModalOpen) {
      const frame = requestAnimationFrame(() => setIsModalFlipped(true));
      return () => cancelAnimationFrame(frame);
    }

    setIsModalFlipped(false);
    return undefined;
  }, [isModalOpen]);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <>
      <div
        className="relative flex h-[313px] w-full flex-col gap-2.5 rounded-[16px] bg-radial from-[#0546BE] to-[#220258] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-gif.gif')" }}
      >
        {/* overlay  */}
        <div className="absolute inset-0 z-0 rounded-[16px] bg-[#01001DB2]" />

        {/* QR badge */}
        <button
          type="button"
          className="absolute right-3 top-3 z-30 flex h-[42px] w-[42px] items-center justify-center rounded-none border border-white/70 bg-white shadow-lg transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl"
          onClick={toggleModal}
          aria-label="View QR code"
        >
          <img
            src={qrImage}
            alt="QR code"
            className="h-[40px] w-[40px] object-contain"
            style={{
              transform: isModalOpen ? "rotateY(180deg)" : "rotateY(0deg)",
              transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
              backfaceVisibility: "hidden",
            }}
          />
        </button>

        {/* content  */}
        <div className="relative z-20 flex h-full w-full flex-col items-center gap-2.5 px-3.5 py-5.5 text-white">
          {/* image  */}
          <div className="aspect-square h-[112px] overflow-hidden rounded-full border-4 border-white bg-white">
            <img
              src={porfile}
              alt="profile image"
              className="h-full object-cover object-center"
            />
          </div>

          {/* heading  */}
          <h1 className="font-poppins text-[24px] font-bold text-white">
            Raffi Tharayan Kandthil
          </h1>
          <img src={logo} alt="logo" className="h-7 w-auto" />
          <p className="font-montserrat text-xs font-normal leading-loose text-center text-[#DDDDDD]">
            CEO at Sacrosys Technologies | Digital Transformation & Cybersecurity Leader
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative flex h-[260px] w-[260px] items-center justify-center rounded-2xl border border-white/30 bg-white/5 p-4 shadow-2xl"
            style={{ perspective: "1300px" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg"
              style={{
                transform: isModalFlipped ? "rotateY(0deg)" : "rotateY(-180deg)",
                transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={qrImage}
                alt="Raffi Tharayan Kandthil QR code"
                className="h-full w-full object-cover"
                style={{
                  transform: "rotateY(0deg)",
                  backfaceVisibility: "hidden",
                }}
              />
            </div>

            <button
              type="button"
              className="absolute right-3 top-3 h-9 w-9 rounded-full bg-black/70 text-white shadow-lg transition hover:bg-black/90"
              onClick={toggleModal}
              aria-label="Close QR modal"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
