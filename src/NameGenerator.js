import React, { useState } from 'react';
import styles from './NameGenerator.module.css';

function generateModifiedName(input) {
  if (!input.trim()) return '';
  // Przykładowa modyfikacja: dodaj losowy przedrostek i przyrostek
  const prefixes = ['Super', 'Mega', 'Ultra', 'Quantum', 'Cyber', 'Hyper'];
  const suffixes = ['Pro', 'Plus', 'Max', 'Zone', 'Sync', 'Prime'];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return `${prefix}${input.charAt(0).toUpperCase() + input.slice(1)}${suffix}`;
}

export default function NameGenerator() {
  const [inputName, setInputName] = useState('');
  const [generatedName, setGeneratedName] = useState('');

  const handleGenerate = (e) => {
    e.preventDefault();
    setGeneratedName(generateModifiedName(inputName));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Generator nazw</h2>
      <p className={styles.description}>
        Wpisz swoją nazwę, a generator doda do niej kreatywny przedrostek i przyrostek!
      </p>
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
      {generatedName && (
        <div className={styles.resultBox}>
          <h3>Wygenerowana nazwa:</h3>
          <div className={styles.generatedName}>{generatedName}</div>
        </div>
      )}
    </div>
  );
}
