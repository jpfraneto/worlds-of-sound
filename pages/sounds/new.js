import { useRouter } from 'next/router';
import { getLayout } from '../../components/SoundsLayout';
import AddNewSound from '../../components/AddNewSound';

const NewSoundPage = () => {
  const router = useRouter();
  return <AddNewSound type={router.query.type} />;
};

NewSoundPage.getLayout = getLayout;

export default NewSoundPage;
