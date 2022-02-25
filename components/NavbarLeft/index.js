import styles from './styles.module.css';
import Link from 'next/link';
import { FaUserAstronaut } from 'react-icons/fa';
import { GrSettingsOption } from 'react-icons/gr';
import { SiMusicbrainz } from 'react-icons/si';

const NavbarLeft = ({ session }) => {
  console.log('INSIDE THE NAVBAR LEFT, THE SESSION IS: ', session);
  return (
    <div className={styles.leftNav}>
      <div className={styles.topContainer}>
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
        <h3>@{session.username}</h3>
      </div>
      <div className={styles.bottomContainer}>
        <Link href='/u/dashboard'>
          <a>
            <FaUserAstronaut />
          </a>
        </Link>
        <Link href='/u/settings'>
          <a>
            <GrSettingsOption />
          </a>
        </Link>
        <Link href='/u/music-brain'>
          <a>
            <SiMusicbrainz />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NavbarLeft;
