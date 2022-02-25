import { useRouter } from 'next/router';
import { getLayout } from '../../../components/SoundsLayout';
import SoundCategory from '../../../components/SoundCategory';

const SoundCategoryPage = ({ aloja }) => {
  const router = useRouter();
  return <SoundCategory queryElements={router.query} />;
};

SoundCategoryPage.getLayout = getLayout;

export async function getServerSideProps() {
  return {
    props: { aloja: 1234 },
  };
}

export default SoundCategoryPage;
