import styles from './styles.module.css';
import { useState } from 'react';

const NewReviewPage = () => {
  const [newReview, setNewReview] = useState({});
  const [serverResponse, setServerResponse] = useState('');
  const handleChange = e => {
    setNewReview(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmitReview = async () => {
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    };
    const response = await fetch('/api/users/newreview', reqParams);
    const data = await response.json();
    setServerResponse(data.message);
  };
  return (
    <div className={styles.mainContainer}>
      <h3>Add a new Review</h3>
      <div className={styles.formElementContainer}>
        <label htmlFor='service'>Service</label>
        <select
          onChange={handleChange}
          name='service'
          id='service'
          placeholder='Select the service'
        >
          <option value=''>Choose the service...</option>
          <option value='spotify'>Spotify</option>
          <option value='soundcloud'>SoundCloud</option>
          <option value='youtube'>Youtube</option>
        </select>
      </div>
      <div className={styles.formElementContainer}>
        <label htmlFor='url'>Url</label>
        <input
          onChange={handleChange}
          type='text'
          name='url'
          id='url'
          placeholder='ulr'
        />
      </div>
      <div className={styles.formElementContainer}>
        <label htmlFor='reviewtext'>Text</label>
        <textarea onChange={handleChange} name='review' id='reviewtext' />
      </div>
      <div className={styles.btnsContainer}>
        <button type='button' onClick={handleSubmitReview}>
          Add Review{' '}
        </button>
      </div>
      {serverResponse && <h4>{serverResponse}</h4>}
    </div>
  );
};

export default NewReviewPage;
