import ScheduledSoundDisplay from '../../../components/ScheduledSoundDisplay';

const ScheduledSound = ({ scheduledSound }) => {
  return <ScheduledSoundDisplay scheduledSound={scheduledSound} />;
};

export async function getServerSideProps(context) {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  const response = await fetch(
    `${dev ? DEV_URL : PROD_URL}/api/sounds/scheduled/${context.query.id}`
  );
  const data = await response.json();
  return {
    props: {
      scheduledSound: data,
    },
  };
}

export default ScheduledSound;
