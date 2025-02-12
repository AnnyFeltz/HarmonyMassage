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
import RelatorioM from './paginas/RelatorioM';
import EfetuarPagamento from './paginas/EfetuarPagamento';
import VisualizarAgenda from './paginas/VisualizarAgenda';
import VisualizarAgendaM from './paginas/VisualizarAgendaM';
import EditarConta from './paginas/EditarConta';
import AgendarConsulta from './paginas/AgendarConsulta';
import AgendarConsultaM from './paginas/AgendarConsultaM';
import EditarMassagista from './paginas/EditarMassagista';
import Avaliar from './paginas/Avaliar';
import Home from './paginas/Home';
import VisualizarAgendamentos from './paginas/VisualizarAgendamentos';
import Notificacoes from './paginas/Notificacoes';
import NotificacoesM from './paginas/NotificacoesM';

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
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editar-agenda" element={<EditarAgenda />} />
          <Route path="/editar-conta" element={<EditarConta />} />
          <Route path="/efetuar-pagamento" element={<EfetuarPagamento />} />
          <Route path="/relatorio" element={<Relatorio />} />
          <Route path="/relatorio-mg" element={<RelatorioM />} />
          <Route path="/visualizar-agenda" element={<VisualizarAgenda />} />
          <Route path="/visualizar-agenda-mg" element={<VisualizarAgendaM />} />
          <Route path="/agendar/janeiro" element={<AgendarConsulta />} />
          <Route path="/agendar/janeiro/m" element={<AgendarConsultaM />} />
          <Route path="/avaliar" element={<Avaliar />} />
          <Route path="/editar-massagista" element={<EditarMassagista />} />
          <Route path="/visualizar-agendamentos" element={<VisualizarAgendamentos />} />
          <Route path="/notificacoes" element={<Notificacoes />} />
          <Route path="/notificacoes-mg" element={<NotificacoesM />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
