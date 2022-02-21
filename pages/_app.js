import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps: { session, ...pageProps }, router }) {
  const getLayout = Component.getLayout || (page => page);
  return (
    <SessionProvider session={session}>
      <Navbar />
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}

export default App;
