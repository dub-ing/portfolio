import Image from "./Image";

function Title() {
  return (
    <div class="bg-[#1C1C1C] rounded-xl py-3 px-3 box-border max-sm:h-[400px] h-auto flex flex-col justify-between sm:h-auto">
      <div class="flex justify-between items-center">
        <h3 class="text-xl text-start text-[#C0C0C0] sm:text-xl">
          FRONTEND DEVELOPER
        </h3>
        <Image src="logo-pic.png" alt="picture of dev" width="w-12" />
      </div>
      <div class="mb-10">
        <p class="text-[#FFF] text-5xl sm:text-4xl lg:text-6xl">
          Building Your <span class="text-[#FFD700]">Projects </span>from Concept
          to Creation.
        </p>
      </div>
    </div>
  );
}

export default Title;
