import CTA from '../components/global/CTA.jsx';
import SkillsList from '../components/skill/SkillsList';
import ExperienceTimeline from '../components/skill/ExperienceTimeline';
import Project from '../components/skill/Project.jsx';

const Skills = () => (
  <section className="max-container">
    <SkillsList />

    <ExperienceTimeline />

    <Project />

    <CTA />
  </section>
);

export default Skills;
