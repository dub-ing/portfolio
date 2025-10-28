import { HiArrowUpRight } from "react-icons/hi2";
import Image from "./Image";
import { skills } from "../data";

function Skills() {
  return (
    <div class="bg-bat-signal rounded-xl py-3 px-3 flex flex-col justify-between gap-10 sm:col-start-2 sm:row-start-1">
      <div class="flex justify-between items-center lg:m-auto lg:w-[80%]">
        <span class="text-[#2e3a59] text-sm sm:text-xl font-extralight">
          Skills & Stacks
        </span>
        {/* <div class="animate-bounce">
          <Image src="profile-pic2.png" width="w-12" alt="busines logo" />
        </div> */}
      </div>
      <div class="lg:m-auto lg:w-[80%]">
        <p class="text-[#2e3a59] sm:text-lg lg:text-2xl">
          I am experienced in building and maintaining responsive websites, love
          problem-solving, working within a team to turn ideas to product.
        </p>
        <div class="flex flex-wrap gap-1.5 my-2">
          {skills.map((skill) => (
            <span class="text-[#2E3A59] rounded-lg text-sm font-normal border border-[#2E3A59] px-2.5 py-1">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
