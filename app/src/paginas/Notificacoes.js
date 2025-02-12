import React from 'react';

function Notificacoes() {
  return (
    <div className='notificacoes-container'>
      <ul>
        <li><span className="notificacao-icone">🔔</span>Notificação confirmada para 15/02/2025 às 14h</li>
        <li><span className="notificacao-icone">🔔</span>Seu pagamento foi processado com sucesso</li>
        <li><span className="notificacao-icone">🔔</span>Nova avaliação recebida de um cliente</li>
        <li><span className="notificacao-icone">🔔</span>Agendamento alterado para 17/02/2025 às 10h</li>
        <li><span className="notificacao-icone">🔔</span>Seu agendamento foi confirmado para 20/02/2025 às 16h</li>
        <li><span className="notificacao-icone">🔔</span>Massagem relaxante foi agendada para 22/02/2025 às 11h</li>
        <li><span className="notificacao-icone">🔔</span>Recebemos uma nova avaliação sobre seu serviço</li>
        <li><span className="notificacao-icone">🔔</span>Alteração na agenda para 24/02/2025 às 15h30</li>
      </ul>
    </div>
  );
}

export default Notificacoes;
