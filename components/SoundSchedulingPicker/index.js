import styles from './styles.module.css';
import { useState } from 'react';
import SoundPickerInput from '../SoundPickerInput';

const SoundSchedulingPicker = ({ pickedSounds, setPickedSounds }) => {
  const handleAddNewSound = () => {
    setPickedSounds(prev => [...prev, {}]);
  };
  return (
    <div className={styles.soundsPickerContainer}>
      <h2>Here goes the picker of sounds</h2>
      {pickedSounds.map((sound, index) => {
        return (
          <SoundPickerInput
            key={index}
            pickedSounds={pickedSounds}
            setPickedSounds={setPickedSounds}
          />
        );
      })}
      <button type='button' onClick={handleAddNewSound}>
        Add Sound
      </button>
      <button
        type='button'
        onClick={() => console.log('the picked sounds are: ', pickedSounds)}
      >
        Console
      </button>
    </div>
  );
};

export default SoundSchedulingPicker;
