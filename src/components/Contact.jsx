import { HiArrowUpRight } from "react-icons/hi2";
import Image from "./Image";
import { TbBackground } from "react-icons/tb";

function Contact() {
    return (
      <div class="bg-[#FFD700] rounded-xl py-3 px-3 flex flex-col justify-between">
        <div class="flex justify-between items-center">
          <span class="text-[#2e3a59] text-sm">
            For Work & <br />
            Expertise
          </span>
          <div class='cursor-pointer'>
          <Image icon={<HiArrowUpRight size="1.5em" color="#2e3a59" />} />
          </div>
        </div>
        <div class="">
          <p class="text-[#2e3a59] text-4xl">GET IN TOUCH.</p>
        </div>
      </div>
    );
}

export default Contact
