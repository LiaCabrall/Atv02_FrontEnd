import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contato from './components/contato';
import MinhaRotina from './components/rotina';

export default function App() {
  return (
    <div className='container-links'>
    <Router>
      <nav>
        <ul>
        <li>
            <Link to="/minharotina">Minha Rotina</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/contato" element={<Contato />} />
        <Route path="/minharotina" element={<MinhaRotina />} />
      </Routes>
    </Router>
    </div>
  );
}
