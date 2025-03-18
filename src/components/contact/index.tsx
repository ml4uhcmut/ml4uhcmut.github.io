import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getTrailingSlash } from "@/lib/get-trailing-slash";
import MailIconDark from "../ui/svgs/mail-icon-dark";
import locationIcon from "@images/shared/location.svg";
import ArrowIcon from "../ui/svgs/arrow-icon-dark";

const ContactPage = () => {
  const trailingSlash = getTrailingSlash();

  return (
    <div className="w-full min-h-screen relative text-white">
      {/* Main content */}
      <div className="flex flex-col items-center justify-end min-h-screen overflow-y-auto relative z-10  w-full pt-20 md:px-10 px-4 ">
        <div className="absolute w-full h-1/4 bg-white bottom-0 left-0"></div>

        {/* Section title */}
        <div className="flex flex-col items-center">
          <div className="text-9xl  bg-white bg-clip-text text-transparent bg-opacity-50 font-extralight">
            05
          </div>
          <div className=" min-w-[200px] w-fit py-2 px-3 ">
            <div className="font-medium lg:text-4xl text-3xl text-white text-nowrap tracking-widest relative uppercase">
              Contact Us
              <div className="absolute -top-[2px] -left-2 w-[20px] h-3/4 border-t-[2px] border-l-[2px] border-white"></div>
              <div className="absolute -bottom-[2px] -right-2 w-[20px] h-3/4 border-b-[2px] border-r-[2px] border-white"></div>
            </div>
          </div>

          <div className="italic">Let&apos;s talk about our next projects!</div>
        </div>

        {/* Contact information */}
        <div className="w-fit flex flex-col items-center justify-center rounded-2xl relative mt-[60px] ">
          <section
            className="flex lg:max-w-3xl  xl:max-w-5xl md:flex-row w-full flex-col items-stretch rounded-2xl pb-10
          "
          >
            {/* Content */}
            <div className=" md:w-1/2 w-full flex flex-col text-base text-black">
              <div className="px-4 py-3 bg-white text-black rounded-tl-2xl">
                We welcome collaboration proposals from industry partners,
                academic institutions, prospective graduate students, and
                research internship candidates.
              </div>

              <div className="px-4 pb-3 bg-white text-black">
                For collaboration opportunities or visit requests, please
                contact our leader,{" "}
                <span className="font-medium mx-1">Dr. Nguyen Duc Dung</span>,
                for detailed information and arrangements. Email is our primary
                point of contact.
              </div>

              {/* Email */}
              <Link
                href="mailto:dung.nguyen@hcmut.edu.vn"
                className=" z-10  group text-2xl font-medium w-full px-4
                    transition-all duration-300 ease-in-out bg-white
                    "
              >
                <div className="relative flex items-center gap-2 w-full">
                  <div
                    className="w-0 h-full absolute top-0 right-0 
                    group-hover:w-full transition-all duration-500  ease-in-out group-hover:left-0
                  "
                  ></div>
                  <div className="flex items-center z-10 gap-4 w-full border-t border-b">
                    <div className="w-0 group-hover:w-6 transition-all duration-300 ease-in-out"></div>

                    <MailIconDark />

                    <p className="text-black font-normal">Email Us</p>
                    <div className="w-0 group-hover:w-6 transition-all duration-500 ease-in-out overflow-hidden">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Location */}
              <div className="relative pt-60 p-4 bg-white rounded-bl-2xl group">
                <div className="w-full h-full absolute top-0 left-0 p-4 ">
                  <div
                    className="w-full h-full rounded-2xl relative
                   transition-all duration-300 ease-in-out bg-cover bg-center bg-no-repeat"
                  >
                    <div className="absolute top-0 left-0 rounded-2xl w-full h-full overflow-hidden">
                      <img
                        src={trailingSlash + "images/hcm-pic/no4.jpg"}
                        alt="Faculty"
                        className="w-full h-full object-cover object-center rounded-2xl"
                      />
                    </div>

                    <div
                      className="relative z-10 w-full h-full bg-gradient-to-t from-black/70 to-transparent rounded-2xl
                    
                    transition-all duration-300 ease-in-out
                    "
                    ></div>
                  </div>
                </div>
                <div className="w-full flex items-center gap-2 relative z-10">
                  {/* Title card */}
                  <div className="  w-3/6 shrink-0   relative ">
                    <div className="relative z-20 flex gap-2 py-1 items-center w-full bg-white rounded-bl-md rounded-tr-2xl h-full">
                      <Image
                        src={locationIcon}
                        alt="location"
                        width={20}
                        height={20}
                      />

                      <div className="text-balance leading-none text-base font-semibold text-black bg-bottom py-3">
                        Faculty of Computer Science and Engineering
                      </div>
                    </div>

                    {/* Decorate curve */}
                    <div className="z-10 top-0 -translate-y-full left-0 size-[22px]  absolute  rounded-full ">
                      <div className="cornered w-full h-full relative overflow-hidden"></div>
                    </div>

                    <div className=" bottom-0 right-0 translate-x-full size-[22px] z-[20]  absolute  rounded-full ">
                      <div className="cornered w-full h-full relative overflow-hidden"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div
              className=" grow self-stretch rounded-r-2xl
              relative group overflow-hidden 
              transition-all duration-500 ease-in-out bg-white
            "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.495656880097!2d106.65572007465535!3d10.772909189387625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2sHo%20Chi%20Minh%20City%20University%20of%20Technology%20(HCMUT)!5e0!3m2!1sen!2s!4v1708087524659!5m2!1sen!2s"
                className="  w-full xl:max-w-4xl lg:max-w-3xl h-full border-0"
                allowFullScreen={true}
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="HCMUT Location Map"
              />
            </div>
          </section>
        </div>
      </div>

      {/* Bottom decorator */}
    </div>
  );
};

export default ContactPage;
