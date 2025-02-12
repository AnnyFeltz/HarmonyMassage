import React, { useState } from "react";

function AgendarConsulta() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [massage, setMassage] = useState("");

  // Dados simulados para horários, profissionais e massagem
  const scheduleData = {
    5: {
      horarios: ["09:00", "14:00", "16:00"],
      profissionais: [
        { name: "Maria Silva", massage: "Relaxante" },
        { name: "João Pereira", massage: "Desportiva" }
      ],
    },
    8: {
      horarios: ["10:00", "12:00", "15:00"],
      profissionais: [
        { name: "Ana Costa", massage: "Reflexologia" },
        { name: "Carlos Oliveira", massage: "Shiatsu" }
      ],
    },
    12: {
      horarios: ["08:00", "13:00", "18:00"],
      profissionais: [
        { name: "Fernanda Souza", massage: "Terapêutica" },
        { name: "Rafael Almeida", massage: "Tântrica" }
      ],
    },
    15: {
      horarios: ["11:00", "14:30", "17:00"],
      profissionais: [
        { name: "Juliana Rodrigues", massage: "Pedras Quentes" },
        { name: "Paulo Mendes", massage: "Anti-stress" }
      ],
    },
  };

  const generateCalendar = () => {
    const startDate = new Date(2025, 0, 1); // Janeiro de 2025
    const startDay = startDate.getDay();
    const daysInMonth = 31;

    let days = [];
    let dayCounter = 1;

    for (let i = 0; i < startDay; i++) {
      days.push(<div className="agendar-day empty" key={`empty-${i}`} />);
    }

    for (let i = startDay; i < startDay + daysInMonth; i++) {
      days.push(
        <div
          className={`agendar-day ${Object.keys(scheduleData).includes(dayCounter.toString()) ? "available" : ""}`}
          key={`day-${dayCounter}`}
          onClick={() => handleDayClick(dayCounter)}
        >
          {dayCounter}
        </div>
      );
      dayCounter++;
    }

    return days;
  };

  // Função chamada ao clicar em um dia
  const handleDayClick = (day) => {
    setSelectedDay(day);
    // Atualiza as informações do dia selecionado
    if (scheduleData[day]) {
      setSelectedProfessional(null); // Limpa a seleção anterior
      setSelectedTime(null); // Limpa o horário selecionado
    } else {
      setSelectedProfessional(null);
      setSelectedTime(null);
    }
  };

  // Função chamada para selecionar o profissional
  const handleProfessionalSelect = (professional) => {
    setSelectedProfessional(professional.name);
    setMassage(professional.massage);
  };

  // Função chamada para selecionar o horário
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="agendar-container">
      <h2>Janeiro de 2025</h2>
      <div className="agendar-calendar">
        <div className="agendar-grid">
          <div className="agendar-day-name">Dom</div>
          <div className="agendar-day-name">Seg</div>
          <div className="agendar-day-name">Ter</div>
          <div className="agendar-day-name">Qua</div>
          <div className="agendar-day-name">Qui</div>
          <div className="agendar-day-name">Sex</div>
          <div className="agendar-day-name">Sáb</div>
          {generateCalendar()}
        </div>
      </div>

      <p>Dias disponíveis para agendamento:</p>
      <ul className="agendar-days-list">
        {Object.keys(scheduleData).map((day) => (
          <li key={day} onClick={() => handleDayClick(parseInt(day))}>
            {`Dia ${day}`}
          </li>
        ))}
      </ul>

      {/* Exibe os dados do dia selecionado */}
      {selectedDay && (
        <div className="selected-day-info">
          <h3>Detalhes do Agendamento</h3>
          <p>Você selecionou o dia: {selectedDay < 10 ? `0${selectedDay}` : selectedDay}</p>

          {/* Se houver profissionais para o dia selecionado, exibe a lista de seleção */}
          {scheduleData[selectedDay]?.profissionais && (
            <div>
              <h4>Selecione o Profissional:</h4>
              <ul>
                {scheduleData[selectedDay].profissionais.map((professional, index) => (
                  <li className="bloquinho"
                    key={index}
                    onClick={() => handleProfessionalSelect(professional)}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        selectedProfessional === professional.name ? "#d3d3d3" : "",
                    }}
                  >
                    {professional.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Exibe os horários se um profissional for selecionado */}
          {selectedProfessional && (
            <div>
              <h4>Selecione o Horário:</h4>
              <ul>
                {scheduleData[selectedDay].horarios.map((hora, index) => (
                  <li className="bloquinho"
                    key={index}
                    onClick={() => handleTimeSelect(hora)}
                    style={{
                      cursor: "pointer",
                      backgroundColor: selectedTime === hora ? "#d3d3d3" : "",
                    }}
                  >
                    {hora}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedTime && selectedProfessional && (
            <div>
              <div className="bloquinho2" >
                <p><strong>Profissional:</strong> {selectedProfessional}</p>
                <p><strong>Massagem:</strong> {massage}</p>
                <p><strong>Horário:</strong> {selectedTime}</p>

              </div>
              <button className="agendar-button">Confirmar Agendamento</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AgendarConsulta;
