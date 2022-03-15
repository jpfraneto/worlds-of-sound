import styles from './styles.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import SoundElementCard from '../SoundElementCard';
import SpotifyPlayer from '../SpotifyPlayer';
import ReactPlayer from 'react-player';
import Link from 'next/link';

const SoundsListDisplay = ({ sounds }) => {
  const [chosenElement, setChosenElement] = useState(null);
  const router = useRouter();
  return (
    <>
      <div className={styles.topNav}>
        <h2>{router.query.type}</h2>
      </div>
      <div className={styles.soundElementsContainer}>
        <div className={styles.innerSoundsContainer}>
          {sounds.length > 0 ? (
            <>
              {sounds.map(sound => (
                <SoundElementCard
                  sound={sound}
                  key={sound._id}
                  setChosenElement={setChosenElement}
                />
              ))}
            </>
          ) : (
            <div className={styles.noSoundsContainer}>
              <h2 className={styles.noSoundsMsg}>
                There are no sounds here :(
              </h2>
            </div>
          )}
        </div>
      </div>
      {chosenElement && (
        <div className={styles.playerContainer}>
          {chosenElement.provider === 'spotify' ? (
            <SpotifyPlayer url={chosenElement.url} />
          ) : (
            <ReactPlayer
              width='100%'
              height='100%'
              url={chosenElement.url}
              controls='true'
            />
          )}
        </div>
      )}
    </>
  );
};

export default SoundsListDisplay;
