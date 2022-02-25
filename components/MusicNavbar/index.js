import { useState } from 'react';
import styles from './styles.module.css';
import { soundtypes } from '../../data/soundtypes';
import MenuItems from '../MenuItems';

const MusicNavbar = () => {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <ul className={styles.soundsNav}>
        {soundtypes.map(soundtype => (
          <MenuItems items={soundtype} key={soundtype.id} />
        ))}
      </ul>
    </div>
  );
};

export default MusicNavbar;
