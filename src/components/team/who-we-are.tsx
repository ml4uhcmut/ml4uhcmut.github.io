export default function WhoWeAre() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="pt-[60px]"></div>

      <div className="flex flex-col md:flex-row justify-center gap-6 items-center 2xl:max-w-[1440px] xl:px-20 md:px-6 px-4 py-20">
        <div className="flex flex-col items-end pr-4 border-r-[3px] border-white/20">
          <div className="text-9xl  bg-white bg-clip-text text-transparent bg-opacity-50 font-extralight">
            04
          </div>
          <div className=" min-w-[200px] w-fit py-2 px-3 ">
            <div className="font-medium lg:text-4xl text-3xl text-white text-nowrap tracking-widest relative uppercase">
              Our Members
              <div className="absolute -top-[2px] -left-2 w-[20px] h-3/4 border-t-[2px] border-l-[2px] border-white"></div>
              <div className="absolute -bottom-[2px] -right-2 w-[20px] h-3/4 border-b-[2px] border-r-[2px] border-white"></div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="md:text-lg text-base text-white md:text-left text-center max-w-[500px]">
            We are a research team from Ho Chi Minh University of Technology
            (HCMUT), bringing together bright undergraduates, dedicated PhD
            candidates, and alumni now working with industry leaders. Below are
            just some of our remarkable members.
          </p>
        </div>
      </div>
    </div>
  );
}
