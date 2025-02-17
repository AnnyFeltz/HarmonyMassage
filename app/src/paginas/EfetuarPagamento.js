import React, { useState } from 'react';

function EfetuarPagamento() {
    const [pagamentoEfetuado, setPagamentoEfetuado] = useState(false);

    function handleSubmit(event) {
        event.preventDefault(); 
        setPagamentoEfetuado(true);
    }

    return (
        <div className="efetuar-pagamento-container">
            {pagamentoEfetuado ? (
                <div>
                    <h2 className='p-titulo'>Pagamento efetuado com sucesso!</h2> 
                    <a href="/avaliar">
                        <button className="botao-avaliacao">
                            Avaliar Consulta
                        </button>
                    </a>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="valor">Valor:</label>
                        <input
                            type="text"
                            id="valor"
                            placeholder="Digite o valor"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formaPagamento">Forma de Pagamento:</label>
                        <select id="formaPagamento">
                            <option value="cartao">Cartão de Crédito</option>
                            <option value="boleto">Boleto Bancário</option>
                            <option value="debito">Débito</option>
                            <option value="pix">Pix</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="numeroCartao">Número do Cartão:</label>
                        <input
                            type="text"
                            id="numeroCartao"
                            placeholder="Digite o número do cartão"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="vencimentoCartao">Vencimento:</label>
                        <input
                            type="text"
                            id="vencimentoCartao"
                            placeholder="MM/AA"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV:</label>
                        <input
                            type="text"
                            id="cvv"
                            placeholder="Código de segurança"
                        />
                    </div>

                    <button type="submit" className="botao-enviar">Pagar</button>
                </form>
            )}
        </div>
    );
}

export default EfetuarPagamento;
