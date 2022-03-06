import styles from './QueuedAlbumCard.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const QueuedAlbumCard = () => {
  const router = useRouter();
  const listenToAlbumInSpotify = () => {
    router.push('www.google.com');
  };
  return (
    <div className={styles.albumCardContainer}>
      <Image
        src='https://i.scdn.co/image/ab67616d0000b273d39d137c4a8ab01828eddc9f'
        width={150}
        height={150}
        alt='image'
      />
      <p>
        <strong>The Isis Protocol</strong>
      </p>
      <p>Kevin Wrenn</p>
      <p>1998</p>
      <div className={styles.btnsContainer}>
        <a
          href='https://open.spotify.com/album/4NfUlB7TEQL35pHytyCPme?si=fQn_Vs3TRk619dsbf6t6BA'
          target='_blank'
          rel='noreferrer'
        >
          Listen
        </a>
        <a>Delete</a>
      </div>
    </div>
  );
};

export default QueuedAlbumCard;
