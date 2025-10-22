import { HiArrowUpRight } from "react-icons/hi2";
import Image from "./Image";

function About() {
  return (
    <div class="bg-[#1C1C1C] rounded-xl py-3 px-3 box-border flex flex-col justify-between gap-10 sm:col-start-1 sm:row-start-2 lg:col-start-2">
      <div class="lg:m-auto lg:w-[80%]">
        <span class="text-[#C0C0C0] text-sm md:text-xl font-extralight">
          About Me
        </span>
      </div>
      <div class="lg:m-auto lg:w-[80%]">
        <p class="text-[#FFF] sm:text-lg font-extralight lg:text-2xl">
          Hey! My name is Olawale Ogunduboye, a front-end developer that is
          highly motivated and imaginative by finding inspirations in everyday
          things, pushing my own boundaries and allowing myself to think out of
          the box.
        </p>
      </div>
    </div>
  );
}

export default About;
