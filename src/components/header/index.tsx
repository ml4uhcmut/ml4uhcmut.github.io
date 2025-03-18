"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoIcon from "@images/logo.svg";
import Image from "next/image";

export const PAGE_PATHS = [
  { name: "Home", path: "/" },
  { name: "Publications", path: "/researches" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export default function Sidebar() {
  const pathName = usePathname();

  return (
    <div
      className="w-full flex items-center justify-between fixed top-0 left-0 z-[999]
    xl:px-10 md:px-6 px-4 shadow-md bg-black bg-opacity-20
    h-[60px] backdrop-blur-[6px]"
    >
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Image src={logoIcon} alt="logo" width={30} height={30} />
        <div>
          <p className="leading-none font-semibold text-white text-xs">
            HCMUT - 2025
          </p>
          <div className="text-white text-xl font-semibold tracking-tighter">
            AI Tech Lab
          </div>
        </div>
      </div>

      {/* Navigator */}
      <div className=" items-center justify-center hidden  md:flex">
        {PAGE_PATHS.map((page, index) => (
          <Link key={page.path} href={page.path}>
            <div className="w-fit px-4 group flex flex-col items-center justify-center cursor-pointer">
              <div
                className={`text-base font-semibold text-white flex items-center gap-2
                `}
              >
                <span className="text-xs text-slate-500 hidden xl:inline-block">{`<0${
                  index + 1
                }/>`}</span>
                <div className="relative w-fit">
                  {page.name}
                  <div className="w-full relative mt-1">
                    <div
                      className={`absolute h-[2px] left-1/2 bg-white
                  ${pathName === page.path ? "w-1/2" : "w-0 group-hover:w-1/2"}
                  transition-all duration-200 ease-in-out
                  `}
                    ></div>

                    <div
                      className={`absolute h-[2px] right-1/2 bg-white
                  ${pathName === page.path ? "w-1/2" : "w-0 group-hover:w-1/2"}
                  transition-all duration-300 ease-in-out
                  `}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="xl:w-[100px]"></div>
    </div>
  );
}
