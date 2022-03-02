import { getLayout } from '../../../components/SoundsLayout';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../../styles/SoundType.module.css';
import SoundElementCard from '../../../components/SoundElementCard';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import SpotifyPlayer from '../../../components/SpotifyPlayer';

const SoundTypePage = ({ sounds }) => {
  const [chosenElement, setChosenElement] = useState(null);
  const router = useRouter();
  return (
    <>
      <div className={styles.topNav}>
        <h2>{router.query.type}</h2>
      </div>
      <div className={styles.soundElementsContainer}>
        <div className={styles.innerSoundsContainer}>
          {sounds.length > 0 ? (
            <>
              {sounds.map(sound => (
                <SoundElementCard
                  sound={sound}
                  key={sound._id}
                  setChosenElement={setChosenElement}
                />
              ))}
            </>
          ) : (
            <div className={styles.noSoundsContainer}>
              <h2 className={styles.noSoundsMsg}>
                There are no sounds here :(
              </h2>
            </div>
          )}
        </div>
        <div>
          <Link
            href={{
              pathname: '/sounds/new',
              query: { type: router.query.type },
            }}
          >
            <a className={styles.newElementBtn}>Add new {router.query.type}</a>
          </Link>
        </div>
      </div>
      {chosenElement && (
        <div className={styles.playerContainer}>
          {chosenElement.provider === 'spotify' ? (
            <SpotifyPlayer url={chosenElement.url} />
          ) : (
            <ReactPlayer
              width='100%'
              height='100%'
              url={chosenElement.url}
              controls='true'
            />
          )}
        </div>
      )}
    </>
  );
};

SoundTypePage.getLayout = getLayout;

export async function getServerSideProps(context) {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  const res = await fetch(
    `${dev ? DEV_URL : PROD_URL}/api/sounds/${context.query.type}`
  );
  const sounds = await res.json();
  return {
    props: { sounds },
  };
}

export default SoundTypePage;
