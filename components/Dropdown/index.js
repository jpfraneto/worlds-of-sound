import styles from './styles.module.css';
import Link from 'next/link';

const Dropdown = ({ type, submenus, dropdown }) => {
  return (
    <ul className={`${styles.dropdown} ${dropdown ? styles.show : ''}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className={styles.menuItems}>
          <Link href={`/sounds/${type}/${submenu}`}>
            <a>{submenu}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
