import { useState, useRef, useEffect } from 'react';
import HomeInfo from '../components/HomeInfo';
import Home3DScene from '../components/home/Home3DScene';
import AudioButton from '../components/home/AudioButton';
import bgMusic from './../assets/music/bg-music.mp3';

const Home = () => {
  const audioRef = useRef(new Audio(bgMusic));
  audioRef.current.volume = 0.65;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayMusic, setIsPlayMusic] = useState(false);

  const handlebtnAudioClick = (e) => {
    setIsPlayMusic(!isPlayMusic);
    e.currentTarget.blur();
  };

  useEffect(() => {
    if (isPlayMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayMusic]);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 items-center justify-center flex">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Home3DScene
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
      />
      <AudioButton isPlayMusic={isPlayMusic} handleClick={handlebtnAudioClick} />
    </section>
  );
};

export default Home;
