import styles from './styles.module.css';

const SoundCategory = ({ queryElements }) => {
  return (
    <div className={styles.mainContainer}>
      <h1>
        {queryElements.type.toUpperCase()} :{' '}
        {queryElements.category.toUpperCase()}
      </h1>
    </div>
  );
};

export default SoundCategory;
