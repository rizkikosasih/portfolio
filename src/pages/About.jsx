import imgAbout from './../assets/images/photo.jpg';
import CTA from '../components/global/CTA.jsx';
import AboutText from '../components/about/AboutText';
import EducationList from '../components/about/EducationList';

const About = () => (
  <section className="max-container">
    <AboutText imgAbout={imgAbout} />
    <h1 className="head-text py-8">Pendidikan</h1>
    <EducationList />
    <hr className="border-slate-200" />
    <CTA />
  </section>
);

export default About;
