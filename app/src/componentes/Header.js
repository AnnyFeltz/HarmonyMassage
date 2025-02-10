import react from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const pageTitles = {
    "/": "Home",
        "/Agenda": "Agenda",
            "/Relatorio": "Relatorio",
    };

return (
    <header className='header'>{pageTitles[location.pathname] || "APP"}</header>
);
} export default Header;