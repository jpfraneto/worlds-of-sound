import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import Image from 'next/image';

const MainLandingSection = ({ scheduledDays }) => {
  console.log('the scheduled days are: ', scheduledDays);
  const router = useRouter();
  const [winWidth, setWinWidth] = useState(0);
  const [winHeight, setWinHeight] = useState(0);
  const [recentlyAddedSounds, setRecentlyAddedSounds] = useState([]);
  useEffect(() => {
    setWinWidth(window.innerWidth);
    setWinHeight(window.innerHeight - 100);
    console.log('inside the use effect, before calling the function');
    getRecentSounds();
  }, []);
  const getRecentSounds = async () => {
    console.log('inside the get recent sounds function');
    const response = await fetch('/api/sounds/recents');
    const data = await response.json();
    setRecentlyAddedSounds(data);
  };
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  const getRandomCoords = (w, h) => {
    let randomTop = getRandomNumber(0, winHeight);
    let randomLeft = getRandomNumber(0, winWidth);
    return { top: `${randomTop}px`, left: `${randomLeft}px` };
  };
  return (
    <section className={`${styles.firstSection} ${styles.sectionContainer}`}>
      <h2>Worlds of Sound</h2>
      {scheduledDays.map((scheduledDay, index) => (
        <div
          className={styles.element}
          style={getRandomCoords()}
          key={index}
          onClick={() =>
            router.push(
              `/u/${scheduledDay.author.email}/scheduled/${scheduledDay._id}`
            )
          }
        >
          ⭐️
        </div>
      ))}
      <div className={styles.lastAddedSoundsContainer}>
        <div className={styles.topBanner}>
          <p className={styles.marquee}>
            <span>RECENTLY ADDED SOUNDS</span>
          </p>
        </div>
        <div className={styles.playersContainer}>
          {' '}
          {recentlyAddedSounds &&
            recentlyAddedSounds.map(recentSound => (
              <div key={recentSound._id} className={styles.playerContainer}>
                <Link href={`/sounds/id/${recentSound._id}`} passHref>
                  <Image
                    src={`https://i.ytimg.com/vi/${recentSound.soundId}/sddefault.jpg`}
                    width='176px'
                    height='99px'
                    alt='Thumbnail of this video'
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MainLandingSection;
