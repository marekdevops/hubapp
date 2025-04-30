import React, { useState } from 'react';
import styles from './NameGenerator.module.css';

const prefixes = ['Super', 'Mega', 'Ultra', 'Quantum', 'Cyber', 'Hyper', 'Turbo', 'Extreme', 'Power', 'Smart'];
const roots = ['Tech', 'Soft', 'Ware', 'Code', 'Dev', 'Net', 'Web', 'Cloud', 'Data', 'App'];
const suffixes = ['Pro', 'Plus', 'Max', 'Elite', 'Prime', 'Master', 'Expert', 'Hub', 'Zone', 'Sync'];

function NameGenerator() {
  const [generatedNames, setGeneratedNames] = useState([]);
  const [nameCount, setNameCount] = useState(5);

  const generateRandomName = () => {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const root = roots[Math.floor(Math.random() * roots.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    // 50% szans na dodanie sufiksu
    return Math.random() > 0.5 
      ? `${prefix}${root}` 
      : `${prefix}${root}${suffix}`;
  };

  const handleGenerate = () => {
    const newNames = [];
    for (let i = 0; i < nameCount; i++) {
      newNames.push(generateRandomName());
    }
    setGeneratedNames(newNames);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Generator nazw</h2>
      <p className={styles.description}>
        Wygeneruj kreatywne nazwy dla Twoich projektów, produktów lub firm.
      </p>
      
      <div className={styles.controls}>
        <div className={styles.inputGroup}>
          <label htmlFor="nameCount">Liczba nazw:</label>
          <input 
            type="number" 
            id="nameCount"
            min="1"
            max="20"
            value={nameCount}
            onChange={(e) => setNameCount(parseInt(e.target.value) || 1)}
            className={styles.input}
          />
        </div>
        <button onClick={handleGenerate} className={styles.button}>
          Generuj
        </button>
      </div>
      
      {generatedNames.length > 0 && (
        <div className={styles.results}>
          <h3>Wygenerowane nazwy:</h3>
          <ul className={styles.namesList}>
            {generatedNames.map((name, index) => (
              <li key={index} className={styles.nameItem}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NameGenerator;
