import Link from 'next/link';
import { getLayout } from '../../components/AccountLayout';

const AccountDashboard = ({ session }) => {
  return (
    <div>
      <h2>Dashboard </h2>
      <Link href={`/u/${session.user.email}`}>
        <a>Go to my page!</a>
      </Link>
    </div>
  );
};

AccountDashboard.getLayout = getLayout;

export default AccountDashboard;
