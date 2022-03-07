import styles from './SpotifyInformationCard.module.css';
import Image from 'next/image';
import { FaCommentDots } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';

const SpotifyInformationCard = () => {
  return (
    <div className={styles.albumCardContainer}>
      <Image
        src='https://i.scdn.co/image/ab67616d0000b273d39d137c4a8ab01828eddc9f'
        width={150}
        height={150}
        alt='image'
      />
      <div className={styles.btnsContainer}>
        <a
          href='https://soundcloud.com/cosmovisionrecords/cosmocast-129-djjuliimmai-a-slower-speed-of-light?in=cosmovisionrecords/sets/cosmocast-mixtapes&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
          target='_blank'
          rel='noreferrer'
        >
          Listen
        </a>
        <a>Visit</a>
      </div>
      <div className={styles.reactionsContainer}>
        <h4>
          <span>
            8 <FaCommentDots />
          </span>
          <span>
            12 <BiLike />
          </span>
        </h4>
      </div>
    </div>
  );
};

export default SpotifyInformationCard;
