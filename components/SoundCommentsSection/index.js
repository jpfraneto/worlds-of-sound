import SoundIndividualComment from '../SoundIndividualComment';
import SoundNewComment from '../SoundNewComment';
import styles from './styles.module.css';
import { useState } from 'react';

const SoundCommentsSection = ({ soundComments, soundId }) => {
  const [comments, setComments] = useState(soundComments || []);
  return (
    <div className={styles.commentsSectionContainer}>
      <div className={styles.numberOfCommentsContainer}>
        <p>{comments.length} Comments</p>
      </div>
      <SoundNewComment setComments={setComments} soundId={soundId} />
      {comments.length > 0 &&
        comments.reverse().map(comment => {
          return <SoundIndividualComment thisComment={comment} />;
        })}
    </div>
  );
};

export default SoundCommentsSection;
