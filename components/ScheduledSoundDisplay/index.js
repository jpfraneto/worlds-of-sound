import styles from './styles.module.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';

const ScheduledSoundDisplay = ({ scheduledSound }) => {
  const router = useRouter();
  const [playingSound, setPlayingSound] = useState({});
  const handleRandomSchedule = () => {
    const randomScheduleId = '621ce975102a0f85dd377f90';
    router.push(`/sounds/scheduled/${randomScheduleId}`);
  };
  return (
    <div className={styles.mainContainer}>
      <h2>{scheduledSound.scheduledDate}</h2>
      <h4>{scheduledSound.author.username}</h4>
      {scheduledSound.pickedSounds.map(pickedSound => (
        <p onClick={() => setPlayingSound(pickedSound)} key={pickedSound.id}>
          {pickedSound.provider}
        </p>
      ))}
      <div className={styles.reactPlayerContainer}>
        {' '}
        {playingSound && (
          <ReactPlayer
            className={styles.reactPlayer}
            width='100%'
            controls={'true'}
            url={playingSound.url}
          />
        )}
      </div>
      <button
        className={styles.randomSoundSchedule}
        onClick={handleRandomSchedule}
      >
        Get a new random sound schedule
      </button>
    </div>
  );
};

export default ScheduledSoundDisplay;
