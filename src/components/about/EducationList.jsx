import { educations } from '../../constants';
import { Tooltip } from 'react-tooltip';

const EducationList = () => (
  <div className="flex flex-wrap">
    {educations.map((education) => (
      <div className="w-1/2 my-8" key={education.name}>
        <div className="block-container w-12 h-12">
          <div className={`btn-back rounded-xl ${education.theme}`} />
          <div
            data-tooltip-id="education-tooltip"
            data-tooltip-html={`<p class='font-semibold'>${education.title}</p>`}
            className="btn-front rounded-xl flex justify-center items-center">
            <img
              src={education.iconUrl}
              className="w-1/2 h-1/2 object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-5 flex flex-col">
          <h4 className="text-2xl font-poppins font-semibold">{education.name}</h4>
          <p className="mt-2 text-slate-500">
            <span className="font-semibold">{education.periode}</span>
            <br />
            {education.schoolName}
          </p>
        </div>
      </div>
    ))}
    <Tooltip
      id="education-tooltip"
      style={{
        background: 'linear-gradient(to right, #00c6ff, #0072ff)',
        color: 'rgb(224, 231, 225)'
      }}
    />
  </div>
);

export default EducationList;
