import { getLayout } from '../../../components/SoundsLayout';
import SoundDisplayPage from '../../../components/SoundDisplayPage';

const SoundById = ({ sound }) => {
  return <SoundDisplayPage sound={sound} />;
};

SoundById.getLayout = getLayout;

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/sounds/id/${context.query.id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        cookie: context.req.headers.cookie,
      },
    }
  );
  const sound = await res.json();
  return {
    props: { sound },
  };
}

export default SoundById;
