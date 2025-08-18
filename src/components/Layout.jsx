import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Project from "./Project";
import Socials from "./Socials";
import Title from "./Title";

function Layout() {
    return (
      <div class="bg-[#0D0D0D] h-screen grid overflow-scroll p-2.5">
        <Navbar />
        <div class='my-3 space-y-3 grid grid-rows-7'>
          <Title />
          <About />
          <Project />
          <Contact />
          <Socials />
        </div>
      </div>
    );
}

export default Layout
