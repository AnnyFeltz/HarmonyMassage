import React, { useState } from 'react';

function Avaliar() {
    const [rating, setRating] = useState(0);  // Estado para armazenar a avaliação selecionada

    const handleStarClick = (index) => {
        setRating(index + 1);  // Atualiza o estado com o número da estrela clicada
    };

    return (
        <div className="avaliar-container">
            <h2 className="p-titulo">Avaliar a Consulta</h2>

            {/* Estrelas no topo */}
            <div className="form-group">
                <div className="estrelas">
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={`estrela ${index < rating ? 'selected' : ''}`}  // Aplica 'selected' se a estrela for escolhida
                            onClick={() => handleStarClick(index)}  // Função de clique
                        >
                            ★
                        </span>
                    ))}
                </div>
            </div>

            {/* Campos para Profissional e Tipo de Massagem */}
            <div className="form-group">
                <label className="p-titulo">Profissional:</label>
                <input
                    type="text"
                    placeholder="Nome do profissional"
                    className="input-field"
                />
            </div>

            <div className="form-group">
                <label className="p-titulo">Tipo de Massagem:</label>
                <input
                    type="text"
                    placeholder="Ex: Massagem Relaxante"
                    className="input-field"
                />
            </div>

            {/* Campo para Opinião */}
            <div className="form-group">
                <label className="p-titulo">Opinião:</label>
                <textarea
                    placeholder="Deixe sua opinião sobre a consulta"
                    className="input-field"
                />
            </div>

            {/* Botão de Envio */}
            <button className="botao-avaliacao">Enviar Avaliação</button>
        </div>
    );
}

export default Avaliar;
