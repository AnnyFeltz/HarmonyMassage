import React from 'react';

function RelatorioM() {
    return (
        <div className="relatorio-container">
            <h2>Relatório de Ganhos dos Massagistas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome do Massagista</th>
                        <th>Total Recebido (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Lucas Almeida</td><td>R$ 130,00</td></tr>
                    <tr><td>Julia Souza</td><td>R$ 160,00</td></tr>
                    <tr><td>André Costa</td><td>R$ 95,00</td></tr>
                    <tr><td>Ana Lima</td><td>R$ 190,00</td></tr>
                    <tr><td>João Pereira</td><td>R$ 140,00</td></tr>
                    <tr><td>Carla Ferreira</td><td>R$ 220,00</td></tr>
                    <tr><td>Fernando Silva</td><td>R$ 120,00</td></tr>
                    <tr><td>Beatriz Souza</td><td>R$ 170,00</td></tr>
                    <tr><td>Rafael Almeida</td><td>R$ 150,00</td></tr>
                    <tr><td>Mariana Rocha</td><td>R$ 180,00</td></tr>
                    <tr><td>Vinícius Santos</td><td>R$ 165,00</td></tr>
                    <tr><td>Patrícia Gomes</td><td>R$ 200,00</td></tr>
                    <tr><td>Eduardo Oliveira</td><td>R$ 135,00</td></tr>
                    <tr><td>Camila Almeida</td><td>R$ 105,00</td></tr>
                    <tr><td>Rogério Costa</td><td>R$ 150,00</td></tr>
                    <tr><td>Laura Ramos</td><td>R$ 180,00</td></tr>
                </tbody>  
            </table>
            <br/>

            <button className="botao-enviar">Enviar</button>
        </div>
    );
}

export default RelatorioM;
