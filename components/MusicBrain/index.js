import { FaSoundcloud, FaYoutube } from 'react-icons/fa';
import styles from './styles.module.css';

const MusicBrain = () => {
  return (
    <div>
      <h2>
        Sound Brain{' '}
        <span
          className={`${styles.musicBtn} ${styles.soundcloud}`}
          onClick={() => alert('soundcloud')}
        >
          <FaSoundcloud />
        </span>
        <span
          className={`${styles.musicBtn} ${styles.youtube}`}
          onClick={() => alert('youutbe')}
        >
          <FaYoutube />
        </span>
      </h2>
    </div>
  );
};

export default MusicBrain;
