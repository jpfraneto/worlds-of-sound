import { getLayout } from '../../components/AccountLayout';
import { useSession } from 'next-auth/react';
import MusicBrain from '../../components/MusicBrain';

const MusicBrainPage = ({}) => {
  const { data: session } = useSession();
  return <MusicBrain />;
};

MusicBrainPage.getLayout = getLayout;

export default MusicBrainPage;
