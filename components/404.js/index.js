import styles from './styles.module.css';
const NonExisting = () => {
  return (
    <div className={styles.mainContainer}>
      <p>
        <strong>404</strong> | This page could not be found
      </p>
    </div>
  );
};

export default NonExisting;
