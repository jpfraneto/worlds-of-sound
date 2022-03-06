import styles from './SpotifyTester.module.css';
import Image from 'next/image';
import { useContext, useState } from 'react';
import WebPlayback from './WebPlayback';
import SpotifyContext from '../../context/Spotify/SpotifyContext';
import { msToTime } from '../../lib/functions';

const track = {
  name: '',
  album: {
    images: [{ url: '' }],
  },
  artists: [{ name: '' }],
};

const SpotifyTester = ({}) => {
  const { userToken } = useContext(SpotifyContext);
  const [userAlbums, setUserAlbums] = useState([]);
  const [playingAlbum, setPlayingAlbum] = useState({});
  const [typeOfDisplay, setTypeOfDisplay] = useState('');
  const [playingTrack, setPlayingTrack] = useState(track);
  const handleCheckSavedAlbums = async () => {
    setTypeOfDisplay('savedalbums');
    const response = await fetch(
      `/api/spotify/general?token=${userToken}&requesttype=savedalbums`
    );
    const data = await response.json();
    setUserAlbums(data.items);
  };
  const handleCheckPlaybackStatus = async () => {
    setTypeOfDisplay('playbackstatus');
    const response = await fetch(
      `/api/spotify/general?token=${userToken}&requesttype=playbackstatus`
    );
    const data = await response.json();
    setPlayingTrack(data);
  };
  if (!userToken) return <p>Please login to access this functionality</p>;
  return (
    <div className={styles.mainContainer}>
      <button onClick={handleCheckSavedAlbums}>Check Saved Albums</button>
      {/* <button onClick={handleCheckPlaybackStatus}>Check Playback Status</button> */}
      {typeOfDisplay === 'savedalbums' && (
        <div className={styles.albumCoversContainer}>
          {userAlbums &&
            userAlbums.map(album => (
              <Image
                alt='image'
                key={album.album.id}
                width={100}
                height={100}
                src={album.album.images[0].url}
                onClick={() => setPlayingAlbum(album)}
              />
            ))}
        </div>
      )}
      {typeOfDisplay === 'playbackstatus' && <p>aloja</p>}

      {playingAlbum && (
        <>
          <div className={styles.playingAlbum}>
            <div className={styles.albumCoverContainer}>
              {playingAlbum.album && (
                <Image
                  width={400}
                  height={400}
                  alt='image'
                  src={playingAlbum?.album?.images[0].url}
                />
              )}
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.albumInformationContainer}>
                <h2>{playingAlbum?.album?.name}</h2>
                <h5>
                  {playingAlbum.album?.artists.map(artist => (
                    <span key={artist.id}>{artist.name} </span>
                  ))}
                </h5>
                <div className={styles.albumTracklist}>
                  {playingAlbum.album?.tracks.items.map((track, index) => {
                    return (
                      <p
                        onClick={() => {
                          console.log('the track clicked is :', track);
                          return setPlayingTrack(track);
                        }}
                        key={index}
                      >
                        {index + 1}. {track.name} -{' '}
                        {msToTime(track.duration_ms)}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className={styles.spotifyPlayerContainer}>
                {playingTrack && (
                  <WebPlayback
                    setPlayingTrack={setPlayingTrack}
                    playingTrack={playingTrack}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SpotifyTester;
