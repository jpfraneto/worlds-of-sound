import { getLayout } from '../../components/AccountLayout';

const AccountDashboard = ({ session }) => {
  return (
    <div>
      <h2>Dashboard </h2>
      <p>Welcome back @{session.username}</p>
    </div>
  );
};

AccountDashboard.getLayout = getLayout;

export default AccountDashboard;
