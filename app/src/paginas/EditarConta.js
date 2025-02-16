import React, { useState } from 'react';

function EditarConta() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Conta atualizada com sucesso!');
    };

    return (
        <div className="editar-conta-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite seu nome"  // Adicionado o placeholder
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email"  // Adicionado o placeholder
                    />
                </label>
                <label>
                    Senha:
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Digite sua senha"  // Adicionado o placeholder
                    />
                </label>
                <label>
                    Telefone:
                    <input
                        type="text"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        placeholder="Digite seu telefone"  // Adicionado o placeholder
                    />
                </label>
                <button type="submit" className="botao-enviar" >Salvar Alterações</button>
            </form>
        </div>
    );
}

export default EditarConta;
