import Logo from "./Logo"
import Nav from "./Nav";

function Navbar() {
    return (
      <div class="bg-[#1C1C1C] border-2 border-[#2E3A59] rounded-xl py-1 px-3 flex justify-between">
        <Logo />
        <Nav />
      </div>
    );
}

export default Navbar
