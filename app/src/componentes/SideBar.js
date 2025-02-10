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
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/Agenda" onClick={toggleMenu}>Agenda</Link></li>
                        <li><Link to="/Relatorio" onClick={toggleMenu}>Relatorio</Link></li>
                    </ul>
                </nav>
        </div>
    );
} export default SideBar;