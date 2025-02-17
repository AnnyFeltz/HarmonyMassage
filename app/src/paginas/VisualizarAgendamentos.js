import React, { useState } from "react";

const VisualizarAgendamentos = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const scheduleData = {
    5: [
      { horario: "09:00", profissional: "Maria Silva", tipo: "Relaxante" },
      { horario: "14:00", profissional: "João Pereira", tipo: "Desportiva" }
    ],
    8: [
      { horario: "10:00", profissional: "Ana Costa", tipo: "Reflexologia" },
      { horario: "12:00", profissional: "Carlos Oliveira", tipo: "Shiatsu" }
    ],
    12: [
      { horario: "08:00", profissional: "Fernanda Souza", tipo: "Terapêutica" },
      { horario: "13:00", profissional: "Rafael Almeida", tipo: "Tântrica" }
    ],
    15: [
      { horario: "11:00", profissional: "Juliana Rodrigues", tipo: "Pedras Quentes" },
      { horario: "14:30", profissional: "Paulo Mendes", tipo: "Anti-stress" }
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
                <th>Profissional</th>
                <th>Tipo de Massagem</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData[selectedDay].map((consulta, index) => (
                <tr key={index}>
                  <td>{consulta.horario}</td>
                  <td>{consulta.profissional}</td>
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
