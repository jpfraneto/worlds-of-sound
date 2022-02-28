import ScheduledSoundDisplay from '../../../components/ScheduledSoundDisplay';

const ScheduledSound = ({ scheduledSound }) => {
  console.log('IIIN HERE, THE SCHEDULED SOUND IS: ', scheduledSound);
  return <ScheduledSoundDisplay scheduledSound={scheduledSound} />;
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `http://localhost:3000/api/sounds/scheduled/${context.query.id}`
  );
  const data = await response.json();
  return {
    props: {
      scheduledSound: data,
    },
  };
}

export default ScheduledSound;
