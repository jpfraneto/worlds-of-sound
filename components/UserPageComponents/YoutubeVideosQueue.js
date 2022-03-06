import styles from './YoutubeVideosQueue.module.css';
import QueuedVideoCard from './QueuedVideoCard';

const YoutubeVideosQueue = () => {
  return (
    <div className={styles.queuedVideosContainer}>
      <QueuedVideoCard />
      <QueuedVideoCard />
      <QueuedVideoCard />
    </div>
  );
};

export default YoutubeVideosQueue;
