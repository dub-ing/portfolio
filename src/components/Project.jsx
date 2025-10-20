import { HiArrowUpRight } from "react-icons/hi2";
import Image from "./Image";
import { useState } from "react";
import Modal from "../ui/Modal";

function Project({ projectData }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const {title, image, tags, tech } = projectData;
  console.log(title);
  function handleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div class="my-3 py-3 px-3 flex flex-col justify-between gap-1 rounded-2xl border border-[#C0C0C0]">
        <Image src={image} height="h-[200px]" width="w-full" />
        <div class="">
          <h3 class="text-[#E0E0E0] font-[roboto] my-2 ">
            {title}
            <span class="float-end" onClick={handleModal}>
              <HiArrowUpRight size="1.2em" color="#C0C0C0" />
            </span>
          </h3>

          <div class="flex gap-3">
            {tags.map((item) => (
              <p class="text-[#C0C0C0] text-sm sm:text-xl font-extralight">
                {item}
              </p>
            ))}
          </div>

          <div class="flex gap-1.5 flex-wrap my-2">
            {tech.map((item) => (
              <span class="text-[#C0C0C0] rounded-lg text-sm font-extralight border border-[#2E3A59] px-2.5 py-1 ">
                {item}
              </span>
            ))}
          </div>
          <div class="w-full mt-5 flex gap-2.5">
            <button class="bg-[#FFD700] rounded-lg py-1 px-3 w-[100%] text-black">
              View Live
            </button>
          </div>
        </div>
      </div>
      {isOpen && <Modal modalData={projectData} closeModal={handleModal} />}
    </div>
  );
}

export default Project;
