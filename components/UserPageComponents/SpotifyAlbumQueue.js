import styles from './SpotifyAlbumQueue.module.css';
import QueuedAlbumCard from './QueuedAlbumCard';

const SpotifyAlbumQueue = () => {
  return (
    <div className={styles.queuedAlbumsContainer}>
      <QueuedAlbumCard />
      <QueuedAlbumCard />
      <QueuedAlbumCard />
    </div>
  );
};

export default SpotifyAlbumQueue;
