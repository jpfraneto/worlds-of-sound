import { useRouter } from 'next/router';
import UserPageDisplay from '../../../components/UserPageDisplay';

const UsernamePage = ({ user }) => {
  console.log('in here, the user is: ', user);
  const router = useRouter();
  return (
    <UserPageDisplay
      sounds={user.sounds}
      scheduledSounds={user.scheduledSounds}
    />
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `http://localhost:3000/api/users/${context.query.username}/sounds`
  );
  const user = await response.json();
  console.log('the user is: ', user);
  return {
    props: { user: user.user },
  };
}

export default UsernamePage;
