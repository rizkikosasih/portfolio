import CTA from './../components/CTA';
import SkillsList from '../components/skill/SkillsList';
import ExperienceTimeline from '../components/skill/ExperienceTimeline';

const Skills = () => (
  <section className="max-container">
    <h1 className="head-text">
      <span className="blue-gradient_text">Kemampuan</span> Saya
    </h1>
    <SkillsList />
    <div className="title py-8">
      <h1 className="head-text">Pengalaman Kerja</h1>
      <p className="mt-4 text-slate-500">
        Selama perjalanan saya dalam membangun dan mengembangkan website, saya telah
        memperoleh berbagai pengalaman berharga. Berikut adalah rangkuman pencapaian dan
        keahlian saya:
      </p>
    </div>
    <ExperienceTimeline />
    <hr className="border-slate-200" />
    <CTA />
  </section>
);

export default Skills;
