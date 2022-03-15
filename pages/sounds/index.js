import SoundsPageDisplay from '../../components/SoundsPageDisplay';

const Sounds = ({ types }) => {
  console.log('the types are: ', types);
  return <SoundsPageDisplay soundtypes={types} />;
};

export default Sounds;

export async function getStaticProps(context) {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  const response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/sounds/types`);
  const types = await response.json();
  return {
    props: { types },
  };
}
