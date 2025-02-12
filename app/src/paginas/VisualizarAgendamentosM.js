import React, { useState } from "react";

const VisualizarAgendamentos = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const scheduleData = {
    5: [
      { horario: "09:00", cliente: { nome: "José Santos", cpf: "123.456.789-00" }, tipo: "Relaxante" },
      { horario: "14:00", cliente: { nome: "Ana Lima", cpf: "987.654.321-00" }, tipo: "Desportiva" }
    ],
    8: [
      { horario: "10:00", cliente: { nome: "Carlos Souza", cpf: "456.123.789-00" }, tipo: "Reflexologia" },
      { horario: "12:00", cliente: { nome: "Fernanda Alves", cpf: "321.654.987-00" }, tipo: "Shiatsu" }
    ],
    12: [
      { horario: "08:00", cliente: { nome: "Juliana Costa", cpf: "159.753.246-00" }, tipo: "Terapêutica" },
      { horario: "13:00", cliente: { nome: "Ricardo Ferreira", cpf: "753.159.468-00" }, tipo: "Tântrica" }
    ],
    15: [
      { horario: "11:00", cliente: { nome: "Paulo Mendes", cpf: "741.258.963-00" }, tipo: "Pedras Quentes" },
      { horario: "14:30", cliente: { nome: "Luana Oliveira", cpf: "369.258.147-00" }, tipo: "Anti-stress" }
    ]
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      <h1>Meus Agendamentos </h1>
      <div>
        <h3>Dias com consultas:</h3>
        <ul>
          {Object.keys(scheduleData).map((day) => (
            <li key={day} onClick={() => handleDayClick(parseInt(day))}>
              {`Dia ${day}`}
            </li>
          ))}
        </ul>
      </div>
      
      {selectedDay && (
        <div>
          <h3>Detalhes do Agendamento - Dia {selectedDay}</h3>
          <table>
            <thead>
              <tr>
                <th>Horário</th>
                <th>Cliente</th>
                <th>CPF</th>
                <th>Tipo de Massagem</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData[selectedDay].map((consulta, index) => (
                <tr key={index}>
                  <td>{consulta.horario}</td>
                  <td>{consulta.cliente.nome}</td>
                  <td>{consulta.cliente.cpf}</td>
                  <td>{consulta.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default VisualizarAgendamentos;
