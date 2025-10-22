import { HiArrowUpRight } from "react-icons/hi2";
import Image from "./Image";

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
          Skilled in HTML/CSS, Bootstrap, Tailwind, JavaScript, ReactJs, Redux,
          React Query Wordpress, GIT & GITHUB, Figma. I have experience in
          building and maintaining responsive websites. I love problem-solving,
          working within a team, and bouncing ideas off each other to find a
          solution.
        </p>
      </div>
    </div>
  );
}

export default Skills;
