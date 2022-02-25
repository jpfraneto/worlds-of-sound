import styles from './styles.module.css';

const Loader = () => {
  return (
    <>
      <div className={styles.ldsHeart}>
        <div></div>
      </div>
      <h4>Loading...</h4>
    </>
  );
};

export default Loader;
