import { getLayout } from '../../../components/SoundsLayout';
import SoundDisplayPage from '../../../components/SoundDisplayPage';

const SoundById = ({ sound }) => {
  return <SoundDisplayPage sound={sound} />;
};

SoundById.getLayout = getLayout;

export async function getServerSideProps(context) {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  const response = await fetch(
    `${dev ? DEV_URL : PROD_URL}/api/sounds/id/${context.query.id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        cookie: context.req.headers.cookie,
      },
    }
  );
  const sound = await response.json();
  return {
    props: { sound },
  };
}

export default SoundById;
