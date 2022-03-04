import styles from './styles.module.css';
import { GiSoundOn } from 'react-icons/gi';
import Link from 'next/link';

const PlaylistCard = ({ playlist, setChosenPlaylist }) => {
  return (
    <div
      className={styles.playlistCardContainer}
      onClick={() => setChosenPlaylist(playlist)}
    >
      <p>{playlist.author.username}</p>
      <p className={styles.numberOfSounds}>
        {playlist.pickedSounds.length}
        <GiSoundOn />
      </p>
    </div>
  );
};

export default PlaylistCard;
