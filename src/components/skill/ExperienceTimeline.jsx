import { motion } from 'framer-motion';
import { experiences } from '../../constants/experience';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Divider from '../global/Divider.jsx';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function ExperienceTimeline() {
  return (
    <section id="experiences" className="my-14">
      <div className="title">
        <h1 className="head-text">Pengalaman Kerja</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-500">
          Rekam jejak profesional saya dalam membangun solusi digital, mulai dari instansi
          pemerintahan hingga startup teknologi.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              'relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-8 transition-all hover:shadow-md',
              index === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-2 md:row-span-1',
              index === 3 ? 'md:col-span-4' : ''
            )}>
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-slate-50 opacity-60 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="rounded-2xl p-3 shadow-sm"
                      style={{ backgroundColor: exp.iconBg }}>
                      <img
                        src={exp.icon}
                        alt="icon"
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold leading-tight text-slate-900">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600">
                        {exp.company_name}
                      </p>
                      <span className="my-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {exp.date}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-600">
                  {exp.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-500">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Divider />
    </section>
  );
}
