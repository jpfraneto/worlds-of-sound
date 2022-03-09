import { useState } from 'react';
import { BsSpotify } from 'react-icons/bs';
import { FaSoundcloud } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import styles from './styles.module.css';
import Link from 'next/link';
import DisplayServiceInformation from './UserPageDisplayComponents/DisplayServiceInformation';

const UserPageDisplay = ({ user }) => {
  console.log('the user is: ', user);
  const [chosenService, setChosenService] = useState('');
  const [chosenSounds, setChosenSounds] = useState([]);
  const handleChooseProvider = provider => {
    setChosenService(provider);
    setChosenSounds(user[provider]);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.userInformationContainer}>
        <h2>{user.username}</h2>
        <p>{user.bio}</p>
        <Link href={`/sounds/new`}>
          <a className={styles.newReviewBtn}>Add Sound</a>
        </Link>
        <h4>{user.email} sounds</h4>
        <p>
          Spotify: {user.spotify?.length || 0} | Soundcloud:{' '}
          {user.soundcloud?.length || 0} | Youtube:
          {user.youtube?.length || 0}{' '}
        </p>
      </div>
      <div className={styles.userSharesContainer}>
        <div className={styles.servicePicker}>
          <div
            onClick={() => handleChooseProvider('spotify')}
            className={styles.spotifyPickerContainer}
          >
            <BsSpotify />
          </div>
          <div
            onClick={() => handleChooseProvider('soundcloud')}
            className={styles.soundcloudPickerContainer}
          >
            <FaSoundcloud />
          </div>
          <div
            onClick={() => handleChooseProvider('youtube')}
            className={styles.youtubePickerContainer}
          >
            <AiFillYoutube />
          </div>
        </div>
        {chosenService && (
          <DisplayServiceInformation
            sounds={chosenSounds}
            service={chosenService}
          />
        )}
      </div>
    </div>
  );
};

export default UserPageDisplay;
