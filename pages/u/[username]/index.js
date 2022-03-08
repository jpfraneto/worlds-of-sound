import { useRouter } from 'next/router';
import NonExisting from '../../../components/404.js';
import UserPageDisplay from '../../../components/UserPageDisplay';

const UsernamePage = ({ user }) => {
  const router = useRouter();
  if (!user) return <NonExisting />;
  return (
    <UserPageDisplay
      sounds={user.sounds}
      user={user}
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
