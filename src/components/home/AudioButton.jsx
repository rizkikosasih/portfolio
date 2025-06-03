import { IoPlayCircleOutline, IoPauseCircleOutline } from 'react-icons/io5';

const AudioButton = ({ isPlayMusic, handleClick }) => (
  <div className="absolute bottom-2 left-3">
    <button
      className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium bg-gray-900 text-white rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-800"
      onClick={handleClick}>
      <span className="relative p-1 transition-all ease-in duration-75 bg-gray-900 rounded-full group-hover:bg-opacity-0">
        {!isPlayMusic ? (
          <IoPlayCircleOutline className="w-8 h-8" />
        ) : (
          <IoPauseCircleOutline className="w-8 h-8" />
        )}
      </span>
    </button>
  </div>
);

export default AudioButton;
