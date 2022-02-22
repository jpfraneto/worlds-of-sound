import { getLayout as getSiteLayout } from '../SiteLayout';
import styles from './styles.module.css';
import NavbarLeft from '../NavbarLeft';
import { useSession } from 'next-auth/react';
import Loader from '../Loader';
import React, { useState, useEffect } from 'react';

const AccountLayout = ({ children, name = 'chocapec' }) => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState({ name: 'chocapec' });
  useEffect(async () => {
    if (!session) return;
    const fetchUser = async email => {
      const data = await fetch(`/api/users/${email}`);
      const json = await data.json();
      console.log('inside the fetch user function', json);
      setUserData(json);
    };
    fetchUser(session.user.email).catch(console.error);
  }, [session]);
  if (session)
    return (
      <div className={styles.mainContainer}>
        <NavbarLeft session={session} userData={userData} />
        <div className={styles.contentContainer}>
          {addPropsToChildren(children, { userData, setUserData })}
        </div>
      </div>
    );
  else return <Loader />;
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
