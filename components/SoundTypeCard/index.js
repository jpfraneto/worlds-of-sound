import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import { BsSpotify } from 'react-icons/bs';
import { FaSoundcloud } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';

const SoundTypeCard = ({ soundtype }) => {
  return (
    <Link key={soundtype._id} href={`/sounds/${soundtype.soundtype}`} passHref>
      <div className={styles.soundTypeCardContainer}>
        {soundtype.typeImage && (
          <Image
            src={soundtype.typeImage}
            width='400'
            height='300'
            alt={`${soundtype.type}s display image`}
          />
        )}
        <h3 className={styles.soundtypeTitle}>{soundtype.soundtype}</h3>
        <div className={styles.servicesLogosDisplay}>
          <span className={styles.icon}>
            <BsSpotify />
          </span>{' '}
          : {soundtype.sounds.spotify.length} |{' '}
          <span className={styles.icon}>
            <FaSoundcloud />
          </span>{' '}
          : {soundtype.sounds.soundcloud.length} |{' '}
          <span className={styles.icon}>
            <AiFillYoutube />
          </span>{' '}
          :{soundtype.sounds.youtube.length}{' '}
        </div>
      </div>
    </Link>
  );
};

export default SoundTypeCard;
