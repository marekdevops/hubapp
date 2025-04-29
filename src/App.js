import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import LoginPage from './LoginPage';
import styles from './App.module.css';

const fruits = [ 'Jabłko', 'Banan', 'Pomarańcza', 'Gruszka', 'Winogrono', 'Truskawka', 'Ananas', 'Kiwi', 'Mango', 'Cytryna' ];
const vegetables = [ 'Marchew', 'Brokuł', 'Papryka', 'Ogórek', 'Pomidor', 'Cebula', 'Czosnek', 'Sałata', 'Kalafior', 'Szpinak' ];

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function MainApp({ onLogout }) {
  const [selectedMenu, setSelectedMenu] = useState('fruits');

  return (
    <div className={styles.appContainer}>
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} onLogout={onLogout} />
      <main className={styles.content}>
        {selectedMenu === 'fruits' && (
          <div className={styles.listCard}>
            <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#00c6ff' }}>Lista 10 owoców:</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {fruits.map((fruit, index) => (
                <li
                  key={index}
                  className={index === fruits.length - 1 ? `${styles.listItem} ${styles.lastItem}` : styles.listItem}
                >
                  {fruit}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedMenu === 'vegetables' && (
          <div className={styles.listCard}>
            <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#00c6ff' }}>Lista 10 warzyw:</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {vegetables.map((veg, index) => (
                <li
                  key={index}
                  className={index === vegetables.length - 1 ? `${styles.listItem} ${styles.lastItem}` : styles.listItem}
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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('auth'));

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MainApp onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
