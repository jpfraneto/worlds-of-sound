import SoundCommentsSection from '../SoundCommentsSection';
import SpotifyPlayer from '../SpotifyPlayer';
import ReactPlayer from 'react-player';
import styles from './styles.module.css';
import Link from 'next/link';

const SoundDisplayPage = ({ sound }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.playerContainer}>
        {sound.provider === 'spotify' ? (
          <SpotifyPlayer url={sound.url} />
        ) : (
          <ReactPlayer url={sound.url} controls={'true'} width='100%' />
        )}
        <div className={styles.soundInformation}>
          <h3>DMT Breathing inspired by Wim Hof</h3>
          <p>24 Febrero 2022</p>
          <hr />
          <p>
            <strong>
              {' '}
              <Link href={`/u/${sound.author}`}>
                <a>{sound.author}</a>
              </Link>
            </strong>
          </p>
          <p>{sound.description}</p>
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
