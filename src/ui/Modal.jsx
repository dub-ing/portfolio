import { HiInformationCircle } from "react-icons/hi2";
import Image from "../components/Image";
import { createPortal } from "react-dom";
// import { data } from "../data";

function Modal({ closeModal, modalData }) {
  const { title, image, tags, description, tech } = modalData;
  return createPortal(
    <div class="fixed top-0 w-full h-screen bg-[#000000c7] flex justify-center items-center px-2.5">
      <div class="sm:w-[40%] flex flex-col items-center mx-auto my-auto bg-[#1C1C1C] border-2 border-[#2E3A59] px- py- rounded-2xl">
        <div class="pb-3 rounded-2xl">
          <Image src={image} width="w-full" height="h-[250px]" />
          <div class="py-5 px-5">
            <div class="flex gap-3">
              {tags.map((item) => (
                <p class="text-[#C0C0C0] text-sm sm:text-xl font-extralight">
                  {item}
                </p>
              ))}
            </div>
            <h1 class="text-2xl sm:text-4xl text-[#fff] my-5 font-bold bg-[#2E3A59] py-2 px-2 rounded-lg">
              {title}
            </h1>
            <p class="text-[#C0C0C0] text-md text-2xl font-medium">
              About this project
            </p>
            <span class="text-[#C0C0C0] text-sm sm:text-xl font-extralight">
              {description}
            </span>
            <p class="text-[#fff] text-md sm:text-2xl my-3">Technlogies Used</p>
            <div class="flex gap-1.5">
              {tech.map((item) => (
                <span class="text-[#C0C0C0] rounded-lg text-sm font-extralight border border-[#2E3A59] px-2.5 py-1 ">
                  {item}
                </span>
              ))}
            </div>
            <div class="w-full mt-5 flex gap-2.5">
              <button class="bg-[#FFD700] rounded-lg py-1 px-3 w-[70%] text-black">
                View Live
              </button>
              <button
                class="bg-[#FFD700] rounded-lg py-1 px-3 w-[30%] text-black"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
