import React from 'react';
import styles from './ServiceInformationIndividualCard.module.css';
import { FaCommentDots } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { FcRating } from 'react-icons/fc';
import Link from 'next/link';

const ServiceInformationIndividualCard = ({ sound }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iframeContainer}>
        {sound.provider === 'soundcloud' && (
          <iframe
            className={styles.soundIframe}
            scrolling='no'
            frameBorder='no'
            allow='autoplay'
            src={`https://w.soundcloud.com/player/?url=${sound.url}&color=%23d22779&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
          ></iframe>
        )}
        {sound.provider === 'youtube' && (
          <iframe
            className={styles.soundIframe}
            scrolling='no'
            frameBorder='no'
            allow='autoplay'
            src={`https://www.youtube.com/embed/${sound.soundId}`}
          ></iframe>
        )}
      </div>
      <div className={styles.btnsContainer}>
        <a href={sound.url} target='_blank' rel='noreferrer'>
          Listen
        </a>
        <Link href={`/sounds/id/${sound._id}`}>
          <a>Visit</a>
        </Link>
      </div>
      <div className={styles.cardContainerText}>
        <p>{sound.review}</p>
        <div className={styles.reactionsContainer}>
          <h4>
            <span>
              {sound.comments ? sound.comments.length : 0} <FaCommentDots />
            </span>
            <span>
              {sound.rangeRating}/100 <FcRating />
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ServiceInformationIndividualCard;
