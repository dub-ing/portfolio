import Modal from "../ui/Modal";
import About from "./About";
import Contact from "./Contact";
import Copyright from "./Copyright";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Title from "./Title";

function Layout() {
  return (
    <div class="w-[100%] mx-auto bg-[#0D0D0D] grid p-2.5 gap-2 sm:grid-rows-[6%_minmax(300px,_1fr)] overflow-scroll sm:h-screen xl:overflow-hidden">
      <Navbar />
      <div class="grid gap-2.5 sm:grid-cols-2 sm:grid-rows-[1fr_1fr_1fr_40px] lg:grid-cols-3 lg:grid-rows-[1fr_1fr_40px]">
        <Title />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Copyright />
      </div>
    </div>
  );
}

export default Layout;
