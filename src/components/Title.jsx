import Image from "./Image";

function Title() {
    return (
      <div class="bg-[#1C1C1C] rounded-xl py-3 px-3 box-border row-span-2 flex flex-col justify-between">
        <div class="flex justify-end">
          <Image src="profile-pic2.png" alt="picture of dev" width="w-14" />
        </div>
        <div class="">
          <h3 class="text-4xl text-start text-[#E0E0E0]">FRONTEND DEVELOPER</h3>
          <h3 class="text-4xl text-start text-[#E0E0E0]">OLAWALE OGUNDUBOYE.</h3>
          <hr class="mt-2 h-2 bg-[#2E3A59] border-0"></hr>
        </div>
      </div>
    );
}

export default Title
