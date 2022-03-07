import { useState } from 'react';
import { BsSpotify } from 'react-icons/bs';
import { FaSoundcloud } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import styles from './styles.module.css';
import Link from 'next/link';
import DisplayServiceInformation from './UserPageDisplayComponents/DisplayServiceInformation';

const UserPageDisplay = ({ user }) => {
  console.log(user);
  const [chosenService, setChosenService] = useState('');
  return (
    <div className={styles.mainContainer}>
      <div className={styles.userInformationContainer}>
        <h2>{user.username}</h2>
        <p>{user.bio}</p>
        <Link href={`/u/${user.username}/reviews/new`}>
          <a className={styles.newReviewBtn}>Add Review</a>
        </Link>
        {/* <p>
          Spotify: {user.reviews.spotify.length} | Soundcloud:{' '}
          {user.reviews.soundcloud.length} | Youtube:{' '}
          {user.reviews.youtube.length}{' '}
        </p> */}
        <p>Spotify: 12 | Soundcloud: 3 | Youtube: 2 </p>
      </div>
      <div className={styles.userSharesContainer}>
        <div className={styles.servicePicker}>
          <div
            onClick={() => setChosenService('spotify')}
            className={styles.spotifyPickerContainer}
          >
            <BsSpotify />
          </div>
          <div
            onClick={() => setChosenService('soundcloud')}
            className={styles.soundcloudPickerContainer}
          >
            <FaSoundcloud />
          </div>
          <div
            onClick={() => setChosenService('youtube')}
            className={styles.youtubePickerContainer}
          >
            <AiFillYoutube />
          </div>
        </div>
        {chosenService && <DisplayServiceInformation service={chosenService} />}
      </div>
    </div>
  );
};

export default UserPageDisplay;
