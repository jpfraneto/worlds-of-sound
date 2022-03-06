import styles from './QueuedVideoCard.module.css';

const QueuedVideoCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iframeContainer}>
        <iframe
          src='https://www.youtube.com/embed/A3uhsPEPfrk'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.btnsContainer}>
        <a
          href='https://www.youtube.com/watch?v=A3uhsPEPfrk&ab_channel=Andrej%C5%A0unko'
          target='_blank'
          rel='noreferrer'
        >
          Listen
        </a>
        <a>Delete</a>
      </div>
    </div>
  );
};

export default QueuedVideoCard;
