import styles from './QueuedMusicCard.module.css';

const QueuedMusicCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iframeContainer}>
        <iframe
          width='100%'
          height='300'
          scrolling='no'
          frameBorder='no'
          allow='autoplay'
          src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/946809619&color=%23d22779&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        ></iframe>
      </div>
      <div className={styles.btnsContainer}>
        <a
          href='https://soundcloud.com/cosmovisionrecords/cosmocast-129-djjuliimmai-a-slower-speed-of-light?in=cosmovisionrecords/sets/cosmocast-mixtapes&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
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

export default QueuedMusicCard;
