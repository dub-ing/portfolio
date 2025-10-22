import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

function Socials() {
    return (
      <ul class="flex justify-between w-[90%] text-[#2e3a59] lg:w-[65%]">
        <a href="" class="flex items-center space-x-1.5">
          <span>
            <FaGithub />
          </span>
          <li>GITHUB</li>
        </a>
        <a href="" class="flex items-center space-x-1.5">
          <span>
            <HiMail size="1.25em" />
          </span>
          <li>EMAIL</li>
        </a>
        <a href="" class="flex items-center space-x-1.5">
          <span>
            <FaLinkedinIn />
          </span>
          <li>LINKEDIN</li>
        </a>
        <a href="" class="flex items-center space-x-1.5">
          <span>
            <FaRegFilePdf />
          </span>
          <li>RESUME</li>
        </a>
      </ul>
    );
}

export default Socials
