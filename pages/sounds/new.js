import { useRouter } from 'next/router';
import { getLayout } from '../../components/SoundsLayout';
import AddNewSound from '../../components/AddNewSound';
import AccessDenied from '../../components/AccessDenied';
import { useSession, getSession } from 'next-auth/react';

const NewSoundPage = ({ types }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <AccessDenied />;
  }

  return <AddNewSound types={types} selectedType={router.query.type || ''} />;
};

NewSoundPage.getLayout = getLayout;

export default NewSoundPage;

export async function getStaticProps(context) {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  const response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/sounds/types`);
  const types = await response.json();
  console.log('the types are: ', types);
  return {
    props: { types },
  };
}
