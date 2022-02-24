import SoundCommentsSection from '../SoundCommentsSection';
import ReactPlayer from 'react-player';
import styles from './styles.module.css';
import Link from 'next/link';

const SoundDisplayPage = ({ sound }) => {
  const username = 'jpfraneto';
  console.log('the sound is: ', sound);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.playerContainer}>
        <ReactPlayer url={sound.url} controls='true' width='100%' />
        <div className={styles.soundInformation}>
          <h3>DMT Breathing inspired by Wim Hof</h3>
          <p>24 Febrero 2022</p>
          <hr />
          <p>
            <strong>
              {' '}
              <Link href={`/u/${username}`}>
                <a>jpfraneto</a>
              </Link>
            </strong>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Blanditiis, nesciunt cupiditate! Ipsa velit sit, non enim modi qui
            maiores? Repellendus perspiciatis aut delectus saepe odio ipsum
            veritatis cupiditate laboriosam inventore!
          </p>
        </div>
        <hr />
        <SoundCommentsSection
          soundComments={sound.comments}
          soundId={sound._id}
        />
      </div>
    </div>
  );
};

export default SoundDisplayPage;
