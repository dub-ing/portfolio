import { HiArrowUpRight } from "react-icons/hi2";
import Image from "./Image";
import Socials from './Socials'
import { TbBackground } from "react-icons/tb";

function Contact() {
  return (
    <div class="bg-bat-signal rounded-xl py-3 px-3 flex flex-col justify-between sm:row-start-3 max-sm:h-[200px] lg:row-start-2">
      <div class="flex justify-between items-center my-1 lg:m-auto lg:w-[80%]">
        <span class="text-[#2e3a59] text-sm sm:text-xl font-extralight">
          For Work & Expertise
        </span>
        <div class="cursor-pointer animate-ping">
          <HiArrowUpRight size="1.5em" color="#2e3a59" />
        </div>
      </div>
      <div class="lg:m-auto lg:w-[80%]">
        <p class="text-[#2e3a59] text-5xl md:text-[4.5rem] lg:text-6xl">
          Contact Me.
        </p>
        <Socials />
      </div>
    </div>
  );
}

export default Contact;
