import styles from './styles.module.css';
import { useState } from 'react';
import SoundSchedulingPicker from '../SoundSchedulingPicker';

const SoundScheduling = () => {
  const [newSoundsSchedule, setNewSoundsSchedule] = useState({
    scheduledDate: '',
    completed: false,
  });
  const [pickedSounds, setPickedSounds] = useState([{}]);
  const handleChange = e => {
    setNewSoundsSchedule(prevSoundsSchedule => ({
      ...prevSoundsSchedule,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSchedulingForm = async e => {
    e.preventDefault();
    if (pickedSounds.length === 0)
      return alert('Plase add sounds to the schedule that you are creating!');
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newSoundsSchedule, pickedSounds }),
    };
    console.log('now ill fetch the db with this info: ', reqParams);
    // const response = await fetch(`/api/sounds/schedule`, reqParams);
    // const data = await response.json();
    // console.log('the data after fetching the db is: ', data);
  };
  return (
    <div>
      <form onSubmit={handleSchedulingForm}>
        <div>
          <label htmlFor='datePicker'>When will you play this sounds?</label>
          <input
            type='date'
            name='scheduledDate'
            id='datePicker'
            onChange={handleChange}
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
