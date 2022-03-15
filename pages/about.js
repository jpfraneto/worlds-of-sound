import styles from '../styles/About.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <main className={styles.aboutMainContainer}>
      <div className={styles.aboutImageContainer}>
        <Image
          src='/images/ozora.jpg'
          layout='fill'
          alt='Ozora Main Stage Spaceship'
        />
      </div>
      <div className={styles.aboutTextContainer}>
        <p>
          Why not see the curation of content as an act of giving and receiving
          care?
        </p>
        <p>
          I show you what I love, and I accept you sharing what you love with me
          also. We all grow.
        </p>
      </div>
    </main>
  );
};

export default About;
