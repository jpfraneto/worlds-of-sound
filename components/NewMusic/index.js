import styles from './styles.module.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { useSession } from 'next-auth/react';

const NewMusic = () => {
  const { data: session } = useSession();
  const [url, setUrl] = useState('');
  const handleSubmitMusic = async () => {
    const reqParams = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, date: new Date().getTime() }),
    };
    const response = await fetch(`/api/users/${session.user.email}`, reqParams);
    const data = await response.json();
    console.log('the data is: ', data);
  };
  return (
    <div className={styles.newMusicContainer}>
      <form>
        <p>Add a new piece of music by url:</p>
        <input type='text' name='url' onChange={e => setUrl(e.target.value)} />
        <button type='button' onClick={handleSubmitMusic}>
          Add to DB
        </button>
        {url && <ReactPlayer url={url} />}
      </form>
    </div>
  );
};

export default NewMusic;
