import { signIn } from 'next-auth/react';
import Link from 'next/link';
import styles from './styles.module.css';

export default function AccessDenied() {
  return (
    <div className={styles.accessDeniedContainer}>
      <h1>Access Denied</h1>
      <p>You must be signed in to view this page</p>
      <div className={styles.signInBtn}>
        <Link href='/api/auth/signin'>
          <a
            onClick={e => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign In
          </a>
        </Link>
      </div>
    </div>
  );
}
