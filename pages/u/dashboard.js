import { getLayout } from '../../components/AccountLayout';

const AccountDashboard = ({ userData }) => {
  return (
    <div>
      <h2>Dashboard </h2>
      <h4>Welcome back @{userData.username}</h4>
    </div>
  );
};

AccountDashboard.getLayout = getLayout;

export default AccountDashboard;
