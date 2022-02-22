import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Worlds Of Sounds</title>
        <meta name='description' content='Worlds of Sounds' />
        <link rel='icon' href='/music.ico' />
      </Head>

      <main className={styles.main}>
        <section
          className={`${styles.firstSection} ${styles.sectionContainer}`}
        >
          <h2>Worlds of Sounds</h2>
        </section>
        <section
          className={`${styles.secondSection} ${styles.sectionContainer}`}
        >
          <div className={styles.leftSecondDiv}>Integrate Youtube</div>
          <div className={styles.rightSecondDiv}>Integrate Soundcloud</div>
        </section>
        <section
          className={`${styles.thirdSection} ${styles.sectionContainer}`}
        >
          <div className={styles.centerThirdDiv}>Hello People</div>
        </section>
      </main>
    </div>
  );
}
