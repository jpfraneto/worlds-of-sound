import styles from './styles.module.css';
import { useState, useEffect, useRef } from 'react';
import Dropdown from '../Dropdown';
import Link from 'next/link';

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = event => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const handleMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const handleMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className={styles.menuItems}
      ref={ref}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {items.subgenres ? (
        <>
          <Link href={`/sounds/${items.type}`}>
            <a
              type='button'
              aria-haspopup='menu'
              aria-expanded={dropdown ? 'true' : 'false'}
              // onClick={() => setDropdown(prev => !prev)}
            >
              {items.type}
            </a>
          </Link>

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
