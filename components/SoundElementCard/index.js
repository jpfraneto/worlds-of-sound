import styles from './styles.module.css';
import Link from 'next/link';
import { AiFillPlayCircle, AiOutlineComment } from 'react-icons/ai';
import ReactPlayer from 'react-player';
import Image from 'next/image';

const SoundElementCard = ({ sound, setChosenElement }) => {
  console.log(sound);
  return (
    <div className={styles.soundElementCardContainer}>
      <h3>{sound.provider}</h3>
      <p>{sound.name}</p>
      <div className={styles.playerContainer}>
        {/* <span
          className={styles.playIcon}
          onClick={() => setChosenElement(sound)}
        >
          <AiFillPlayCircle />
        </span> */}
        {sound.provider === 'spotify' ? (
          <>
            <Image
              alt='Album Cover'
              src={sound.metadata?.image?.url}
              width={100}
              height={1000}
            />
          </>
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
