import { useRouter } from 'next/router';

const SpotifyCallback = () => {
  const router = useRouter();
  const code = router.query.code;
  const handleGetAccessToken = async () => {};
  return (
    <div>
      <button onClick={handleGetAccessToken}>Get Access Token</button>
    </div>
  );
};

export default SpotifyCallback;
