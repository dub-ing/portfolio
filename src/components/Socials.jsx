import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

function Socials() {
    return (
      <ul class="card justify-evenly text-[#C0C0C0] py-2 md:col-start-1 md:col-span-3 md:border-0 bg-[#0d0d0d]">
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
