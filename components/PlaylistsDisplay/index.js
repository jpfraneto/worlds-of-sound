import styles from './styles.module.css';
import PlaylistCard from '../PlaylistCard';

const PlaylistsDisplay = ({ playlists, setChosenPlaylist }) => {
  return (
    <div className={styles.playlistDisplayContainer}>
      {playlists.map(playlist => (
        <PlaylistCard
          playlist={playlist}
          setChosenPlaylist={setChosenPlaylist}
        />
      ))}
    </div>
  );
};

export default PlaylistsDisplay;
