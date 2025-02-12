import react from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const pageTitles = {
        "/home": "Home",
        "/home-mg": "Home",
        "/editar-agenda": "Editar Agenda",
        "/relatorio": "Relatorio",
        "/relatorio-g": "Relatorio",
        "/editar-conta": "Editar Conta",
        "/visualizar-agenda": "Visualizar Agenda",
        "/visualizar-agenda-mg": "Visualizar Agenda",
        "/visualizar-agendamentos": "Agendamentos",
        "/visualizar-agendamentos-mg": "Agendamentos",
        "/editar-massagista": "Editar Massagistas",
        "/agendar/janeiro": "Agendar",
        "/avaliar": "Avaliar",
        "/efetuar-pagamento": "Efetuar Pagamento",
        "/notificacoes": "Notificações",

    };

    return (
        <header className='header'>{pageTitles[location.pathname] || "Harmony Massage"}</header>
    );

} export default Header;