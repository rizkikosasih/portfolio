import { motion } from 'motion/react';
import { IoPlayCircleOutline, IoPauseCircleOutline } from 'react-icons/io5';

const AudioButton = ({ isPlayMusic, handleClick }) => (
  <div className="absolute bottom-2 left-3">
    <motion.button
      className="btn-audio group"
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}>
      <span className="relative p-1 transition-all ease-in duration-75 bg-gray-900 rounded-full group-hover:bg-opacity-0">
        {!isPlayMusic ? (
          <IoPlayCircleOutline className="w-8 h-8" />
        ) : (
          <IoPauseCircleOutline className="w-8 h-8" />
        )}
      </span>
    </motion.button>
  </div>
);

export default AudioButton;
