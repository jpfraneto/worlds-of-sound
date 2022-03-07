import React from 'react';
import styles from './ServiceInformationIndividualCard.module.css';
import { FaCommentDots } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';

const ServiceInformationIndividualCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iframeContainer}>
        <iframe
          width='100%'
          height='300'
          scrolling='no'
          frameBorder='no'
          allow='autoplay'
          src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/946809619&color=%23d22779&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        ></iframe>
      </div>
      <div className={styles.btnsContainer}>
        <a
          href='https://soundcloud.com/cosmovisionrecords/cosmocast-129-djjuliimmai-a-slower-speed-of-light?in=cosmovisionrecords/sets/cosmocast-mixtapes&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
          target='_blank'
          rel='noreferrer'
        >
          Listen
        </a>
        <a>Visit</a>
      </div>
      <div className={styles.cardContainerText}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit veniam ipsam maiores mollitia amet et vel cum architecto
          accusantium dolorem dolore repudiandae aliquid aspernatur delectus
          similique veritatis, distinctio modi! Iste!
        </p>
        <div className={styles.reactionsContainer}>
          <h4>
            <span>
              8 <FaCommentDots />
            </span>
            <span>
              12 <BiLike />
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ServiceInformationIndividualCard;
