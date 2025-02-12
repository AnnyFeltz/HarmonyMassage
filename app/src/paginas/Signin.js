import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
    const [role, setRole] = useState('cliente');
    const navigate = useNavigate();

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/home');
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Registrar</h2>

                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" required />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" required />
                </div>

                <div>
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" id="cpf" required />
                </div>

                <div>
                    <label htmlFor="role">Tipo de Usuário:</label>
                    <select id="role" value={role} onChange={handleRoleChange} className="role-select" required>
                        <option value="cliente">Cliente</option>
                        <option value="massagista">Massagista</option>
                        <option value="gerente">Gerente</option>
                    </select>
                </div>

                {role === 'massagista' && (
                    <div>
                        <label htmlFor="especialidade">Especialidade:</label>
                        <input type="text" id="especialidade" required />
                    </div>
                )}

                <button type="submit">Criar Conta</button>

                <p className="auth-switch">
                    Já tem uma conta? <Link to="/login">Entrar</Link>
                </p>
            </form>
        </div>
    );
}

export default Signin;
