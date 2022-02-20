import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import AccessDenied from '../../components/AccessDenied';
import NewMusic from '../../components/NewMusic';
import UserMusicDisplay from '../../components/UserMusicDisplay';
import styles from '../../styles/Dashboard.module.css';

const Dashboard = () => {
  const { data: session } = useSession();
  const [music, setMusic] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!session) {
    return (
      <>
        <AccessDenied />
      </>
    );
  }

  const handleMusicFetch = async () => {
    const response = await fetch(`/api/users/${session.user.email}`);
    const user = await response.json();
    console.log('inside the hadnle music fetch, the user is: 0, ', user);
    setMusic(user.music);
  };

  return (
    <div className={styles.mainContainer}>
      <h3>This is the dashboard for the authenticated user</h3>
      <img src={session.user.image} alt='User Avatar' />
      <p>{session.user.name}</p>
      <h5>{session.user.email}</h5>
      <NewMusic />
      {music ? (
        <UserMusicDisplay music={music} />
      ) : (
        <button onClick={handleMusicFetch}>Get Users Music</button>
      )}
    </div>
  );
};

export default Dashboard;
