import styles from './styles.module.css';
import SoundTypeCard from '../SoundTypeCard';
import { soundtypesData } from '../../data/soundtypes.js';

const SoundsPageDisplay = ({ soundtypes }) => {
  console.log('in here, the soundtypes areee: ', soundtypes);
  return (
    <div className={styles.soundsMainContainer}>
      {soundtypes
        ? soundtypes.map(soundtype => <SoundTypeCard soundtype={soundtype} />)
        : soundtypesData.map(soundtype => (
            <SoundTypeCard soundtype={soundtype} />
          ))}
    </div>
  );
};

export default SoundsPageDisplay;
