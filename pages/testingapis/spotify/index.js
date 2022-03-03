import Link from 'next/link';
import styles from '../testing.module.css';
import { BsSpotify } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SpotifyTester from '../../../components/SpotifyAPI/SpotifyTester';
import { generateRandomString } from '../../../lib/functions';
import SpotifyContext from '../../../context/Spotify/SpotifyContext';

const album =
  'https://open.spotify.com/album/5vptSocUREXhckxhCpvquX?si=sIUcEAdeS1-EgyIATYbnCA';
const track =
  'https://open.spotify.com/track/3Z5eleICMlsCl4qybgfweD?si=ef41c93249ed4841';
const artist =
  'https://open.spotify.com/artist/0qfuxQiPQ79eohvARHBLFs?si=9VClOCK-TM6xbQhsWbIgFw';

const SpotifyApiTester = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const getSpotifyToken = async () => {
      //TODO: Create a context for the state
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
        setLoggedIn(true);
        setUserToken(data.access_token);
        router.replace('/testingapis/spotify', undefined, { shallow: true });
      }
    };
    if (router.query.code) getSpotifyToken();
  }, [router]);

  const spotifyLoginHandler = () => {
    var scope =
      'streaming \
               user-read-email \
               user-read-currently-playing \
               user-top-read \
               user-library-read \
               user-read-private';
    const state = generateRandomString(16);
    var auth_query_parameters = new URLSearchParams({
      response_type: 'code',
      client_id: '8ae10d2dc3ed4fed84191cf54f4209ad',
      scope: scope,
      redirect_uri: 'http://localhost:3000/testingapis/spotify',
      state: state,
    });

    router.push(
      'https://accounts.spotify.com/authorize/?' +
        auth_query_parameters.toString()
    );
  };
  const spotifyHandleLogout = () => {
    setLoggedIn(false);
    router.push('/testingapis/spotify');
  };
  const handleGetNowPlaying = async () => {
    if (!userToken) return alert('Please login to spotify');
    const response = await fetch(
      `http://localhost:3000/api/spotify?token=${userToken}`
    );
    const data = await response.json();
  };
  return (
    <SpotifyContext.Provider value={{ userToken, setUserToken }}>
      {' '}
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

        {loggedIn && <SpotifyTester loggedInUserToken={userToken} />}
      </div>
    </SpotifyContext.Provider>
  );
};

export default SpotifyApiTester;
