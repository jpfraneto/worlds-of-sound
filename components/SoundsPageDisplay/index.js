import styles from './styles.module.css';
import SoundTypeCard from '../SoundTypeCard';
import { soundtypesData } from '../../data/soundtypes.js';

const SoundsPageDisplay = ({ soundtypes }) => {
  return (
    <div className={styles.soundsMainContainer}>
      {soundtypes
        ? soundtypes.map(soundtype => (
            <SoundTypeCard key={soundtype._id} soundtype={soundtype} />
          ))
        : soundtypesData.map(soundtype => (
            <SoundTypeCard key={soundtype._id} soundtype={soundtype} />
          ))}
    </div>
  );
};

export default SoundsPageDisplay;
