import React, { useState } from 'react';
import styles from './NameGenerator.module.css';

export default function NameGenerator() {
  const [inputName, setInputName] = useState('');
  const [generatedName, setGeneratedName] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();
    setGeneratedName('');
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
        setGeneratedName(data.output);
      }
    } catch (err) {
      setError('Błąd połączenia z serwerem.'+ err);
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
    <textarea
      rows={5}
      readOnly
      value={generatedNames}
      className={styles.generatedNames}
    />
  </div>
  );
}
