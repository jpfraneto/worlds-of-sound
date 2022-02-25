import { getLayout as getSiteLayout } from '../SiteLayout';
import styles from './styles.module.css';
import NavbarLeft from '../NavbarLeft';
import { useSession } from 'next-auth/react';
import Loader from '../Loader';
import React, { useState, useEffect } from 'react';

const AccountLayout = ({ children, name = 'chocapec' }) => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);

  if (status === 'loading') {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  if (session)
    return (
      <div className={styles.mainContainer}>
        <NavbarLeft session={session} />
        <div className={styles.contentContainer}>
          {addPropsToChildren(children, { session })}
        </div>
      </div>
    );
};

export const getLayout = page =>
  getSiteLayout(<AccountLayout>{page}</AccountLayout>);

function addPropsToReactElement(element, props) {
  if (React.isValidElement(element)) {
    return React.cloneElement(element, props);
  }
  return element;
}

function addPropsToChildren(children, props) {
  if (!Array.isArray(children)) {
    return addPropsToReactElement(children, props);
  }
  return children.map(childElement =>
    addPropsToReactElement(childElement, props)
  );
}

export default AccountLayout;
