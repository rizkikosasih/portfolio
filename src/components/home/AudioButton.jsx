import { motion } from 'framer-motion';
import { IoPlayCircleOutline, IoPauseCircleOutline } from 'react-icons/io5';

const AudioButton = ({ isPlayMusic, handleClick }) => (
  <div className="absolute bottom-2 left-3">
    <motion.button
      className="btn-audio group"
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}>
      <span className="relative rounded-full bg-gray-900 p-1 transition-all duration-75 ease-in group-hover:bg-opacity-0">
        {!isPlayMusic ? (
          <IoPlayCircleOutline className="h-8 w-8" />
        ) : (
          <IoPauseCircleOutline className="h-8 w-8" />
        )}
      </span>
    </motion.button>
  </div>
);

export default AudioButton;
