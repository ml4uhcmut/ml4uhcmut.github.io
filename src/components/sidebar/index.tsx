"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PAGE_PATHS } from "../header";
import HamburgerIcon from "../ui/hamburger-icon";

export default function Sidebar({
  setIsMenuOpen,
}: Readonly<{ setIsMenuOpen: (value: boolean) => void }>) {
  const pathname = usePathname();

  return (
    <div className=" fixed xl:sticky top-0 right-0 z-[9999] xl:shadow-md">
      {/* Table - Mobile menu */}
      <div className=" w-[80px] px-4 h-[60px] flex items-center justify-center md:bg-black md:bg-opacity-15">
        <button
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden"
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* Navigator */}
      <div
        className=" xl:h-[calc(100vh-60px)] h-0 xl:w-[80px] w-0 flex-col items-center justify-center backdrop-blur-[3px] bg-black bg-opacity-15
        hidden xl:flex
      "
      >
        <div className="flex flex-col items-center gap-6">
          {PAGE_PATHS.map((page, index) => {
            const isActive = pathname === page.path;

            return (
              <div key={page.path} className="flex flex-col items-center">
                <Link
                  href={page.path}
                  className={`text-lg_mono transition-colors duration-300 relative
                    ${
                      isActive
                        ? "text-white scale-110"
                        : "text-gray-500 hover:text-gray-300 hover:scale-110"
                    }`}
                >
                  {"0" + (index + 1)}
                  <div
                    className={`
                      transition-all duration-300 ease-in-out 
                      ${isActive ? "w-8" : "w-0"}
                       h-[1px] bg-orange-200 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
