import styles from './styles.module.css';
import Link from 'next/link';

const Button = ({ link, text }) => {
  return (
    <Link href={link} passHref>
      <div className={styles.btnContainer}>{text}</div>
    </Link>
  );
};

export default Button;
