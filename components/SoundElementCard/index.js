import styles from './styles.module.css';
import Link from 'next/link';
import { AiFillPlayCircle, AiOutlineComment } from 'react-icons/ai';

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

      <div className={styles.goToBtn}>
        <Link href={`/sounds/id/${sound._id}`} passHref>
          <a>Go to Page</a>
        </Link>
      </div>
      <p>
        <strong>
          {' '}
          <AiOutlineComment /> {sound.comments ? sound.comments.length : '0'}
        </strong>
      </p>
    </div>
  );
};

export default SoundElementCard;
