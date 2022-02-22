import { getLayout } from '../../components/AccountLayout';
import { useSession } from 'next-auth/react';
import MusicBrain from '../../components/MusicBrain';

const MusicBrainPage = ({}) => {
  const { data: session } = useSession();
  const handleGetMusicSoundcloud = async () => {};
  // const handleGetMusicYoutube = async () => {
  //   const params = {
  //     part: 'snippet',
  //     maxResults: 5,
  //     key: process.env.GOOGLE_API_KEY,
  //     q: 'car',
  //     type: 'GET',
  //   };
  //   const response = await fetch(
  //     'https://www.googleapis.com/youtube/v3/search',
  //     params
  //   );
  // };
  return <MusicBrain />;
};

MusicBrainPage.getLayout = getLayout;

export default MusicBrainPage;
