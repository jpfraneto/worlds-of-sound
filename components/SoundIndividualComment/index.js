import styles from './styles.module.css';
import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
          src='https://yt3.ggpht.com/5b5MRf7WDt9JZQJ__nDsK-78GJ9rTUIHo4OIA1DeyoMWa4mUOG2A-59K_BV2b9Ly9Q_dusPmOA=s88-c-k-c0x00ffffff-no-rj'
        />
      </div>

      <div className={styles.fullCommentContainer}>
        <h4>
          <Link href={`/u/${comment.author.username}`}>
            <a>{comment.author.username}</a>
          </Link>{' '}
          <span className={styles.timeAgoText}>hace 17 horas</span>
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

        <div className={styles.commentReactions}>
          <span>
            <BsHandThumbsUp />
          </span>
          <span>
            <BsHandThumbsDown />
          </span>

          <button onClick={() => alert('responder a este comentario!')}>
            Responder...
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoundIndividualComment;
