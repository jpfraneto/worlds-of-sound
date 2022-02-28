import styles from './styles.module.css';
import SoundScheduling from '../SoundScheduling';

const MusicBrain = () => {
  return (
    <div>
      <h2>Sound Brain </h2>
      <p>
        This is for creating playlists so that I dont have to search for music
        before getting into the deep work.
      </p>
      <SoundScheduling />
    </div>
  );
};

export default MusicBrain;
