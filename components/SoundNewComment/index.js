import styles from './styles.module.css';
import { useState } from 'react';
import Image from 'next/image';
import { createUniqueId } from '../../lib/functions';
import { useSession } from 'next-auth/react';

const SoundNewComment = ({ setComments, soundId, author }) => {
  const { data: session } = useSession();
  const user = session.user;
  const [visible, setVisible] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleNewComment = async () => {
    const theNewComment = {
      text: newComment,
      date: new Date().getTime(),
      id: createUniqueId(),
      author: user,
    };
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ theNewComment }),
    };
    const response = await fetch(
      `http://localhost:3000/api/sounds/id/${soundId}/comments/new`,
      reqParams
    );
    const data = await response.json();
    if (data.success) {
      setNewComment('');
      setVisible(false);
      setComments(prevComments => [theNewComment, ...prevComments]);
    }
  };
  return (
    <div className={styles.commentContainer}>
      <div className={styles.avatarImageContainer}>
        <Image
          width={50}
          height={50}
          alt='User Avatar Image'
          src={user.image}
        />
      </div>

      <div className={styles.fullCommentContainer}>
        <textarea
          placeholder='Add a new comment...'
          value={newComment}
          onFocus={() => setVisible(true)}
          onChange={e => setNewComment(e.target.value)}
        />
        <>
          {visible && (
            <>
              <hr />
              <div className={styles.newCommentBtns}>
                <button
                  onClick={() => {
                    setVisible(false);
                    setNewComment('');
                  }}
                  className={styles.cancelBtn}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleNewComment}
                  className={
                    newComment ? styles.commentBtn : styles.disabledCommentBtn
                  }
                  disabled={!newComment && true}
                >
                  Comentar
                </button>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default SoundNewComment;
