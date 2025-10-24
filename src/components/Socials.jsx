import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

function Socials() {
    return (
      <ul class="flex justify-between w-full text-[#E0E0E0] lg:w-full">
        <a href="" class="flex items-center space-x-1.5">
          <span>
            <FaGithub />
          </span>
          <li class='max-md:hidden'>GITHUB</li>
        </a>
        <a href="" class="flex items-center space-x-1.5">
          <span>
            <HiMail size="1.25em" />
          </span>
          <li class='max-md:hidden'>EMAIL</li>
        </a>
        <a href="" class="flex items-center space-x-1.5">
          <span>
            <FaLinkedinIn />
          </span>
          <li class='max-md:hidden'>LINKEDIN</li>
        </a>
        <a href="" class="flex items-center space-x-1.5">
          <span>
            <FaRegFilePdf />
          </span>
          <li class='max-md:hidden'>RESUME</li>
        </a>
      </ul>
    );
}

export default Socials
