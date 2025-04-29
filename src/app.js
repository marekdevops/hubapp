import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProtectedRoute from './ProtectedRoute';
// ...importy ikon i stylów jak wcześniej

// ...tablice fruits i vegetables oraz styles jak w poprzednich przykładach

function MainApp({ onLogout }) {
  // Twój panel boczny i menu, np. jak wcześniej
  // Dodaj przycisk "Wyloguj" w panelu bocznym:
  // <button onClick={onLogout}>Wyloguj</button>
  // ...reszta kodu aplikacji
}

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
