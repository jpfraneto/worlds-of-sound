import styles from './styles.module.css';
import { BsSpotify } from 'react-icons/bs';
import Image from 'next/image';

const SpotifyPlayer = ({ url, image }) => {
  return (
    <div className={styles.spotifyContainer}>
      <Image
        className={styles.albumImageElement}
        src={image.url}
        width='200'
        height='200'
      />

      <div className={styles.spotifyBtnContainer}>
        <BsSpotify />

        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className={styles.spotifyBtn}
        >
          Listen in Spotify
        </a>
        <BsSpotify />
      </div>
    </div>
  );
};

export default SpotifyPlayer;
