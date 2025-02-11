import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import SideBar from './componentes/SideBar';
import Signin from './paginas/Signin';
import Login from './paginas/Login';
import EditarAgenda from './paginas/EditarAgenda';
import Relatorio from './paginas/Relatorio';
import EfetuarPagamento from './paginas/EfetuarPagamento';
import VisualizarAgenda from './paginas/VisualizarAgenda';
import EditarConta from './paginas/EditarConta';




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
            <Route path="/editar-agenda" element={<EditarAgenda/>} />
            <Route path="/editar-conta" element={<EditarConta/>} />
            <Route path="/efetuar-pagamento" element={<EfetuarPagamento/>} />
            <Route path="/relatorio" element={<Relatorio/>} />
            <Route path="/visualizar-agenda" element={<VisualizarAgenda/>} />
          
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