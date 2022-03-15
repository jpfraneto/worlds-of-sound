import styles from './styles.module.css';
import Link from 'next/link';
import { AiFillPlayCircle, AiOutlineComment } from 'react-icons/ai';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import { BsSpotify } from 'react-icons/bs';
import { FaSoundcloud } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';

const SoundElementCard = ({ sound, setChosenElement }) => {
  return (
    <div className={styles.soundElementCardContainer}>
      <div className={styles.playerContainer}>
        {/* <span
          className={styles.playIcon}
          onClick={() => setChosenElement(sound)}
        >
          <AiFillPlayCircle />
        </span> */}
        {sound.provider === 'spotify' ? (
          <div className={styles.albumCoverContainer}>
            <Image
              alt='Album Cover'
              src={sound.metadata?.image?.url}
              width={150}
              height={150}
            />
          </div>
        ) : (
          <ReactPlayer
            width='100%'
            height='100%'
            className={styles.reactPlayer}
            url={sound.url}
          />
        )}
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
