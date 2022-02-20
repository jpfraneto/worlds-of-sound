import { useSession, signIn, signOut } from 'next-auth/react';

const Testing = () => {
  const { data: session } = useSession();
  if (session) {
    console.log(session.user);
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Testing;
