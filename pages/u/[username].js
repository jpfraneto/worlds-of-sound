import { useRouter } from 'next/router';
import SoundsListDisplay from '../../components/SoundsListDisplay';

const UsernamePage = ({ userMusic }) => {
  const router = useRouter();
  console.log('the user music is: ', userMusic);
  return (
    <>
      <h2>Here goes the page for @{router.query.username}</h2>
      <SoundsListDisplay sounds={userMusic} />
    </>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `http://localhost:3000/api/users/${context.query.username}/sounds`
  );
  const user = await response.json();
  return {
    props: { userMusic: user.user.music },
  };
}

export default UsernamePage;
