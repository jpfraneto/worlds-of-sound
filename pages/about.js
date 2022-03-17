import styles from '../styles/About.module.css';
import Image from 'next/image';
import ReactPlayer from 'react-player';

const About = () => {
  return (
    <main className={styles.aboutMainContainer}>
      <div className={styles.playerContainer}>
        <ReactPlayer
          className={styles.reactPlayer}
          width='100%'
          height='100%'
          url='https://www.youtube.com/watch?v=YxnKBMblrXk'
        />
      </div>
    </main>
  );
};

export default About;
