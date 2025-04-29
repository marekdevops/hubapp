import React, { useState } from 'react';

const DUMMY_USER = {
  username: 'admin',
  password: 'haslo123'
};

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username === DUMMY_USER.username &&
      password === DUMMY_USER.password
    ) {
      onLogin();
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
