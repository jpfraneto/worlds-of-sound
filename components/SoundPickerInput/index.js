import styles from './styles.module.css';
import { useState } from 'react';
import { getSoundProvider } from '../../lib/functions';

const SoundPickerInput = ({ thisSound, setPickedSounds }) => {
  const deleteThisSound = () => {
    setPickedSounds(prev => {
      const filtered = prev.filter(el => el.id != thisSound.id);
      return filtered;
    });
  };
  const handleSoundChange = e => {
    setPickedSounds(prevPickedSounds => {
      const thisSoundIndex = prevPickedSounds.indexOf(thisSound);
      prevPickedSounds[thisSoundIndex].url = e.target.value;
      const provider = getSoundProvider(e.target.value);
      if (provider) prevPickedSounds[thisSoundIndex].provider = provider;
      return prevPickedSounds;
    });
  };
  const addSoundToSchedule = e => {
    //Update the picked sounds with this new one.
    setPickedSounds(prev => [...prev, thisSound]);
  };
  return (
    <div className={styles.pickerInput}>
      <input
        autoFocus
        type='text'
        id='soundInput'
        placeholder='Add the url of the sound'
        name='url'
        onChange={handleSoundChange}
      />
      <button type='button' onClick={deleteThisSound}>
        ❎
      </button>
    </div>
  );
};

export default SoundPickerInput;
