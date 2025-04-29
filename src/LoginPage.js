import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

const DUMMY_USER = { username: 'admin', password: 'haslo123' };

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
      onLogin();
      navigate('/');
    } else {
      setError('Nieprawidłowy login lub hasło');
    }
  };

  return (
    <div className={styles.loginBg}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2 className={styles.loginTitle}>Logowanie</h2>
        <input
          type="text"
          placeholder="Login"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className={styles.loginInput}
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={styles.loginInput}
        />
        {error && <div className={styles.loginError}>{error}</div>}
        <button type="submit" className={styles.loginButton}>
          Zaloguj
        </button>
      </form>
    </div>
  );
}
