import { FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';
import styles from './styles.module.css';
import Loader from '../Loader';
import { useState } from 'react';
import Link from 'next/link';
import { getSoundProvider, getSoundId } from '../../lib/functions';

const AddNewSound = ({ selectedType, types }) => {
  const [provider, setProvider] = useState('');
  const [soundId, setSoundId] = useState('');
  const [url, setUrl] = useState('');

  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [rangeRating, setRangeRating] = useState(10);
  const [selectedSoundType, setSelectedSoundType] = useState(selectedType);

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

  const handleUrlChange = async e => {
    const url = e.target.value;
    const provider = getSoundProvider(url);
    const thisSoundId = await getSoundId(provider, url);
    if (!provider) return setProvider('');
    if (provider) setProvider(provider);
    setSoundId(thisSoundId);
    return setUrl(e.target.value);
  };

  const submitSound = async () => {
    if (!url) {
      return alert('Please add a valid url!');
    }
    if (!selectedSoundType) return alert('Please add a sound type');
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url,
        provider,
        soundId,
        selectedSoundType,
        description,
        title,
        rangeRating,
      }),
    };
    setLoading(true);
    const response = await fetch('/api/sounds', reqParams);
    const data = await response.json();
    setLoading(false);
    console.log('the data returned from the api is: ', data);
    return setServerMessage(data);
  };

  return (
    <div className={styles.addNewSoundContainer}>
      {!serverMessage ? (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              {' '}
              <h2>
                Add New
                <select
                  className={styles.soundTypeSelect}
                  value={selectedSoundType}
                  onChange={e => {
                    setSelectedSoundType(e.target.value);
                  }}
                >
                  <option value=''>Sound Type...</option>
                  {types.map((type, index) => (
                    <option key={index} value={type.soundtype}>
                      {type.soundtype}
                    </option>
                  ))}
                </select>
              </h2>
              <form>
                <div className={styles.hostedContainer}>
                  <h3>Where is it hosted?</h3>
                  <h3 className={styles.icons}>
                    <div
                      data-provider={'soundcloud'}
                      onClick={handleProviderSelection}
                    >
                      <FaSoundcloud
                        color={provider === 'soundcloud' ? 'orange' : ''}
                      />
                    </div>
                    <div
                      data-provider={'youtube'}
                      onClick={handleProviderSelection}
                    >
                      <FaYoutube color={provider === 'youtube' ? 'red' : ''} />
                    </div>
                    <div
                      data-provider={'spotify'}
                      onClick={handleProviderSelection}
                    >
                      <FaSpotify
                        color={provider === 'spotify' ? 'green' : ''}
                      />
                    </div>
                  </h3>
                </div>

                <div className={styles.urlContainer}>
                  <label htmlFor='url'>What is the Url of the piece?</label>
                  <input
                    type='text'
                    id='url'
                    name='url'
                    onChange={handleUrlChange}
                    placeholder={providerPlacerholder()}
                  />
                </div>
                <div className={styles.descriptionContainer}>
                  <label htmlFor='description'>
                    What is this piece all about?
                  </label>
                  <textarea
                    type='text'
                    id='description'
                    name='description'
                    onChange={e => setDescription(e.target.value)}
                    placeholder='Description...'
                  />
                </div>
                <div className={styles.rangeContainer}>
                  <label htmlFor='feelingRange'>
                    What is your feeling about it?
                  </label>
                  <div className={styles.rangeMessagesContainer}>
                    <p>Horrible</p>
                    <div className={styles.sliderContainer}>
                      <input
                        id='feelingRange'
                        name='feelingRange'
                        type='range'
                        min='0'
                        max='100'
                        step='1'
                        value={rangeRating}
                        onChange={e => setRangeRating(e.target.value)}
                        className={styles.slider}
                      />
                    </div>
                    <p>Incredible</p>
                  </div>
                  <button onClick={submitSound} className={styles.addSoundBtn}>
                    Add Sound
                  </button>
                </div>
              </form>
            </>
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
    </div>
  );
};

export default AddNewSound;
