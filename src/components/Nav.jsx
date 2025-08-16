import { HiMenuAlt3 } from "react-icons/hi";

function Nav() {
  return (
    <>
      <div class="sm:hidden flex items-center">
        <HiMenuAlt3 size="2em" color="#C0C0C0" />
      </div>
      <ul class="hidden text-[#E0E0E0] sm:flex items-center w-75 justify-between">
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </>
  );
}

export default Nav;
