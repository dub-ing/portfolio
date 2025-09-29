import Modal from "../ui/Modal";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Project from "./Project";
import Skills from "./Skills";
import Socials from "./Socials";
import Title from "./Title";

function Layout() {
  return (
    <div class="bg-[#0D0D0D] h-screen grid overflow-scroll p-2.5 md:grid-rows-[100px_minmax(300px,_1fr)]">
      <Navbar />
      <div class="my-3 grid gap-2.5 md:grid-cols-3 md:grid-rows-[450px_400px_50px]">
        <Title />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Socials />
        
      </div>
    </div>
  );
}

export default Layout;
