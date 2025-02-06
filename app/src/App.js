import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            /*
            avaliar
            - cliente
            - massagista
            - gerente

            editar massagistas
            - gerente

            agendamento
            - cliente
            */
          </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;