import React from 'react';


function Relatorio() {
    return (
        <div className="relatorio-container">
            <h2>Relatório de Agendamentos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome do Cliente</th>
                        <th>Serviço</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th>Horário</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>João Silva</td><td>Massagem Relaxante</td><td>R$ 120,00</td><td>10/02/2025</td><td>14:00</td></tr>
                    <tr><td>Ana Souza</td><td>Massagem Terapêutica</td><td>R$ 150,00</td><td>11/02/2025</td><td>09:30</td></tr>
                    <tr><td>Pedro Santos</td><td>Reflexologia</td><td>R$ 90,00</td><td>12/02/2025</td><td>16:00</td></tr>
                    <tr><td>Mariana Costa</td><td>Massagem com Pedras Quentes</td><td>R$ 180,00</td><td>13/02/2025</td><td>11:00</td></tr>
                    <tr><td>Felipe Martins</td><td>Massagem Desportiva</td><td>R$ 130,00</td><td>14/02/2025</td><td>17:30</td></tr>
                    <tr><td>Camila Ferreira</td><td>Massagem Ayurvédica</td><td>R$ 200,00</td><td>15/02/2025</td><td>08:00</td></tr>
                    <tr><td>Lucas Oliveira</td><td>Massagem Relaxante</td><td>R$ 110,00</td><td>16/02/2025</td><td>10:00</td></tr>
                    <tr><td>Juliana Mendes</td><td>Shiatsu</td><td>R$ 160,00</td><td>17/02/2025</td><td>13:00</td></tr>
                    <tr><td>Bruno Rocha</td><td>Massagem Modeladora</td><td>R$ 140,00</td><td>18/02/2025</td><td>15:30</td></tr>
                    <tr><td>Fernanda Lima</td><td>Drenagem Linfática</td><td>R$ 170,00</td><td>19/02/2025</td><td>12:00</td></tr>
                    <tr><td>Rafael Duarte</td><td>Massagem Sueca</td><td>R$ 155,00</td><td>20/02/2025</td><td>18:30</td></tr>
                    <tr><td>Natália Barbosa</td><td>Massagem Tailandesa</td><td>R$ 190,00</td><td>21/02/2025</td><td>09:00</td></tr>
                    <tr><td>Eduardo Nunes</td><td>Massagem Relaxante</td><td>R$ 125,00</td><td>22/02/2025</td><td>11:30</td></tr>
                    <tr><td>Patrícia Gomes</td><td>Massagem Reflexologia</td><td>R$ 100,00</td><td>23/02/2025</td><td>14:45</td></tr>
                    <tr><td>Rodrigo Alves</td><td>Massagem Terapêutica</td><td>R$ 145,00</td><td>24/02/2025</td><td>16:15</td></tr>
                    <tr><td>Beatriz Ramos</td><td>Massagem com Aromaterapia</td><td>R$ 175,00</td><td>25/02/2025</td><td>10:30</td></tr>
                  
                </tbody>  
            </table><button className="botao-enviar">Enviar</button>
        </div>
    );
}

export default Relatorio;
