import { useRouter } from 'next/router';

const UsernamePage = () => {
  const router = useRouter();
  return <h2>Here goes the page for @{router.query.username}</h2>;
};

export default UsernamePage;
