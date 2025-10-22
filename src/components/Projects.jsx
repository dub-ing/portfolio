import { data } from "../data";
import Project from "./Project";

function Projects() {
  return (
    <div class="bg-[#1C1C1C] rounded-xl py-3 px-3 row-span-2 flex flex-col justify-between sm:col-start-2 sm:row-start-2 sm:overflow-y-auto">
      <h1 class="text-[#E0E0E0] font-bold">Projects</h1>
      {data.map((project) => (
        <Project projectData={project} key={project.id} />
      ))}
    </div>
  );
}

export default Projects;
