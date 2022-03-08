import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainLandingSection from '../components/MainLandingSection';

export default function Home({ scheduledDays }) {
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
  let dev = process.env.VERCEL_ENV !== 'production';
  //new commit

  let { DEV_URL, PROD_URL } = process.env;
  const response = await fetch(
    `${dev ? DEV_URL : PROD_URL}/api/sounds/schedule`
  );
  const scheduledDays = await response.json();
  return {
    props: { scheduledDays },
  };
}
