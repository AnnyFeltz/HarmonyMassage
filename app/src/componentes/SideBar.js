import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
    const [menuAberto, setMenuAberto] = useState(false);

    function toggleMenu(){
        setMenuAberto(!menuAberto);
    }

    return (
        <div className={`sidebar ${menuAberto? "aberto" : ""}`}>
            <div className='menu-icon' onClick={toggleMenu}>
                &#9776;
            </div>
                <nav className={menuAberto?"menu-visivel":"menu-escondido"}>
                    <ul>
                        <p>Cliente</p>
                        <li><Link to="/home" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/efetuar-pagamento" onClick={toggleMenu}>Efetuar Pagamento</Link></li>
                        <li><Link to="/notificacoes" onClick={toggleMenu}>Notificações</Link></li>
                        <li><Link to="/editar-conta" onClick={toggleMenu}>Editar Conta</Link></li>
                        <li><Link to="/visualizar-agenda" onClick={toggleMenu}>Visualizar Agenda</Link></li>
                        <li><Link to="/visualizar-agendamentos" onClick={toggleMenu}>Agendamentos</Link></li>

                        
                        <p>Massagista</p>
                        <li><Link to="/home-m" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/editar-conta" onClick={toggleMenu}>Editar Conta</Link></li>
                        <li><Link to="/relatorio" onClick={toggleMenu}>Relatorio</Link></li>
                        <li><Link to="/notificacoes-mg" onClick={toggleMenu}>Notificações</Link></li>
                        <li><Link to="/editar-agenda" onClick={toggleMenu}>Editar Agenda</Link></li>
                        <li><Link to="/visualizar-agendamentos-mg" onClick={toggleMenu}>Agendamentos</Link></li>
                        <li><Link to="/visualizar-agenda-mg" onClick={toggleMenu}>Visualizar Agenda</Link></li>



                        <p>Gerente</p>
                        <li><Link to="/home-g" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/editar-agenda" onClick={toggleMenu}>Editar Agenda</Link></li>
                        <li><Link to="/editar-conta" onClick={toggleMenu}>Editar Conta</Link></li>
                        <li><Link to="/relatorio-mg" onClick={toggleMenu}>Relatorio</Link></li>
                        <li><Link to="/visualizar-agenda-mg" onClick={toggleMenu}>Visualizar Agenda</Link></li>
                        <li><Link to="/notificacoes-mg" onClick={toggleMenu}>Notificações</Link></li>
                        <li><Link to="/visualizar-agendamentos-mg" onClick={toggleMenu}>Agendamentos</Link></li>
                        <li><Link to="/editar-massagista" onClick={toggleMenu}>Editar Massagistas</Link></li>

                    </ul>
                </nav>
        </div>
    );
} export default SideBar;