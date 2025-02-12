import React from 'react';

function Notificacoes() {
  return (
    <div className='notificacoes-container'>
      <ul>
        <li><span className="notificacao-icone">🔔</span>Notificação confirmada para 15/02/2025 às 14h</li>
        <li><span className="notificacao-icone">🔔</span>Seu Relatorio foi processado com sucesso</li>
        <li><span className="notificacao-icone">🔔</span>Nova avaliação recebida de um cliente</li>
        <li><span className="notificacao-icone">🔔</span>Agendamento alterado para 17/02/2025 às 10h</li>
        <li><span className="notificacao-icone">🔔</span>Agendamento alterado para 17/02/2025 às 10h</li>
      </ul>
    </div>
  );
}

export default Notificacoes;
