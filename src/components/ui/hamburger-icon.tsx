export default function HamburgerIcon() {
  return (
    <div className=" lg:h-[32px] lg:w-[44.8px] h-[20px] w-[25px] bg-transparent">
      <div className="group w-full h-full flex flex-col relative items-center justify-center">
        <div className="w-full absolute top-0 left-0 h-full items-center justify-center">
          <div className="relative w-full h-full">
            <div className="w-[2px] left-1/2 -translate-x-1/2 h-0 group-hover:h-1/2 bg-white absolute transition-all duration-300 ease-in-out"></div>

            <div className="w-1/2 h-[2px] bg-white absolute left-1/2 group-hover:w-0 transition-all duration-[350ms] ease-in-out"></div>
            <div className="w-1/2 h-[2px] bg-white absolute right-1/2 group-hover:w-0 transition-all duration-[350ms] ease-in-out"></div>
          </div>
        </div>

        <div className="w-full h-[2px] relative">
          <div className="w-1/2 h-full absolute left-1/2 bg-white group-hover:w-[35.7%] transition-all duration-300 ease-in-out"></div>
          <div className="w-1/2 h-full absolute right-1/2 bg-white group-hover:w-[35.7%] transition-all duration-300 ease-in-out"></div>
        </div>

        <div className="w-full absolute bottom-0 left-0 h-full items-center justify-center">
          <div className="relative w-full h-full">
            {/* bottom 2px to avoid bottom flickering when stop hover over the button - weird case */}
            <div className="w-[2px] left-1/2 bottom-[2px] -translate-x-1/2 h-0 group-hover:h-1/2 bg-white absolute transition-all duration-300 ease-in-out"></div>

            <div className="w-1/2 h-[2px] bg-white absolute bottom-0 left-1/2 group-hover:w-0 transition-all duration-[350ms] ease-in-out"></div>
            <div className="w-1/2 h-[2px] bg-white absolute bottom-0 right-1/2 group-hover:w-0 transition-all duration-[350ms] ease-in-out"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
