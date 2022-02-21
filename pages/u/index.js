import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import AccessDenied from '../../components/AccessDenied';
import styles from '../../styles/Dashboard.module.css';
import NavbarLeft from '../../components/NavbarLeft';

const Dashboard = ({ Component, pageProps }) => {
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
    setMusic(user.music);
  };

  return (
    <div className={styles.mainContainer}>
      <NavbarLeft session={session} />
      {/* <div className={styles.contentContainer}>
        <h2>Here are the tunes that you have shared:</h2>
      </div> */}
    </div>
  );
};

export default Dashboard;
