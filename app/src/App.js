import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './Relatorio.css';
import Header from './componentes/Header';
import SideBar from './componentes/SideBar';
import Signin from './paginas/Signin';
import Login from './paginas/Login';
import EditarAgenda from './paginas/EditarAgenda';
import Relatorio from './paginas/Relatorio';
import EfetuarPagamento from './paginas/EfetuarPagamento';
import VisualizarAgenda from './paginas/VisualizarAgenda';
import EditarConta from './paginas/EditarConta';
import AgendarConsulta from './AgendarConsulta';
import Agendamento from './paginas/Agendamento';
import EditarMassagista from './paginas/EditarMassagista';
import Avaliar from './paginas/Avaliar';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/' || location.pathname === '/login';  // Verifica se é a página de login ou signin

  return (
    <div className='app'>
      {!isAuthPage && <SideBar />}
      <div className='main-content'>
        {!isAuthPage && <Header />}
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editar-agenda" element={<EditarAgenda />} />
          <Route path="/editar-conta" element={<EditarConta />} />
          <Route path="/efetuar-pagamento" element={<EfetuarPagamento />} />
          <Route path="/relatorio" element={<Relatorio />} />
          <Route path="/visualizar-agenda" element={<VisualizarAgenda />} />
          <Route path="/avaliar" element={<Avaliar />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/editar-massagista" element={<EditarMassagista />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
