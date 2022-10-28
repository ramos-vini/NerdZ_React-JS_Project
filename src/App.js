import React from 'react';
import './App.css';
import Catalogo from './pages/catalogo/Catalogo';
import Login from '../src/pages/login/Login'
import Registro from './pages/registro/Registro';
import Produto from './pages/produto/Produto';
import NotFound from './pages/notFound/NotFound';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Catalogo />} />
          <Route exact path="/home" element={<Catalogo />} />
          <Route exact path="/catalogo" element={<Catalogo />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registro" element={<Registro />} />
          <Route exact path="/produto" element={<Produto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
