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
          <SpotifyPlayer url={sound.url} image={sound.metadata.image} />
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
          <div className={styles.recommenderImageAvatar}>
            <Image
              src={sound.author.image}
              className={styles.soundRecommenderAvatar}
              width='88'
              height='88'
              alt='The avatar of the person that added this piece'
            />
          </div>
          <div className={styles.recommendationInformationContainer}>
            {' '}
            {sound.title ? (
              <h3>{sound.title}</h3>
            ) : (
              <div>
                {sound.provider === 'spotify' ? (
                  <h3>{sound.metadata.name}</h3>
                ) : (
                  <h3>{sound.metadata.title}</h3>
                )}

                {sound.metadata.artists && (
                  <h5>
                    {sound.metadata.artists.map(artist => (
                      <span key={sound._id}>
                        {artist.name}
                        {''}
                      </span>
                    ))}
                  </h5>
                )}
              </div>
            )}
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
          <div className={styles.ratingInformationContainer}>
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
