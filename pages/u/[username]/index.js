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
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  const response = await fetch(
    `${dev ? DEV_URL : PROD_URL}/api/users/${context.query.username}/sounds`
  );
  const user = await response.json();
  return {
    props: { user: user.user },
  };
}

export default UsernamePage;
