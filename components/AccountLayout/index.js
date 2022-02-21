import { getLayout as getSiteLayout } from '../SiteLayout';
import styles from './styles.module.css';
import NavbarLeft from '../NavbarLeft';
import { useSession } from 'next-auth/react';
import Loader from '../Loader';

const AccountLayout = ({ children }) => {
  const { data: session } = useSession();
  if (session)
    return (
      <div className={styles.mainContainer}>
        <NavbarLeft session={session} />
        <div className={styles.contentContainer}>{children}</div>
      </div>
    );
  else return <Loader />;
};

export const getLayout = page =>
  getSiteLayout(<AccountLayout>{page}</AccountLayout>);

export default AccountLayout;
