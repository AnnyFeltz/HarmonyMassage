import React, { useState } from "react";

const VisualizarAgendamentos = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const scheduleData = {
    5: [
      { horario: "09:00", cliente: "Maria Silva", tipo: "Relaxante" },
      { horario: "14:00", cliente: "João Pereira", tipo: "Desportiva" }
    ],
    8: [
      { horario: "10:00", cliente: "Ana Costa", tipo: "Reflexologia" },
      { horario: "12:00", cliente: "Carlos Oliveira", tipo: "Shiatsu" }
    ],
    12: [
      { horario: "08:00", cliente: "Fernanda Souza", tipo: "Terapêutica" },
      { horario: "13:00", cliente: "Rafael Almeida", tipo: "Tântrica" }
    ],
    15: [
      { horario: "11:00", cliente: "Juliana Rodrigues", tipo: "Pedras Quentes" },
      { horario: "14:30", cliente: "Paulo Mendes", tipo: "Anti-stress" }
    ]
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="visualizar-agendamentos-container">
      <h1 className="p-titulo">Meus Agendamentos</h1><br/>
      <div className="subtitulo">Dias com consultas:</div>
      <div className="dias-consulta-container">
        {Object.keys(scheduleData).map((day) => (
          <div 
            key={day} 
            className="dia-consulta" 
            onClick={() => handleDayClick(parseInt(day))}
          >
            {`Dia ${day}`}
          </div>
        ))}
      </div>
      
      {selectedDay && (
        <div className="detalhes-agendamento">
          <h2>Detalhes do Agendamento - Dia {selectedDay}</h2>
          <table>
            <thead>
              <tr>
                <th>Horário</th>
                <th>Cliente</th>
                <th>Tipo de Massagem</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData[selectedDay].map((consulta, index) => (
                <tr key={index}>
                  <td>{consulta.horario}</td>
                  <td>{consulta.cliente}</td>
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
