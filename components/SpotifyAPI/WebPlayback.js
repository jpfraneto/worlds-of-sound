import styles from './WebPlayback.module.css';
import { useContext, useEffect, useState } from 'react';
import SpotifyContext from '../../context/Spotify/SpotifyContext';
import { msToTime } from '../../lib/functions';

const WebPlayback = ({ setPlayingTrack, playingTrack }) => {
  console.log('the plauing tack is: ', playingTrack);
  const { userToken } = useContext(SpotifyContext);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: cb => {
          cb(userToken);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.connect();

      player.addListener('player_state_changed', state => {
        if (!state) {
          return;
        }

        setPlayingTrack(state.track_window.playingTrack);
        setPaused(state.paused);

        player.getCurrentState().then(state => {
          !state ? setActive(false) : setActive(true);
        });
      });
    };
  }, []);
  const [player, setPlayer] = useState(undefined);
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  if (playingTrack.name.length < 1) return <></>;
  return (
    <>
      {playingTrack && (
        <div className={styles.mainWrapper}>
          <div className={styles.trackInformation}>
            <h2>{playingTrack.name}</h2>

            <h5>
              {'| '}
              {playingTrack.artists.map((artist, index) => {
                return <span key={index}>{`${artist.name} |`} </span>;
              })}
            </h5>
            <p> {msToTime(playingTrack.duration_ms)}</p>
          </div>
          <div className={`${styles.controlBtns}`}>
            {' '}
            <button
              onClick={() => {
                player.previousTrack();
              }}
            >
              &lt;&lt;
            </button>
            <button
              onClick={() => {
                player.togglePlay();
              }}
            >
              {is_paused ? 'PLAY' : 'PAUSE'}
            </button>
            <button
              onClick={() => {
                player.nextTrack();
              }}
            >
              &gt;&gt;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WebPlayback;
