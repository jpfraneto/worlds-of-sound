import styles from './styles.module.css';
import { useState } from 'react';
import SoundPickerInput from '../SoundPickerInput';
import { createUniqueId } from '../../lib/functions';

const SoundSchedulingPicker = ({ pickedSounds, setPickedSounds }) => {
  const handleAddNewSound = () => {
    setPickedSounds(prev => [...prev, { id: createUniqueId(), url: '' }]);
  };
  return (
    <div className={styles.soundsPickerContainer}>
      <h2>Here goes the picker of sounds</h2>
      {pickedSounds.map((sound, index) => {
        return (
          <SoundPickerInput
            key={sound.id}
            thisSound={sound}
            pickedSounds={pickedSounds}
            setPickedSounds={setPickedSounds}
          />
        );
      })}

      <button
        className={styles.addNewSoundBtn}
        type='button'
        onClick={handleAddNewSound}
      >
        +
      </button>
    </div>
  );
};

export default SoundSchedulingPicker;
