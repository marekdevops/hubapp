import React from 'react';
import { FaAppleAlt, FaCarrot, FaSignOutAlt } from 'react-icons/fa';
import styles from './Sidebar.module.css';

function Sidebar({ selectedMenu, setSelectedMenu, onLogout }) {
  return (
    <aside className={styles.sidebar}>
      <div
        className={`${styles.menuItem} ${selectedMenu === 'fruits' ? styles.menuItemActive : ''}`}
        onClick={() => setSelectedMenu('fruits')}
        role="button"
        tabIndex={0}
        onKeyPress={() => setSelectedMenu('fruits')}
      >
        <FaAppleAlt size={24} />
        Lista owoców
      </div>
      <div
        className={`${styles.menuItem} ${selectedMenu === 'vegetables' ? styles.menuItemActive : ''}`}
        onClick={() => setSelectedMenu('vegetables')}
        role="button"
        tabIndex={0}
        onKeyPress={() => setSelectedMenu('vegetables')}
      >
        <FaCarrot size={24} />
        Lista warzyw
      </div>
      <button className={styles.logoutBtn} onClick={onLogout}>
        <FaSignOutAlt size={20} />
        Wyloguj
      </button>
    </aside>
  );
}

export default Sidebar;
