import Image from "next/image";
import logoIcon from "@images/logo.svg";
import arrowIcon from "@images/shared/arrow.svg";
import Link from "next/link";
import closeBlackIcon from "@images/shared/close-black.svg";
import { PAGE_PATHS } from "../header";
export default function BigMenu({
  setIsMenuOpen,
  isMenuOpen,
}: Readonly<{
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
}>) {
  return (
    <div
      className={`w-full fixed z-[999999] top-0 left-0 
      ${isMenuOpen ? "h-svh" : "h-0"}
      bg-black/70 backdrop-blur-md
      overflow-hidden transition-all duration-300 ease-in-out `}
    >
      <div className="w-full flex justify-center relative">
        <div className="w-full mt-10 sm:mx-20 mx-10 relative">
          <div className="w-full flex justify-between items-end">
            {/* Logo */}
            <div className="flex gap-2 items-center grow underline py-1">
              <Image src={logoIcon} alt="logo" width={25} height={25} />
              <div className="flex items-center gap-2">
                <div className="text-white text-xl font-bold tracking-tighter">
                  AI Tech Lab
                </div>
                <p className="leading-none font-extralight text-white text-xs italic">
                  HCMUT - VNHCMU
                </p>
              </div>
            </div>
            {/* Close */}
            <div className="bg-white rounded-t-lg -mb-5 relative shrink-0">
              <div className="top-[16px] -left-[-2px] -translate-x-full size-[19px] z-[20] absolute rounded-full">
                <div className="cornered-left w-full h-full relative overflow-hidden"></div>
              </div>

              <button
                className=" cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image src={closeBlackIcon} alt="close" />
              </button>
            </div>
          </div>
          {/* Navigator */}
          <div className="   p-4 bg-white rounded-b-lg rounded-tl-lg">
            <div className=" uppercase text-xl font-semibold mb-6 border-b pb-4">
              Navigation
            </div>
            <div className=" px-2 flex flex-col">
              {PAGE_PATHS.map((page) => (
                <Link key={page.path} href={page.path}>
                  <div
                    className="w-full group flex items-center justify-between cursor-pointer px-0 hover:px-2
                transition-all duration-300 ease-in-out relative py-1
                "
                  >
                    <div className="w-0 h-full overflow-hidden bg-[rgba(0,0,0,0.07)] group-hover:w-full transition-all duration-500 ease-in-out absolute top-0 left-0"></div>

                    <div
                      className={`text-base font-semibold text-black flex items-center gap-2
                `}
                    >
                      <div className="relative uppercase font-medium w-fit min-w-[200px] text-[#525866] group-hover:text-black">
                        {page.name}
                      </div>
                    </div>
                    <Image src={arrowIcon} alt="arrow" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
