import React, { useState } from 'react';

function EditarMassagista() {
    const [formData, setFormData] = useState({
        nome: '',
        especializacao: '',
        telefone: '',
        disponibilidade: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados enviados: ', formData);
        alert('Dados do massagista atualizados com sucesso!');
    };

    return (
        <div className="editar-massagista-container">
            <h2>Editar Dados do Massagista</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Digite o nome completo"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="especializacao">Especialização</label>
                    <input
                        type="text"
                        id="especializacao"
                        name="especializacao"
                        value={formData.especializacao}
                        onChange={handleChange}
                        placeholder="Digite a especialização"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="Digite o telefone"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="disponibilidade">Disponibilidade</label>
                    <textarea
                        id="disponibilidade"
                        name="disponibilidade"
                        value={formData.disponibilidade}
                        onChange={handleChange}
                        placeholder="Escreva sua disponibilidade"
                    />
                </div>

                <button type="submit" className="btn-submit">Salvar Alterações</button>
            </form>
        </div>
    );
}

export default EditarMassagista;
