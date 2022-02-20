import styles from './styles.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { data: session } = useSession();
  const [text, setText] = useState('');
  useEffect(() => {
    if (session) {
      setText(`Log Out from ${session.user.email}`);
    } else {
      setText('Sign In');
    }
  }, [session]);

  const handleClick = () => {
    console.log('the session is: ', session);
    if (session) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <nav className={styles.navContainer}>
      <button onClick={handleClick}>{text}</button>
    </nav>
  );
};

export default Navbar;
