import styles from './styles.module.css';
import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Moment from 'react-moment';

const SoundIndividualComment = ({ thisComment }) => {
  const [displayFull, setDisplayFull] = useState(false);
  const [comment, setComment] = useState(thisComment);
  return (
    <div className={styles.commentContainer}>
      <div className={styles.avatarImageContainer}>
        <Image
          width={50}
          height={50}
          alt='User Avatar'
          src={
            thisComment.author?.image ||
            'https://i1.sndcdn.com/avatars-000437232558-yuo0mv-t500x500.jpg'
          }
        />
      </div>

      <div className={styles.fullCommentContainer}>
        <h4>
          <Link href={`/u/${comment.author.email}`}>
            <a>{comment.author.name}</a>
          </Link>{' '}
          <span className={styles.timeAgoText}>
            <Moment fromNow date={comment.date} />
          </span>
        </h4>
        <p className={styles.commentText}>
          {comment.text.length > 100
            ? displayFull
              ? comment.text
              : comment.text.substring(0, 100) + '...'
            : comment.text}
        </p>
        {comment.text.length > 100 && (
          <span
            className={styles.substringToggle}
            onClick={() => setDisplayFull(prev => !prev)}
          >
            {!displayFull ? <p>Más Información</p> : <p>Mostrar Menos</p>}
          </span>
        )}
      </div>
    </div>
  );
};

export default SoundIndividualComment;
