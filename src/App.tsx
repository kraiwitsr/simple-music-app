import * as React from 'react';
import Playing from './components/playing';
import { Config } from './resource/config';

const App: React.FC = () => {

  const RandomSongs = (): number => {
    const length = Config.length;
    const RandomIndex = Math.floor(Math.random() * length);
    return RandomIndex;
  }

  const songIndex: number = RandomSongs();
  const [songs, setSongs] = React.useState(Config);
  const [isPlaying, setisPlaying] = React.useState(false);
  const [currentSong, setCurrentSong] = React.useState(Config[songIndex]);
  const audioElement = React.useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = React.useState<string | null>(null);
  const [currentTime, setCurrentTime] = React.useState<string | null>("00:00");
  const [OnEnded, setOnEnded] = React.useState<boolean>(false);

  React.useEffect(() => {
    isPlaying ? audioElement.current?.play()
      : audioElement.current?.pause();
  }, [isPlaying, currentSong]);

  const TimeFormat = (time: number): string => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  const onLoadedMetadata = (): void => {
    const duration = audioElement.current?.duration!;
    setDuration(TimeFormat(duration));
  }

  const currentTimeUpdate = (): void => {
    const currentTime = audioElement.current?.currentTime!;
    setCurrentTime(TimeFormat(currentTime));
  }

  const onEnded = (): void => {
    setOnEnded(true);
  }

  return (
    <div>
      <audio
        src={currentSong.source}
        ref={audioElement}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={currentTimeUpdate}
        onEnded={onEnded}
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
          duration,
          currentTime,
          setOnEnded,
          OnEnded,
        }}
      />
    </div>
  );
}

export default App;