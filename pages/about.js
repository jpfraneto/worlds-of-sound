import styles from '../styles/About.module.css';
import Image from 'next/image';
import ReactPlayer from 'react-player';

const About = () => {
  return (
    <main className={styles.aboutMainContainer}>
      <h3>This is what this project is all about</h3>
      <div className={styles.playerContainer}>
        <ReactPlayer
          className={styles.reactPlayer}
          height='100%'
          width='100%'
          url='https://www.youtube.com/watch?v=YxnKBMblrXk'
        />
      </div>
      <br />
      <p>Thank you for being here</p>
      <br />
      <p>
        If you have any recommendations or feedback, please write me an email to
        jpfraneto@gmail.com
      </p>
      <br />
      <p>
        If you want to make this place better,{' '}
        <a
          className={styles.forkLink}
          href='https://github.com/jpfraneto/worlds-of-sound'
          target='_blank'
          rel='noreferrer'
        >
          fork in github
        </a>
      </p>
    </main>
  );
};

export default About;
