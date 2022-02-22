import styles from './styles.module.css';
import { useState } from 'react';
import Dropdown from '../Dropdown';

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className={styles.menuItems}>
      {items.subgenres ? (
        <>
          <h2
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown(prev => !prev)}
          >
            {items.type}
          </h2>
          <Dropdown
            type={items.type}
            submenus={items.subgenres}
            dropdown={dropdown}
          />
        </>
      ) : (
        <span>{items.type}</span>
      )}
    </li>
  );
};

export default MenuItems;
