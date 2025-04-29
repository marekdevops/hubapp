import React, { useState } from 'react';
import { FaAppleAlt, FaCarrot } from 'react-icons/fa';

const fruits = [
  'Jabłko', 'Banan', 'Pomarańcza', 'Gruszka', 'Winogrono',
  'Truskawka', 'Ananas', 'Kiwi', 'Mango', 'Cytryna'
];

const vegetables = [
  'Marchew', 'Brokuł', 'Papryka', 'Ogórek', 'Pomidor',
  'Cebula', 'Czosnek', 'Sałata', 'Kalafior', 'Szpinak'
];

const styles = {
  app: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
    background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
    minHeight: '100vh',
    color: '#f5f6fa',
    display: 'flex'
  },
  sidebar: {
    width: '220px',
    background: '#2f3640',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  menuItem: isActive => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    background: isActive ? 'linear-gradient(90deg,#00c6ff,#0072ff)' : 'transparent',
    color: isActive ? '#fff' : '#dcdde1',
    fontWeight: 600,
    fontSize: '1.1rem',
    transition: 'background 0.3s'
  }),
  content: {
    flexGrow: 1,
    padding: '40px'
  },
  list: {
    background: '#2f3640',
    borderRadius: '10px',
    padding: '24px',
    boxShadow: '0 2px 12px #00000033',
    maxWidth: '400px'
  },
  listItem: {
    padding: '7px 0',
    borderBottom: '1px solid #353b48',
    fontSize: '1.1rem'
  },
  lastItem: {
    borderBottom: 'none'
  }
};

function App() {
  const [selectedMenu, setSelectedMenu] = useState('fruits');

  return (
    <div style={styles.app}>
      <aside style={styles.sidebar}>
        <div
          style={styles.menuItem(selectedMenu === 'fruits')}
          onClick={() => setSelectedMenu('fruits')}
          role="button"
          tabIndex={0}
          onKeyPress={() => setSelectedMenu('fruits')}
        >
          <FaAppleAlt size={24} />
          Lista owoców
        </div>
        <div
          style={styles.menuItem(selectedMenu === 'vegetables')}
          onClick={() => setSelectedMenu('vegetables')}
          role="button"
          tabIndex={0}
          onKeyPress={() => setSelectedMenu('vegetables')}
        >
          <FaCarrot size={24} />
          Lista warzyw
        </div>
      </aside>

      <main style={styles.content}>
        {selectedMenu === 'fruits' && (
          <div style={styles.list}>
            <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#00c6ff' }}>
              Lista 10 owoców:
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {fruits.map((fruit, index) => (
                <li
                  key={index}
                  style={{
                    ...styles.listItem,
                    ...(index === fruits.length - 1 ? styles.lastItem : {})
                  }}
                >
                  {fruit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedMenu === 'vegetables' && (
          <div style={styles.list}>
            <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#00c6ff' }}>
              Lista 10 warzyw:
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {vegetables.map((veg, index) => (
                <li
                  key={index}
                  style={{
                    ...styles.listItem,
                    ...(index === vegetables.length - 1 ? styles.lastItem : {})
                  }}
                >
                  {veg}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
