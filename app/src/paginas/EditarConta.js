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
        <div>
            <h2>Editar Conta</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Senha:
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </label>
                <br />
                <label>
                    Telefone:
                    <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </label>
                <br />
                <button type="submit">Salvar Alterações</button>
            </form>
        </div>
    );
}

export default EditarConta;
