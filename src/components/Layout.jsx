import Modal from "../ui/Modal";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Socials from "./Socials";
import Title from "./Title";

function Layout() {
  return (
    <div class="w-[80%] mx-auto bg-[#0D0D0D] grid p-2.5 md:grid-rows-[100px_minmax(300px,_1fr)] sm:h-screen max-[770px]:w-[100%] overflow-scroll md:overflow-hidden">
      <Navbar />
      <div class="my-3 grid gap-2.5 md:grid-cols-3 md:grid-rows-[450px_400px_50px]">
        <Title />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Socials />
      </div>
    </div>
  );
}

export default Layout;
