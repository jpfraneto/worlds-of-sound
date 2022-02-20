import styles from './styles.module.css';

const UserMusicDisplay = ({ music }) => {
  return (
    <div className={styles.musicDisplayerContainer}>
      {music.map(piece => (
        <p>This one is: {piece.url}</p>
      ))}
    </div>
  );
};

export default UserMusicDisplay;
