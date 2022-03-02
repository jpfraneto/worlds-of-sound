import styles from './testing.module.css';
import Link from 'next/link';

const YoutubeApiTester = () => {
  return (
    <div className={styles.centerDiv}>
      <div>
        <button>Album</button>
        <button>Track</button>
        <button>Artist</button>
      </div>
      <Link href='/testingapis'>
        <a>Go back</a>
      </Link>
    </div>
  );
};

export default YoutubeApiTester;
