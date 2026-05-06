import { skills } from '../../constants';
import { Tooltip } from 'react-tooltip';
import Divider from '../global/Divider.jsx';

const SkillsList = () => (
  <section id="skills">
    <h1 className="head-text">
      <span className="blue-gradient_text">Kemampuan</span> Saya
    </h1>
    <div className="flex flex-col">
      <div className="mt-8 flex flex-wrap justify-center gap-12 md:justify-normal">
        {skills.map((skill) => (
          <div className="block-container h-16 w-16 md:h-20 md:w-20" key={skill.name}>
            <div className="btn-back rounded-xl" />
            <div
              data-tooltip-id="skill-tooltip"
              data-tooltip-html={`<p class='font-semibold'>${skill.name}</p>`}
              className="btn-front flex items-center justify-center rounded-xl">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="h-1/2 w-1/2 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        ))}
        <Tooltip
          id="skill-tooltip"
          style={{
            background: 'linear-gradient(to right, #00c6ff, #0072ff)',
            color: 'rgb(224, 231, 225)'
          }}
        />
      </div>
    </div>

    <Divider />
  </section>
);

export default SkillsList;
