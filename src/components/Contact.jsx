import { HiArrowUpRight } from "react-icons/hi2";
import Image from "./Image";
import { TbBackground } from "react-icons/tb";

function Contact() {
  return (
    <div class="bg-bat-signal rounded-xl py-3 px-3 flex flex-col justify-between md:row-start-2">
      <div class="flex justify-between items-center md:w-[90%] md:mx-auto my-10">
        <span class="text-[#2e3a59] text-sm md:text-[1.2rem]">
          For Work & <br />
          Expertise
        </span>
        <div class="cursor-pointer animate-ping">
          <HiArrowUpRight size="1.5em" color="#2e3a59" />
        </div>
      </div>
      <div class="">
        <p class="text-[#2e3a59] text-4xl md:text-[4.5rem]">Contact Me.</p>
      </div>
    </div>
  );
}

export default Contact;
