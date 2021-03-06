import styles from './styles.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import SoundSchedulingPicker from '../SoundSchedulingPicker';
import { createUniqueId } from '../../lib/functions';

const SoundScheduling = () => {
  const router = useRouter();
  const [newSoundsSchedule, setNewSoundsSchedule] = useState({
    scheduledDate: '',
    completed: false,
  });
  const [description, setDescription] = useState('');
  const [pickedSounds, setPickedSounds] = useState([
    { id: createUniqueId(), url: '' },
  ]);
  const handleDateChange = e => {
    setNewSoundsSchedule(prevSoundsSchedule => ({
      ...prevSoundsSchedule,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSchedulingForm = async e => {
    e.preventDefault();
    if (!pickedSounds[0].url)
      return alert('Plase add sounds to the schedule that you are creating!');
    if (!newSoundsSchedule.scheduledDate)
      return alert(
        'Please add a date on which you plan to play these sound(s)!'
      );
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newSoundsSchedule, pickedSounds, description }),
    };
    const response = await fetch(`/api/sounds/schedule`, reqParams);
    const data = await response.json();
    router.push(`/u/${data.email}/scheduled/${data.soundId}`);
  };
  return (
    <div>
      <form onSubmit={handleSchedulingForm}>
        <div className={styles.descriptionContainer}>
          <label htmlFor='datePicker'>When will you play this sounds?</label>
          <input
            type='date'
            name='scheduledDate'
            id='datePicker'
            onChange={handleDateChange}
            min={new Date()}
          />
        </div>
        <div className={styles.descriptionContainer}>
          <label htmlFor='description'>What is this piece all about?</label>
          <textarea
            type='text'
            id='description'
            name='description'
            onChange={e => setDescription(e.target.value)}
            placeholder='Description...'
          />
        </div>
        <SoundSchedulingPicker
          pickedSounds={pickedSounds}
          setPickedSounds={setPickedSounds}
        />
        <button type='submit'>Add Sounds Schedule</button>
      </form>
    </div>
  );
};

export default SoundScheduling;
