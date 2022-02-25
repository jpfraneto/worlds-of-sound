import { useRouter } from 'next/router';
import { getLayout } from '../../components/SoundsLayout';
import AddNewSound from '../../components/AddNewSound';
import AccessDenied from '../../components/AccessDenied';
import { useSession, getSession } from 'next-auth/react';

const NewSoundPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <AccessDenied />;
  }

  return <AddNewSound type={router.query.type} />;
};

NewSoundPage.getLayout = getLayout;

export default NewSoundPage;
