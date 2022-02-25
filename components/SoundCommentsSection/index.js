import SoundIndividualComment from '../SoundIndividualComment';
import SoundNewComment from '../SoundNewComment';
import { useSession } from 'next-auth/react';

import styles from './styles.module.css';
import { useState } from 'react';

const SoundCommentsSection = ({ soundComments, soundId }) => {
  const [comments, setComments] = useState(soundComments || []);
  const { data: session } = useSession();
  if (session) {
    const author = { username: session.username, id: session.id };
  }

  return (
    <div className={styles.commentsSectionContainer}>
      <div className={styles.numberOfCommentsContainer}>
        <p>{comments.length} Comments</p>
      </div>
      {session && session.user ? (
        <SoundNewComment
          setComments={setComments}
          soundId={soundId}
          author={author}
        />
      ) : (
        <p>Please login to add a comment :)</p>
      )}
      {comments.length > 0 &&
        comments.reverse().map(comment => {
          return (
            <SoundIndividualComment key={comment.id} thisComment={comment} />
          );
        })}
    </div>
  );
};

export default SoundCommentsSection;
