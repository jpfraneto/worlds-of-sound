import styles from './styles.module.css';
import PlaylistCard from '../PlaylistCard';

const PlaylistsDisplay = ({ playlists, setChosenPlaylist }) => {
  return (
    <div className={styles.playlistDisplayContainer}>
      {playlists.map(playlist => (
        <PlaylistCard
          key={playlist._id}
          playlist={playlist}
          setChosenPlaylist={setChosenPlaylist}
        />
      ))}
    </div>
  );
};

export default PlaylistsDisplay;
