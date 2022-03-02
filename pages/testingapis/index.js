import Link from 'next/link';

const TestingApis = () => {
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <ul>
        <li>
          {' '}
          <Link href='/testingapis/spotify'>
            <a>Spotify</a>
          </Link>
        </li>
        <li>
          <Link href='/testingapis/soundcloud'>
            <a>Soundcloud</a>
          </Link>
        </li>
        <li>
          {' '}
          <Link href='/testingapis/youtube'>
            <a>Youtube</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TestingApis;
