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
        "/efetuar-pagamento": "Efetuar Pagamento",
    };

    return (
        <header className='header'>{pageTitles[location.pathname] || "Erro"}</header>
    );

} export default Header;