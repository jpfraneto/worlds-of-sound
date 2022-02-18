import styles from './styles.module.css';

const MusicPieceCard = ({ piece, propps }) => {
  const conditionalColor = provider => {
    if (piece.musicProvider === 'youtube') return 'red';
    if (piece.musicProvider === 'soundcloud') return 'orange';
  };

  const handleClick = () => {
    propps.setPlayingProvider(piece.musicProvider);
    propps.setPlayingUrl(piece.url);
    propps.setPlayingCode(piece.serviceCode);
  };
  return (
    <button
      className={styles.btn}
      style={{ backgroundColor: conditionalColor(piece.musicProvider) }}
      onClick={handleClick}
    >
      Play
    </button>
  );
};

export default MusicPieceCard;
