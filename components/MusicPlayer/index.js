import styles from './styles.module.css';

const MusicPlayer = () => {
  return (
    <div className={styles.musicPlayerContainer}>
      <iframe
        width='40%'
        height='auto'
        scrolling='no'
        frameBorder='no'
        allow='autoplay'
        src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/214969725&color=%23d22779&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
      ></iframe>
      <div
        style={{
          fontSize: '10px',
          color: '#cccccc',
          lineBreak: 'anywhere',
          wordBreak: 'normal',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          fontFamily:
            'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
          fontWeight: '100',
        }}
      ></div>
      <div className={styles.musicInformationContainer}></div>
    </div>
  );
};

export default MusicPlayer;
