import * as React from 'react';
import Playing from './components/playing';
import { Config } from './resource/config';

const App: React.FC = () => {

  const RandomSongs = (): number => {
    const length = Config.length;
    const RandomIndex = Math.floor(Math.random() * length);
    return RandomIndex;
  }

  const SongsNumber: number = RandomSongs();
  const [songs, setSongs] = React.useState(Config);
  const [isPlaying, setisPlaying] = React.useState(false);
  const [currentSong, setCurrentSong] = React.useState(Config[SongsNumber]);
  const audioElement = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    isPlaying ? audioElement.current?.play() :
      audioElement.current?.pause();
  }, [isPlaying, currentSong])


  return (
    <div>
      <audio
        src={currentSong.source}
        ref={audioElement}
      />
      <Playing
        {...{
          songs,
          isPlaying,
          audioElement,
          setSongs,
          setisPlaying,
          currentSong,
          setCurrentSong,
        }}
      />
    </div>
  );
}

export default App;
