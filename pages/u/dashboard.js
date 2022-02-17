import { useSession } from 'next-auth/react';
import AccessDenied from '../../components/AccessDenied';

const Dashboard = () => {
  const { data: session } = useSession();
  if (typeof window !== 'undefined') return null;
  if (!session) {
    return (
      <>
        <AccessDenied />
      </>
    );
  }

  return <div>This is the dashboard for the authenticated user</div>;
};

export default Dashboard;
