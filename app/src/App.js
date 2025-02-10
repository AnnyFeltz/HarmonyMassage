import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import SideBar from './componentes/SideBar';
import Signin from './paginas/Signin';
import Login from './paginas/Login';


function App() {
  return (
    <Router>
      <div className='app'>
        <SideBar/>
        <div className='main-content'>
          <Header/>
          <Routes>
            <Route path="/" element={<Signin/>} />
            <Route path="/login" element={<Login/>} />
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