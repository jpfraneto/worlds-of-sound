import styles from './SoundcloudMusicQueue.module.css';
import QueuedMusicCard from './QueuedMusicCard';

const SoundcloudMusicQueue = () => {
  return (
    <div className={styles.queuedMusicContainer}>
      <QueuedMusicCard />
      <QueuedMusicCard />
      <QueuedMusicCard />
    </div>
  );
};

export default SoundcloudMusicQueue;
