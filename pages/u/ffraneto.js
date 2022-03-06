import styles from '../../styles/Ffraneto.module.css';
import { BsSpotify } from 'react-icons/bs';
import { FaSoundcloud } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import SpotifyAlbumQueue from '../../components/UserPageComponents/SpotifyAlbumQueue';
import YoutubeVideosQueue from '../../components/UserPageComponents/YoutubeVideosQueue';
import SoundcloudMusicQueue from '../../components/UserPageComponents/SoundcloudMusicQueue';
import { useState } from 'react';

const Ffraneto = () => {
  const [chosenService, setChosenService] = useState('');
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}></div>
      <div className={styles.rightDiv}>
        <div className={styles.servicePicker}>
          <div
            onClick={() => setChosenService('spotify')}
            className={styles.spotifyPickerContainer}
          >
            <BsSpotify />
          </div>
          <div
            onClick={() => setChosenService('soundcloud')}
            className={styles.soundcloudPickerContainer}
          >
            <FaSoundcloud />
          </div>
          <div
            onClick={() => setChosenService('youtube')}
            className={styles.youtubePickerContainer}
          >
            <AiFillYoutube />
          </div>
        </div>
        {chosenService === 'spotify' && (
          <div className={styles.spotifyContainer}>
            <div className={styles.logoContainer}>
              <h3>
                <BsSpotify />
              </h3>
            </div>

            <SpotifyAlbumQueue />
          </div>
        )}

        {chosenService === 'soundcloud' && (
          <div className={styles.soundcloudContainer}>
            <div className={styles.logoContainer}>
              <h3>
                <FaSoundcloud />
              </h3>
            </div>
            <SoundcloudMusicQueue />
          </div>
        )}
        {chosenService === 'youtube' && (
          <div className={styles.youtubeContainer}>
            <div className={styles.logoContainer}>
              <h3>
                <AiFillYoutube />
              </h3>
            </div>
            <YoutubeVideosQueue />
          </div>
        )}
      </div>
    </div>
  );
};

export default Ffraneto;
