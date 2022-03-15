import styles from './styles.module.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ScheduledSoundDisplay = ({ scheduledSound }) => {
  const router = useRouter();
  const [playingSound, setPlayingSound] = useState({});
  return (
    <div className={styles.mainContainer}>
      <h2>{scheduledSound.scheduledDate}</h2>
      <h4>{scheduledSound.author.email}</h4>
      <p>{scheduledSound.description}</p>
      <div className={styles.elementsContainer}>
        {scheduledSound.pickedSounds.map(pickedSound => (
          <div key={pickedSound._id} className={styles.reactPlayerContainer}>
            <ReactPlayer
              className={styles.reactPlayer}
              width='100%'
              height='auto'
              controls={'true'}
              url={pickedSound.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledSoundDisplay;
