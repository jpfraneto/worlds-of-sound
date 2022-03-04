import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import TOSFNavbar from '../components/TOSFNavbar';

function App({ Component, pageProps: { session, ...pageProps }, router }) {
  const getLayout = Component.getLayout || (page => page);
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Worlds of Sound</title>
      </Head>
      <Navbar />
      {getLayout(<Component {...pageProps} />)}
      <TOSFNavbar />
    </SessionProvider>
  );
}

export default App;
