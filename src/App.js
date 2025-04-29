import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { FaAppleAlt, FaCarrot, FaSignOutAlt } from 'react-icons/fa';

// --- Dane ---
const fruits = [
  'Jabłko', 'Banan', 'Pomarańcza', 'Gruszka', 'Winogrono',
  'Truskawka', 'Ananas', 'Kiwi', 'Mango', 'Cytryna'
];

const vegetables = [
  'Marchew', 'Brokuł', 'Papryka', 'Ogórek', 'Pomidor',
  'Cebula', 'Czosnek', 'Sałata', 'Kalafior', 'Szpinak'
];

// --- Style ---
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
  logoutBtn: {
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 16px',
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(90deg,#ff5858,#f09819)',
    color: '#fff',
    fontWeight: 600,
    fontSize: '1.05rem',
    cursor: 'pointer',
    boxShadow: '0 2px 12px #ff585833',
    transition: 'background 0.2s'
  },
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

// --- Komponent logowania ---
function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const DUMMY_USER = { username: 'admin', password: 'haslo123' };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username === DUMMY_USER.username &&
      password === DUMMY_USER.password
    ) {
      onLogin();
      navigate('/');
    } else {
      setError('Nieprawidłowy login lub hasło');
    }
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #232526 0%, #414345 100%)'
    }}>
      <form onSubmit={handleSubmit} style={{
        background: '#2f3640', padding: 32, borderRadius: 12, boxShadow: '0 2px 12px #0008',
        display: 'flex', flexDirection: 'column', minWidth: 300
      }}>
        <h2 style={{ color: '#00c6ff', marginBottom: 24 }}>Logowanie</h2>
        <input
          type="text"
          placeholder="Login"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ marginBottom: 16, padding: 10, borderRadius: 6, border: '1px solid #353b48', background: '#232526', color: '#fff' }}
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ marginBottom: 16, padding: 10, borderRadius: 6, border: '1px solid #353b48', background: '#232526', color: '#fff' }}
        />
        {error && <div style={{ color: '#ff7675', marginBottom: 12 }}>{error}</div>}
        <button type="submit" style={{
          padding: '10px 0', borderRadius: 6, border: 'none', background: 'linear-gradient(90deg,#00c6ff,#0072ff)', color: '#fff', fontWeight: 600
        }}>
          Zaloguj
        </button>
      </form>
    </div>
  );
}

// --- Protected Route ---
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// --- Główna aplikacja z panelem bocznym ---
function MainApp({ onLogout }) {
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
        <button style={styles.logoutBtn} onClick={onLogout}>
          <FaSignOutAlt size={20} />
          Wyloguj
        </button>
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

// --- Główny komponent aplikacji ---
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('auth')
  );

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
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} />}
        />
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
