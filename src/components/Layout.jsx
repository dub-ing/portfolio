import Modal from "../ui/Modal";
import About from "./About";
import Contact from "./Contact";
import Copyright from "./Copyright";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Socials from "./Socials";
import Title from "./Title";

function Layout() {
  return (
    <div class="w-[100%] mx-auto bg-[#0D0D0D] grid p-2.5 sm:grid-rows-[70px_minmax(300px,_1fr)] overflow-scroll sm:h-screen sm:py-2 md:overflow-hidden">
      <Navbar />
      <div class="my-3 grid gap-2.5 sm:grid-cols-2 sm:grid-rows-[1fr_1fr_1fr_30px]">
        <Title />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Socials />
        <Copyright />
      </div>
    </div>
  );
}

export default Layout;
