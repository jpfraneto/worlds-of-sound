import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Worlds Of Sounds</title>
        <meta name='description' content='Worlds of Sounds' />
        <link rel='icon' href='/music.ico' />
      </Head>

      <main className={styles.main}>
        <h2>Worlds of Sounds</h2>
        <div className={styles.landingBtns}>
          <Link href='/login'>
            <a>Login</a>
          </Link>
          <Link href='/guest'>
            <a>Guest</a>
          </Link>
        </div>
        <p>
          Dont have an account?
          <Link href='/register'>
            <a className={styles.signInBtn}>Register</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
