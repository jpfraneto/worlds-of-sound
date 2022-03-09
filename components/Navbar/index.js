import styles from './styles.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const { data: session } = useSession();
  const [text, setText] = useState('');

  useEffect(() => {
    if (session) {
      setText(`Log Out`);
    } else {
      setText('Sign In');
    }
  }, [session]);

  const handleSessionClick = () => {
    if (session) {
      signOut({
        callbackUrl: `/`,
      });
    } else {
      signIn();
    }
  };

  return (
    <nav className={styles.navContainer}>
      <Link href='/' passHref>
        <div className={styles.wholeLogoContainer}>
          <div className={styles.logoDiv}>
            <Image src='/logo.png' width={60} height={60} alt='Logo' />
            <a className={styles.logoLink}>Worlds of Sound</a>
          </div>
          <p>Curating is Healing</p>
        </div>
      </Link>
      <ul className={styles.itemsList}>
        <li className={styles.navElement}>
          <Link href='/sounds'>
            <a>Sounds</a>
          </Link>
        </li>
        <li className={styles.navElement}>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        {session && session.user.email && (
          <li className={`${styles.btn} ${styles.contactSalesBtn}`}>
            <Link href='/u/dashboard'>
              <a>Dashboard</a>
            </Link>
          </li>
        )}
        <li
          onClick={handleSessionClick}
          className={
            !session
              ? `${styles.btn} ${styles.loginBtn}`
              : `${styles.btn} ${styles.logoutBtn}`
          }
        >
          {text}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
