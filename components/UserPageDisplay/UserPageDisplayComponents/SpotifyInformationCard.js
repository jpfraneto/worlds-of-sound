import styles from './SpotifyInformationCard.module.css';
import Image from 'next/image';
import { FaCommentDots } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { FcRating } from 'react-icons/fc';
import Link from 'next/link';

const SpotifyInformationCard = ({ sound }) => {
  return (
    <div className={styles.albumCardContainer}>
      <div className={styles.albumImageContainer}>
        {' '}
        <Image
          src={
            sound.metadata
              ? sound.metadata.image.url
              : 'https://i.scdn.co/image/ab67616d0000b273d39d137c4a8ab01828eddc9f'
          }
          width={150}
          height={150}
          alt='image'
        />
      </div>
      <div className={styles.btnsContainer}>
        <a href={sound.url} target='_blank' rel='noreferrer'>
          Listen
        </a>
        <Link href={`/sounds/id/${sound._id}`}>
          <a>Visit</a>
        </Link>
      </div>
      <div className={styles.reactionsContainer}>
        <h4>
          <span>
            {sound.comments ? sound.comments.length : 0} <FaCommentDots />
          </span>
          <span>
            {sound.rangeRating}/100 <FcRating />
          </span>
        </h4>
      </div>
    </div>
  );
};

export default SpotifyInformationCard;
