import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({
  image,
  title,
  description,
  type,
  techStack,
  link,
  repository
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <figure className="relative aspect-video w-full overflow-hidden border-b border-gray-100 bg-slate-50">
        <motion.img
          loading="lazy"
          src={image}
          alt={title}
          className="h-full w-full object-contain p-4"
          whileHover={{ scale: 1.02 }}
        />

        {type && (
          <div className="absolute right-3 top-3">
            <span className="rounded border border-blue-100 bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 shadow-sm backdrop-blur-sm">
              {type}
            </span>
          </div>
        )}
      </figure>

      <div className="flex flex-grow flex-col p-5">
        <div className="flex-grow">
          <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">{description}</p>

          <div className="mb-6 flex flex-wrap gap-2">
            {techStack?.map((tech, index) => (
              <span
                key={index}
                className="rounded border border-gray-100 bg-gray-50 px-2 py-1 text-[11px] font-medium text-gray-500">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex gap-2">
          {repository && (
            <a
              href={repository}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                !link
                  ? 'w-full bg-gray-900 text-white hover:bg-black'
                  : 'flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
              <FiGithub /> {link ? 'Code' : 'View Code'}
            </a>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
              <FiExternalLink /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
