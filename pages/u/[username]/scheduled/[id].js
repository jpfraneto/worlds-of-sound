import { useRouter } from 'next/router';
import ScheduledSoundDisplay from '../../../../components/ScheduledSoundDisplay';

const UserScheduledSoundById = ({ scheduledSound }) => {
  console.log('the scheduled sound is: ', scheduledSound);
  const router = useRouter();
  return <ScheduledSoundDisplay scheduledSound={scheduledSound} />;
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `http://localhost:3000/api/sounds/scheduled/${context.query.id}`
  );
  const scheduledSound = await response.json();
  return {
    props: { scheduledSound },
  };
}

export default UserScheduledSoundById;
