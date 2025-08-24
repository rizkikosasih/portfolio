import { projects } from '../../constants/project';
import ProjectCard from '../global/ProjectCard.jsx';

const Project = () => (
  <div className={'mb-8'}>
    <div className="title py-8">
      <h1 className="head-text">Hasil Karya</h1>
      <p className="mt-4 text-slate-500">
        Menampilkan berbagai aplikasi yang pernah saya buat, dari ide hingga implementasi.
      </p>
    </div>

    <div className="project-wrapper">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
);

export default Project;
