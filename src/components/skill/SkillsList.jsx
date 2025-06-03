import { skills } from '../../constants';
import { Tooltip } from 'react-tooltip';

const SkillsList = () => (
  <div className="flex flex-col">
    <div className="mt-16 flex flex-wrap gap-12 justify-center md:justify-normal">
      {skills.map((skill) => (
        <div className="block-container w-16 h-16 md:w-20 md:h-20" key={skill.name}>
          <div className="btn-back rounded-xl" />
          <div
            data-tooltip-id="skill-tooltip"
            data-tooltip-html={`<p class='font-semibold'>${skill.name}</p>`}
            className="btn-front rounded-xl flex justify-center items-center">
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="w-1/2 h-1/2 object-contain"
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
);

export default SkillsList;
