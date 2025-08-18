import { HiArrowUpRight } from "react-icons/hi2";
import Image from "./Image";

function About() {
  return (
    <div class="bg-[#1C1C1C] rounded-xl py-3 px-3 box-border flex flex-col justify-between">
      <div>
        <Image src="logo-pic.png" width="w-8" alt="logo" />
      </div>
      <div class="mt-15">
        <p class="text-[#E0E0E0] font-[roboto]">
          Hey! My name is Toriola Faidat, a front-end developer that is highly
          motivated and imaginative by finding inspirations in everyday things,
          pushing my own boundaries and allowing myself to think out of the
          box.
        </p>
      </div>
    </div>
  );
}

export default About;
