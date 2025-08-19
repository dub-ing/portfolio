import { HiArrowUpRight } from "react-icons/hi2";
import Image from "./Image";

function Skills() {
  return (
    <div class="bg-bat-signal rounded-xl py-3 px-3 flex flex-col justify-between md:col-start-2">
      <div class="flex justify-between items-center
       md:w-[90%] md:m-auto">
        <span class="text-[#2e3a59] text-sm md:text-[1.2rem]">
          Skills & <br />
          Stacks
        </span>
        <div class="animate-bounce">
          <Image src="profile-pic2.png" width="w-12" alt="busines logo" />
        </div>
      </div>
      <div class="mt-15 md:w-[90%] md:m-auto">
        <p class="text-[#2e3a59] md:text-2xl">
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
