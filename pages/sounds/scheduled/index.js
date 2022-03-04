import styles from '../../../styles/Playlists.module.css';
import PlaylistsDisplay from '../../../components/PlaylistsDisplay';
import { useState } from 'react';
import ScheduledSoundDisplay from '../../../components/ScheduledSoundDisplay';
import Link from 'next/link';
import SoundScheduling from '../../../components/SoundScheduling';

const Playlists = ({ playlists }) => {
  const [chosenPlaylist, setChosenPlaylist] = useState(null);
  const [newPlaylistActive, setNewPlaylistActive] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.allPlaylistsContainer}>
        <p
          onClick={() => setNewPlaylistActive(prev => !prev)}
          className={`${styles.addNewPlaylistBtn} ${
            !newPlaylistActive ? styles.green : styles.red
          }`}
        >
          {!newPlaylistActive ? 'Add New Playlist' : 'Cancel'}
        </p>
        {newPlaylistActive ? (
          <SoundScheduling />
        ) : (
          <PlaylistsDisplay
            playlists={playlists}
            setChosenPlaylist={setChosenPlaylist}
          />
        )}
      </div>
      {chosenPlaylist && (
        <div className={styles.playlistForDisplayContainer}>
          <ScheduledSoundDisplay scheduledSound={chosenPlaylist} />
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  const response = await fetch(
    `${dev ? DEV_URL : PROD_URL}/api/sounds/schedule`
  );
  const data = await response.json();
  return {
    props: {
      playlists: data,
    },
  };
}

export default Playlists;
