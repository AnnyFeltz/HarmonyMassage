import react from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const pageTitles = {
        "/home": "Home",
        "/editar-agenda": "Editar Agenda",
        "/relatorio": "Relatorio",
        "/editar-conta": "Editar Conta",
        "/visualizar-agenda": "Visualizar Agenda",
        "/visualizar-agendamentos": "Agendamentos",
        "/editar-massagista": "Editar Massagistas",
        "/agendar/janeiro": "Agendar",
        "/avalair": "Avaliar",
        "/efetuar-pagamento": "Efeutar Pagamento",
        "/notificacoes": "Notificações",
        "/": "",

    };

    return (
        <header className='header'>{pageTitles[location.pathname] || "Erro"}</header>
    );

} export default Header;