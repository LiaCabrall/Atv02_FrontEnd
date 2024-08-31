import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Contato from './components/contato';
import MinhaRotina from './components/rotina';

function AppContent() {
  const [showMessage, setShowMessage] = useState(true);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setShowMessage(false);
    navigate(path);
  };

  return (
    <div className='container-links'>
      {showMessage && (
        <div className='welcome-message'>
          <p>Bem-vindo(a)! Clique em um dos links abaixo para navegar para as páginas correspondentes.</p>
        </div>
      )}

      <nav>
        <ul>
          <li>
            <Link to="/rotina" onClick={() => handleLinkClick('/rotina')}>Minha Rotina</Link>
          </li>
          <li>
            <Link to="/contato" onClick={() => handleLinkClick('/contato')}>Contato</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/contato" element={<Contato />} />
        <Route path="/rotina" element={<MinhaRotina />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
