import '../styles/globals.css';
import MusicPlayer from '../components/MusicPlayer';
import Navbar from '../components/Navbar';
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
      <MusicPlayer />
    </SessionProvider>
  );
}

export default App;
