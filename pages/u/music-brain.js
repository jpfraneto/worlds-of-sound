import { getLayout } from '../../components/AccountLayout';
import { useSession } from 'next-auth/react';

const MusicBrain = ({}) => {
  const { data: session } = useSession();
  const handleGetMusicSoundcloud = async () => {};
  const handleGetMusicYoutube = async () => {
    const params = {
      part: 'snippet',
      maxResults: 5,
      key: process.env.GOOGLE_API_KEY,
      q: 'car',
      type: 'GET',
    };
    const response = await fetch(
      'https://www.googleapis.com/youtube/v3/search',
      params
    );
  };
  return (
    <div>
      <h2>Music Brain</h2>
      <button onClick={handleGetMusicYoutube}>Get My Music of Youtube!</button>

      <button onClick={handleGetMusicSoundcloud}>
        Get My Music of Soundcloud!
      </button>
    </div>
  );
};

MusicBrain.getLayout = getLayout;

export default MusicBrain;
