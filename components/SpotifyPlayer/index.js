import styles from './styles.module.css';
import { BsSpotify } from 'react-icons/bs';

const SpotifyPlayer = ({ url }) => {
  return (
    <div className={styles.spotifyContainer}>
      <p>
        The provider is spotify, click this button to listen to the album in
        their app!
      </p>
      <div className={styles.spotifyBtnContainer}>
        <BsSpotify />

        <a href={url} target='_blank' className={styles.spotifyBtn}>
          Listen in Spotify
        </a>
        <BsSpotify />
      </div>
    </div>
  );
};

export default SpotifyPlayer;
