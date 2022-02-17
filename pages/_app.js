import '../styles/globals.css';
import MusicPlayer from '../components/MusicPlayer';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <MusicPlayer />
    </SessionProvider>
  );
}

export default MyApp;
