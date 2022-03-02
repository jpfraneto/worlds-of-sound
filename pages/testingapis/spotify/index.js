import Link from 'next/link';
import styles from '../testing.module.css';
import { BsSpotify } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const album =
  'https://open.spotify.com/album/5vptSocUREXhckxhCpvquX?si=sIUcEAdeS1-EgyIATYbnCA';
const track =
  'https://open.spotify.com/track/3Z5eleICMlsCl4qybgfweD?si=ef41c93249ed4841';
const artist =
  'https://open.spotify.com/artist/0qfuxQiPQ79eohvARHBLFs?si=9VClOCK-TM6xbQhsWbIgFw';

const SpotifyApiTester = () => {
  const router = useRouter();

  useEffect(() => {
    const getSpotifyToken = async () => {
      const reqParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(router.query.code),
      };
      const responseFromSpotify = await fetch(
        'http://localhost:3000/api/spotify',
        reqParams
      );
      const data = await responseFromSpotify.json();
      if (data) {
        setAccessToken(data.access_token);
        setLoggedIn(true);
        router.replace('/testingapis/spotify', undefined, { shallow: true });
      }
    };
    if (router.query.code) getSpotifyToken();
  }, [router]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  const spotifyLoginHandler = () => {
    router.push(
      'https://accounts.spotify.com/authorize?client_id=8ae10d2dc3ed4fed84191cf54f4209ad&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000%2Ftestingapis%2Fspotify&scope=user-read-currently-playing%20user-top-read'
    );
  };
  const spotifyHandleLogout = () => {
    setLoggedIn(false);
  };
  const handleGetNowPlaying = async () => {
    if (!accessToken) return alert('Please login to spotify');
    const response = await fetch(
      `http://localhost:3000/api/spotify?token=${accessToken}`
    );
    const data = await response.json();
    console.log('the data is: ', data);
  };
  return (
    <div className={styles.centerDiv}>
      <div className={styles.topNavbar}>
        <h2>SPOTIFY TESTING</h2>
        {loggedIn ? (
          <button
            onClick={spotifyHandleLogout}
            className={`${styles.btn} ${styles.logoutSpotifyBtn}`}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={spotifyLoginHandler}
            className={`${styles.btn} ${styles.connectSpotifyBtn}`}
          >
            <BsSpotify /> Connect with Spotify
          </button>
        )}
      </div>

      <div>
        <h2 onClick={handleGetNowPlaying}>Now Playing: {accessToken}</h2>
      </div>
      <Link href='/testingapis'>
        <a>Go back</a>
      </Link>
    </div>
  );
};

export default SpotifyApiTester;
