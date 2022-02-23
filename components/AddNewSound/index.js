import { FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';
import styles from './styles.module.css';
import Loader from '../Loader';
import { useState } from 'react';
import Link from 'next/link';

const AddNewSound = ({ type }) => {
  const [provider, setProvider] = useState('');
  const [url, setUrl] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const handleProviderSelection = e => {
    if (e.target.dataset.provider) setProvider(e.target.dataset.provider);
  };

  const providerPlacerholder = () => {
    if (!provider) return 'Plase select the provider for your sound!';
    if (provider === 'spotify')
      return 'https://open.spotify.com/album/15PC8OBWZycbckdl1VOYle?si=h2P2Rp1UQ_SzsGWxc1d-hw';
    if (provider === 'youtube')
      return 'https://www.youtube.com/watch?v=WnkDjMDD3JQ';
    if (provider === 'soundcloud')
      return 'https://soundcloud.com/monada-project/monada-brahma-007-andi-from-the-leipzig-tribe-of-peace-faith-we-are-circeling';
  };

  const submitSound = async () => {
    if (!url) {
      return alert('Please add an url for the sound you want to add!');
    }
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, provider, type }),
    };
    setLoading(true);
    const response = await fetch('/api/sounds', reqParams);
    const data = await response.json();
    setLoading(false);
    return setServerMessage(data);
  };

  return (
    <div className={styles.addNewSoundContainer}>
      <h2>Add new {type} sound</h2>
      <form>
        <div className={styles.hostedContainer}>
          <h3>Where is it hosted?</h3>
          <h3 className={styles.icons}>
            <div data-provider={'soundcloud'} onClick={handleProviderSelection}>
              <FaSoundcloud color={provider === 'soundcloud' ? 'orange' : ''} />
            </div>
            <div data-provider={'youtube'} onClick={handleProviderSelection}>
              <FaYoutube color={provider === 'youtube' ? 'red' : ''} />
            </div>
            <div data-provider={'spotify'} onClick={handleProviderSelection}>
              <FaSpotify color={provider === 'spotify' ? 'green' : ''} />
            </div>
          </h3>
        </div>

        <div className={styles.urlContainer}>
          <label htmlFor='url'>What is the Url of the piece?</label>
          <input
            type='text'
            id='url'
            name='url'
            onChange={e => setUrl(e.target.value)}
            placeholder={providerPlacerholder()}
          />
        </div>
        {!serverMessage ? (
          <>
            {loading ? (
              <Loader />
            ) : (
              <button
                type='button'
                onClick={submitSound}
                className={`${styles.btn} ${styles.addSoundBtn}`}
              >
                Add Sound
              </button>
            )}
          </>
        ) : (
          <div>
            <h3>{serverMessage.message}</h3>
            <Link href={`/sounds/id/${serverMessage.soundId}`}>
              <a className={`${styles.btn} ${styles.goToSoundBtn}`}>
                Go to its page
              </a>
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddNewSound;
