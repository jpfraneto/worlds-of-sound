import styles from './styles.module.css';
import { useState } from 'react';
import { createUniqueId } from '../../lib/functions';

const SoundPickerInput = ({ pickedSounds, setPickedSounds }) => {
  const [thisSound, setThisSound] = useState({ id: createUniqueId(), url: '' });
  const deleteThisSound = () => {
    setPickedSounds(prev => {
      const filtered = prev.filter(el => el.id != thisSound.id);
      return filtered;
    });
  };
  const handleSoundChange = e => {
    setThisSound(prev => ({ ...prev, url: e.target.value }));
  };
  const addSoundToSchedule = e => {
    //Update the picked sounds with this new one.
    setPickedSounds(prev => [...prev, thisSound]);
  };
  return (
    <div className={styles.pickerInput}>
      <label htmlFor='soundInput'>Add New Sound By Url</label>
      <input
        type='text'
        id='soundInput'
        placeholder='Add the url of the sound'
        name='url'
        onChange={handleSoundChange}
        onBlur={addSoundToSchedule}
      />
      <button type='button' onClick={deleteThisSound}>
        ❎
      </button>
    </div>
  );
};

export default SoundPickerInput;
