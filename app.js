import React, { useState } from 'react';

const fruits = [
  'Jabłko', 'Banan', 'Pomarańcza', 'Gruszka', 'Winogrono',
  'Truskawka', 'Ananas', 'Kiwi', 'Mango', 'Cytryna'
];

const styles = {
  app: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
    background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
    minHeight: '100vh',
    color: '#f5f6fa',
    padding: '40px'
  },
  nav: {
    marginBottom: '30px',
    display: 'flex',
    gap: '15px'
  },
  button: isActive => ({
    padding: '10px 22px',
    borderRadius: '8px',
    border: 'none',
    background: isActive ? 'linear-gradient(90deg,#00c6ff,#0072ff)' : '#2f3640',
    color: isActive ? '#fff' : '#dcdde1',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    boxShadow: isActive ? '0 2px 12px #00c6ff33' : 'none',
    transition: 'all 0.2s'
  }),
  list: {
    background: '#2f3640',
    borderRadius: '10px',
    padding: '24px',
    boxShadow: '0 2px 12px #00000033',
    maxWidth: '340px'
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
  const [selectedMenu, setSelectedMenu] = useState('home');

  return (
    <div style={styles.app}>
      <nav style={styles.nav}>
        <button
          onClick={() => setSelectedMenu('home')}
          style={styles.button(selectedMenu === 'home')}
        >
          Strona główna
        </button>
        <button
          onClick={() => setSelectedMenu('fruits')}
          style={styles.button(selectedMenu === 'fruits')}
        >
          Lista owoców
        </button>
      </nav>

      {selectedMenu === 'home' && (
        <h1 style={{ fontWeight: 700, letterSpacing: '1px' }}>
          Witaj na stronie głównej!
        </h1>
      )}

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
    </div>
  );
}

export default App;
