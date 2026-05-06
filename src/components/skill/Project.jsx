import { projects } from '../../constants/project';
import ProjectCard from '../global/ProjectCard.jsx';
import Divider from '../global/Divider.jsx';

const Project = () => (
  <section id="projects" className="my-14">
    <div className="title text-center md:text-left">
      <h1 className="head-text">Hasil Karya</h1>
      <p className="mt-4 max-w-2xl text-slate-500">
        Kumpulan proyek dan eksperimen koding yang saya kerjakan, mulai dari sistem
        backend hingga integrasi frontend.
      </p>
    </div>

    <div className="project-wrapper">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>

    <Divider />
  </section>
);

export default Project;
