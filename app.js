import React, { useState } from 'react';

const fruits = [
  'Jabłko', 'Banan', 'Pomarańcza', 'Gruszka', 'Winogrono',
  'Truskawka', 'Ananas', 'Kiwi', 'Mango', 'Cytryna'
];

function App() {
  const [selectedMenu, setSelectedMenu] = useState('home');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setSelectedMenu('home')} style={{ marginRight: '10px' }}>
          Strona główna
        </button>
        <button onClick={() => setSelectedMenu('fruits')}>
          Lista owoców
        </button>
      </nav>

      {selectedMenu === 'home' && <h1>Witaj na stronie głównej!</h1>}

      {selectedMenu === 'fruits' && (
        <div>
          <h2>Lista 10 owoców:</h2>
          <ul>
            {fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
