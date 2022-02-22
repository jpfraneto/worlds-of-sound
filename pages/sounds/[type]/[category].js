import { useRouter } from 'next/router';
import { getLayout } from '../../../components/SoundsLayout';
import SoundCategory from '../../../components/SoundCategory';

const SoundCategoryPage = () => {
  const router = useRouter();
  return <SoundCategory queryElements={router.query} />;
};

SoundCategoryPage.getLayout = getLayout;

export default SoundCategoryPage;
