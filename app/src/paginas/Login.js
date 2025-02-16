import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/home');
    };

    return (
        <div className='login-container'>
            <div className='imagem'>
                <img src='logo.png'></img>
            </div>
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

                    <p className="auth-switch">
                        Não tem uma conta? <Link to="/">Registrar</Link>
                    </p>
                </form>
            </div>



        </div>
    );
}

export default Login;
