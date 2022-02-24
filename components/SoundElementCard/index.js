import styles from './styles.module.css';
import Link from 'next/link';
import { AiFillPlayCircle } from 'react-icons/ai';

const SoundElementCard = ({ sound, setChosenElement }) => {
  return (
    <div className={styles.soundElementCardContainer}>
      <h3>{sound.provider}</h3>
      <p>{sound.name}</p>
      <div>
        <span
          className={styles.playIcon}
          onClick={() => setChosenElement(sound)}
        >
          <AiFillPlayCircle />
        </span>
      </div>

      <Link href={`/sounds/id/${sound._id}`}>
        <a className={styles.goToBtn}>Go to Page</a>
      </Link>
    </div>
  );
};

export default SoundElementCard;
