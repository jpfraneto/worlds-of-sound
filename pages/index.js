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
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  const response = await fetch(
    `${dev ? DEV_URL : PROD_URL}/api/sounds/schedule`
  );
  const scheduledDays = await response.json();
  return {
    props: { scheduledDays },
  };
}
