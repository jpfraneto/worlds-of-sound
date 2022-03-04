import styles from './styles.module.css';

const TOSFNavbar = () => {
  return (
    <div className={styles.bottomNav}>
      This project is in memory of David Foster Wallace and all of those who
      lost the fight against their own demons.
      <a
        className={styles.tosflink}
        href='http://www.theopensourcefactory.com'
        target='_blank'
      >
        The Open Source Factory
      </a>
    </div>
  );
};

export default TOSFNavbar;
