import styles from './styles.module.css';
import Link from 'next/link';

const UserPageDisplay = ({ sounds, scheduledSounds }) => {
  console.log('the sounds are: ', sounds);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h2>Added Sounds</h2>
        <hr />
        {sounds.map(sound => (
          <>
            <Link href={`/sounds/id/${sound._id}`}>
              <a key={sound._id}>
                {sound.type} {sound.comments?.length}
              </a>
            </Link>
            <hr />
          </>
        ))}
      </div>
      <div className={styles.rightContainer}>
        <h2>Scheduled Sounds</h2>
        {scheduledSounds.map(scheduled => (
          <>
            {' '}
            <Link
              href={`/sounds/scheduled/${scheduled._id}`}
              key={scheduled._id}
            >
              <a>
                In this one there are {scheduled.pickedSounds.length} sounds
              </a>
            </Link>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default UserPageDisplay;
