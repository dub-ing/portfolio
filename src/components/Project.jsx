import { HiArrowUpRight } from "react-icons/hi2";
import Image from "./Image";
import Button from "../ui/Button";
import { useState } from "react";
import Modal from "../ui/Modal";

function Project() {
  const [isOpen, setIsOpen] = useState(false)
  function handleModal() {
    setIsOpen(!isOpen)
  }
  return (
    <div class="bg-[#1C1C1C] rounded-xl py-3 px-3 row-span-2 flex flex-col justify-between md:col-start-3 md:row-start-1">
      <div class="flex justify-between items-center">
        <h1 class="text-[#E0E0E0] font-bold">Projects</h1>
        <Image
          border="rounded-2xl"
          icon={<HiArrowUpRight size="1.5em" color="#C0C0C0" />}
        />
      </div>
      <div class="pb-3 my-3 flex justify-between items-center gap-1 ">
        <Image src="project-3.png" height='h-full' width='w-[48%]' />
        <Image src="project-3.png" height='h-full' width='w-[48%]' />
      </div>
      <div>
        <div class="pb-3 border-b-2 my-3 space-x-3">
          <h3 class="text-[#E0E0E0] font-[roboto] my-2 ">
            Hotel Management Dashboard{" "}
            <span class="float-end" onClick={handleModal}>
              <HiArrowUpRight size="1.2em" color="#C0C0C0" />
            </span>
          </h3>
          <Button>Reactjs</Button>
          <Button>Styled-components</Button>
        </div>
        <div class="pb-3 border-b-2 my-3 space-x-3">
          <h3 class="text-[#E0E0E0] font-[roboto] my-2 ">
            Hotel Management Dashboard{" "}
            <span class="float-end">
              <HiArrowUpRight size="1.2em" color="#C0C0C0" />
            </span>
          </h3>
          <Button>Reactjs</Button>
          <Button>Tailwind</Button>
          <Button>MongoDB</Button>
        </div>
        <div class="pb-3 border-b-2 my-3 space-x-3">
          <h3 class="text-[#E0E0E0] font-[roboto] my-2 ">
            Hotel Management Dashboard{" "}
            <span class="float-end">
              <HiArrowUpRight size="1.2em" color="#C0C0C0" />
            </span>
          </h3>
          <Button>Reactjs</Button>
          <Button>Redux</Button>
        </div>
      </div>
      {isOpen && <Modal closeModal={handleModal} />}
    </div>
  );
}

export default Project;
