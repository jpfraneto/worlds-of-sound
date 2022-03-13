import SoundCommentsSection from '../SoundCommentsSection';
import SpotifyPlayer from '../SpotifyPlayer';
import ReactPlayer from 'react-player';
import ReactMarkdown from 'react-markdown';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FcRating } from 'react-icons/fc';
import Moment from 'react-moment';
import Button from '../Button';

const SoundDisplayPage = ({ sound }) => {
  return (
    <div className={styles.mainContainer}>
      <Button
        link={`/sounds/${sound.selectedSoundType}`}
        text={`Back to ${sound.selectedSoundType} sounds`}
      />
      <div className={styles.playerContainer}>
        {' '}
        {sound.provider === 'spotify' ? (
          <SpotifyPlayer url={sound.url} />
        ) : (
          <div className={styles.playerWrapper}>
            {' '}
            <ReactPlayer
              className={styles.reactPlayer}
              url={sound.url}
              controls='true'
              width='100%'
              height='100%'
            />
          </div>
        )}
      </div>

      <div className={styles.soundInformation}>
        <div className={styles.soundInformationContainer}>
          <div>
            <Image
              src={sound.author.image}
              className={styles.soundRecommenderAvatar}
              width='88'
              height='88'
              alt='The avatar of the person that added this piece'
            />
          </div>
          <div>
            {' '}
            <h3>{sound.title}</h3>
            <p>
              Shared by{' '}
              <Link href={`/u/${sound.author.email}`}>
                <a>{sound.author.email}</a>
              </Link>
            </p>
            <p>
              <strong>
                <Moment fromNow>{sound.date}</Moment>
              </strong>
            </p>
          </div>
          <div className={styles.soundRating}>
            <span className={styles.ratingIcon}>
              <FcRating />
            </span>
            <p>{sound.rangeRating}/100</p>
          </div>
        </div>

        <hr />

        <div className={styles.descriptionContainer}>
          <ReactMarkdown>{sound.description}</ReactMarkdown>
        </div>
      </div>
      <hr />
      <SoundCommentsSection
        soundComments={sound.comments}
        soundId={sound._id}
      />
    </div>
  );
};

export default SoundDisplayPage;
