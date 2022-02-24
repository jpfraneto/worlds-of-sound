import styles from '../styles/About.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <main className={styles.aboutMainContainer}>
      <div className={styles.aboutImageContainer}>
        <Image src='/images/ozora.jpg' layout='fill' />
      </div>
      <div className={styles.aboutTextContainer}>
        <p>Here, we celebrate humanity.</p>
        <p>Share, please share.</p>
        <p>For that is what builds up our strength.</p>

        <p>
          Welcome, to the
          <span className={styles.rainbowText}> Worlds of Sound</span>, that
          each of us carries in his cells.
        </p>
      </div>
    </main>
  );
};

export default About;
