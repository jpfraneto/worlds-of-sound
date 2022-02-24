import styles from './styles.module.css';
import { useState } from 'react';

const SoundNewComment = ({ setComments, soundId }) => {
  const [visible, setVisible] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleNewComment = async () => {
    const theNewComment = {
      text: newComment,
      date: new Date().getTime(),
      author: 'jpfraneto',
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
    console.log('the data that came back is: ', data);
    if (data.success) {
      setNewComment('');
      setVisible(false);
      setComments(prevComments => [theNewComment, ...prevComments]);
    }
  };
  return (
    <div className={styles.commentContainer}>
      <img src='https://yt3.ggpht.com/5b5MRf7WDt9JZQJ__nDsK-78GJ9rTUIHo4OIA1DeyoMWa4mUOG2A-59K_BV2b9Ly9Q_dusPmOA=s88-c-k-c0x00ffffff-no-rj' />
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
