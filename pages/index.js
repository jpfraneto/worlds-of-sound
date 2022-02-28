import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import MainLandingSection from '../components/MainLandingSection';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home({ scheduledDays }) {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Worlds Of Sounds</title>
        <meta name='description' content='Worlds of Sounds' />
        <link rel='icon' href='/music.ico' />
      </Head>

      <main className={styles.main}>
        <MainLandingSection scheduledDays={scheduledDays} />
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

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/sounds/schedule');
  const scheduledDays = await response.json();
  return {
    props: { scheduledDays },
  };
}
