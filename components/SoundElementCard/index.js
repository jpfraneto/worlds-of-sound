import styles from './styles.module.css';

const SoundElementCard = ({ sound, setChosenElement }) => {
  return (
    <div
      onClick={() => setChosenElement(sound._id)}
      className={styles.soundElementCardContainer}
    >
      <h3>{sound.provider}</h3>
      <button onClick={() => alert(sound.url)}>Play this sound!</button>
    </div>
  );
};

export default SoundElementCard;
