import { useState } from 'react';
import ReactPlayer from 'react-player';
import MusicPieceCard from '../../components/MusicPieceCard';
import styles from '../../styles/Music.module.css';

const Music = ({ fetchedMusic }) => {
  const [music, setMusic] = useState(fetchedMusic);
  const [previousVolume, setPreviousVolume] = useState(0.8);
  const [playerVolume, setPlayerVolume] = useState(0.8);
  const [targetVolume, setTargetVolume] = useState(0.3);
  const [playerProps, setPlayerProps] = useState({
    playing: true,
    controls: true,
  });
  const [playingProvider, setPlayingProvider] = useState('');
  const [playingUrl, setPlayingUrl] = useState('');
  const [playingCode, setPlayingCode] = useState('');
  const propps = {
    setPlayingProvider,
    setPlayingUrl,
    setPlayingCode,
  };

  const [newMusic, setNewMusic] = useState({
    musicProvider: '',
    url: '',
  });

  const handleChange = e => {
    setNewMusic(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddMusic = async e => {
    e.preventDefault();
    if (!newMusic.musicProvider) alert('Please add a music provider');
    if (!newMusic.url) alert('Please add an url for the new music');
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMusic),
    };
    const response = await fetch('/api/music', reqParams);
    const data = await response.json();
    if (data.success) setMusic(music => [...music, newMusic]);
  };

  const handlePlay = async () => {
    console.log('the previous volume is: ', previousVolume);
    fadeVolume(previousVolume);
    setPlayerProps(prevProps => ({ ...prevProps, playing: true }));
  };
  const handlePause = async () => {
    setPreviousVolume(playerVolume);
    fadeVolume(0);
    setTimeout(() => {
      setPlayerProps(prevProps => ({ ...prevProps, playing: false }));
    }, 0.5 + (200 * playerVolume) / 0.05);
  };

  const fadeVolume = target => {
    const volumeInterval = setInterval(() => {
      setPlayerVolume(prevVolume => {
        if (+prevVolume > +target) {
          const newVolume = +(prevVolume - 0.025).toFixed(2);
          return newVolume;
        }
        if (+prevVolume < +target) {
          const newVolume = +(prevVolume + 0.025).toFixed(2);
          return newVolume;
        }
        if (+prevVolume === +target) {
          clearInterval(volumeInterval);
          return +target;
        }
      });
    }, 100);
  };

  return (
    <div>
      <p> This is the music page</p>
      <form>
        <select onChange={handleChange} name='musicProvider'>
          <option value=''>Choose Music Provider...</option>
          <option value='soundcloud'>Soundcloud</option>
          <option value='spotify'>Spotify</option>
          <option value='youtube'>Youtube</option>
        </select>
        <input
          onChange={handleChange}
          type='text'
          name='url'
          placeholder='Paste the url Here'
        />
        <input
          onChange={handleChange}
          type='text'
          name='serviceCode'
          placeholder='enter the particular code here'
        />
        <button type='button' onClick={handleAddMusic}>
          Add Piece of Music
        </button>
      </form>
      <div className={styles.musicContainerDiv}>
        {music && (
          <div className={styles.musicContainer}>
            <h3>Music Div</h3>
            {music.map(piece => (
              <MusicPieceCard propps={propps} key={piece._id} piece={piece} />
            ))}
          </div>
        )}
        {playingCode && (
          <div className={styles.musicPlayerContainer}>
            <ReactPlayer
              volume={playerVolume}
              {...playerProps}
              url={playingUrl}
            />
            <div>
              <p>Provider: {playingProvider}</p>
              <p>Url: {playingUrl}</p>
              <p>Service Code: {playingCode}</p>
            </div>
            <div className={styles.controlsContainer}>
              <button onClick={handlePlay}>Play</button>
              <button onClick={handlePause}>Pause</button>
              <span style={{ color: 'white' }}>
                Current Volume: {playerVolume}
              </span>
              <div>
                <input
                  type='number'
                  min={0}
                  max={1}
                  step={0.1}
                  value={targetVolume}
                  onChange={e => setTargetVolume(e.target.value)}
                />
                <button onClick={() => fadeVolume(targetVolume)}>
                  Fade Volume to {targetVolume}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Music;

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/music');
  const fetchedMusic = await res.json();
  return {
    props: { fetchedMusic },
  };
}
