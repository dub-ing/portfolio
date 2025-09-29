import { HiInformationCircle } from "react-icons/hi2";
import Image from "../components/Image";
import { createPortal } from "react-dom";

function Modal({closeModal}) {
    return createPortal(
      <div class="fixed top-0 w-full h-screen bg-[#00000090] flex justify-center items-center">
        <div class="w-1/3 h-[80%] flex flex-col items-center mx-auto my-auto bg-white px-5 py-5 rounded-2xl">
          <div class="w-full flex justify-between py-2.5 text-3xl font-semibold border-b-2 mb-2.5">
            <h1>Alearners</h1>
            <button onClick={closeModal}>X</button>
          </div>

          <div class="mt-2.5 overflow-y-scroll pb-3">
          <Image src="project-3.png" width="" height="" />
            <p class="text-xl font-light my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              nesciunt sint numquam voluptates reiciendis sit?
            </p>
            <ul>
              <p class="py-1 px-5 rounded-lg bg-neutral-500 w-fit my-2 text-lg">
                Features
              </p>
              <li>
                <p class="text-xl font-medium">
                  Lorem ipsum{" - "}
                  <span class="font-light">
                    dolor sit amet consectetur adipisicing elit. Nobis, dolores?
                  </span>
                </p>
              </li>
              <li>
                <p class="text-xl font-medium">
                  Lorem ipsum{" - "}
                  <span class="font-light">
                    dolor sit amet consectetur adipisicing elit. Nobis, dolores?
                  </span>
                </p>
              </li>
              <li>
                <p class="text-xl font-medium">
                  Lorem ipsum{" - "}
                  <span class="font-light">
                    dolor sit amet consectetur adipisicing elit. Nobis, dolores?
                  </span>
                </p>
              </li>
            </ul>
            <div class='mt-4 border-t-2 py-3 flex items-center gap-2.5'>
              <button class='py-2 px-2 border rounded-lg'>Reactjs</button>
              <button class='py-2 px-2 border rounded-lg'>ReactQuery</button>
              <button class='py-2 px-2 border rounded-lg'>Supabase</button>
              <button class='py-2 px-2 border rounded-lg'>Tailwind</button>
            </div>
            <div class=''>
              <button class='bg-amber-300 w-full py-2 rounded-lg'>View Live</button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
}

export default Modal
