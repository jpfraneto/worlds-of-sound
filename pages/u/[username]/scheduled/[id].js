import { useRouter } from 'next/router';
import ScheduledSoundDisplay from '../../../../components/ScheduledSoundDisplay';

const UserScheduledSoundById = ({ scheduledSound }) => {
  console.log('the scheduled sound is: ', scheduledSound);
  const router = useRouter();
  return <ScheduledSoundDisplay scheduledSound={scheduledSound} />;
};

export async function getServerSideProps(context) {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  const response = await fetch(
    `${dev ? DEV_URL : PROD_URL}/api/sounds/scheduled/${context.query.id}`
  );
  const scheduledSound = await response.json();
  return {
    props: { scheduledSound },
  };
}

export default UserScheduledSoundById;
