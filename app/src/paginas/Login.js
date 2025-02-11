import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/home');
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Login</h2>
                <div>
                    <label htmlFor="login-email">Email:</label>
                    <input type="email" id="login-email" required />
                </div>
                <div>
                    <label htmlFor="login-password">Senha:</label>
                    <input type="password" id="login-password" required />
                </div>
                <button type="submit">Entrar</button>
            </form>

            <p>Não tem uma conta? <Link to="/">Registrar</Link></p>
        </div>
    );
}

export default Login;
