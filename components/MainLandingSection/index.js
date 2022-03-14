import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

const MainLandingSection = ({ scheduledDays }) => {
  console.log('the scheduled days are: ', scheduledDays);
  const router = useRouter();
  const [winWidth, setWinWidth] = useState(0);
  const [winHeight, setWinHeight] = useState(0);
  useEffect(() => {
    setWinWidth(window.innerWidth);
    setWinHeight(window.innerHeight);
  }, []);
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
    </section>
  );
};

export default MainLandingSection;
