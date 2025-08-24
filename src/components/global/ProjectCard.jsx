import { motion } from 'motion/react';

export default function ProjectCard({ image, title, description, link }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="project-card">
      {/* Gambar */}
      <figure>
        <motion.img
          loading="lazy"
          src={image}
          alt={title}
          className="image"
          whileHover={{ scale: 1.05 }}
        />
      </figure>

      {/* Konten */}
      <div className="content">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p
            className="text-sm text-gray-500 mt-2 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description ?? '' }}
          />
        </div>

        <div className="mt-4">
          <a
            href={link}
            target={'_blank'}
            className="inline-block px-4 py-2 font-medium custom-btn-primary">
            Lihat Detail
          </a>
        </div>
      </div>
    </motion.div>
  );
}
