import React, { useState } from 'react';
import styles from './NameGenerator.module.css';

function NameGenerator() {
  const [generatedNames, setGeneratedNames] = useState('');
  const [inputName, setInputName] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();
    setGeneratedNames('');
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: inputName })
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setGeneratedNames(data.output); // zakładamy, że output to string z '\n'
      }
    } catch (err) {
      setError('Błąd połączenia z serwerem.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Generator nazw</h2>
      <form onSubmit={handleGenerate} className={styles.form}>
        <input
          type="text"
          placeholder="Wpisz nazwę"
          value={inputName}
          onChange={e => setInputName(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Generuj
        </button>
      </form>
      {generatedNames && (
        <textarea
          rows={5}
          readOnly
          value={generatedNames}
          className={styles.generatedNames}
        />
      )}
      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>
      )}
    </div>
  );
}

export default NameGenerator;
