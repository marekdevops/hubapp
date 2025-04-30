import React, { useState } from 'react';
import { FaAppleAlt, FaCarrot, FaSignOutAlt, FaTools, FaRandom } from 'react-icons/fa';
import styles from './Sidebar.module.css';

function Sidebar({ selectedMenu, setSelectedMenu, onLogout }) {
  const [toolsExpanded, setToolsExpanded] = useState(false);
  
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
      
      {/* Nowa pozycja Tools */}
      <div
        className={`${styles.menuItem} ${(selectedMenu === 'tools' || selectedMenu === 'nameGenerator') ? styles.menuItemActive : ''}`}
        onClick={() => setToolsExpanded(!toolsExpanded)}
        role="button"
        tabIndex={0}
        onKeyPress={() => setToolsExpanded(!toolsExpanded)}
      >
        <FaTools size={24} />
        Tools
      </div>
      
      {/* Podmenu dla Tools */}
      {toolsExpanded && (
        <div className={styles.submenu}>
          <div
            className={`${styles.submenuItem} ${selectedMenu === 'nameGenerator' ? styles.submenuItemActive : ''}`}
            onClick={() => setSelectedMenu('nameGenerator')}
            role="button"
            tabIndex={0}
            onKeyPress={() => setSelectedMenu('nameGenerator')}
          >
            <FaRandom size={16} />
            Generator nazw
          </div>
        </div>
      )}
      
      <button className={styles.logoutBtn} onClick={onLogout}>
        <FaSignOutAlt size={20} />
        Wyloguj
      </button>
    </aside>
  );
}

export default Sidebar;
