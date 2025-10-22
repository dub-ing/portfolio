import { HiArrowUpRight } from "react-icons/hi2";
import Image from "./Image";

function About() {
  return (
    <div class="bg-[#1C1C1C] rounded-xl py-3 px-3 box-border flex flex-col justify-between">
      <div class="flex justify-end mt-2 animate-bounce">
        <Image src="profile-pic2.png" width='w-12' alt="busines logo" />
      </div>
      <div class="mt-12 md:w-[90%] m-auto">
        <p class="text-[#E0E0E0] md:text-2xl">
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
