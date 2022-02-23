import { getLayout } from '../../../components/SoundsLayout';

const SoundById = ({ sound }) => {
  console.log('inside the component, the aloja is: ', sound);
  return <h2>This is the page for a particular id</h2>;
};

SoundById.getLayout = getLayout;

export async function getServerSideProps(context) {
  console.log('THIS IS RUNNING');
  const res = await fetch(
    `http://localhost:3000/api/sounds/id/${context.query.id}`
  );
  const sound = await res.json();
  return {
    props: { sound },
  };
}

export default SoundById;
