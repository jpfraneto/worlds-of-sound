import { useRouter } from 'next/router';
import SoundsListDisplay from '../../components/SoundsListDisplay';

const UsernamePage = ({ userSounds }) => {
  console.log('the user sounds are: ', userSounds);
  const router = useRouter();
  return (
    <>
      <h2>Here goes the page for @{router.query.username}</h2>
      <SoundsListDisplay sounds={userSounds} />
    </>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `http://localhost:3000/api/users/${context.query.username}/sounds`
  );
  const user = await response.json();
  console.log('the user is: , ', user);
  return {
    props: { userSounds: user.user.sounds || [] },
  };
}

export default UsernamePage;
