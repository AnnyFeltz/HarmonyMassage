import React, { useState } from "react";

function AgendarConsulta() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [clientName, setClientName] = useState("");
  const [clientCpf, setClientCpf] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [massage, setMassage] = useState("");

  // Dados simulados para horários e massagem
  const scheduleData = {
    5: {
      horarios: ["09:00", "14:00", "16:00"],
      massage: "Relaxante",
    },
    8: {
      horarios: ["10:00", "12:00", "15:00"],
      massage: "Reflexologia",
    },
    12: {
      horarios: ["08:00", "13:00", "18:00"],
      massage: "Terapêutica",
    },
    15: {
      horarios: ["11:00", "14:30", "17:00"],
      massage: "Pedras Quentes",
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
      setSelectedTime(null); // Limpa o horário selecionado
    } else {
      setSelectedTime(null);
    }
  };

  // Função chamada para selecionar o horário
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="branco">
      <div className="agendar-container">
        <h2 className="p-titulo">Janeiro de 2025</h2>
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

        <p className="p-titulo">Dias disponíveis para agendamento:</p>
        <ul className="agendar-days-list">
          {Object.keys(scheduleData).map((day) => (
            <li key={day} onClick={() => handleDayClick(parseInt(day))}>
              {`Dia ${day}`}
            </li>
          ))}
        </ul>

        {/* Exibe os dados do dia selecionado */}
        {selectedDay && (
          <div className=".agendar-selected-day-info">
            <h2 className="p-titulo">Detalhes do Agendamento</h2>
            <p className="bloquinho"><span>Você selecionou o dia: {selectedDay < 10 ? `0${selectedDay}` : selectedDay}</span></p>

            {/* Formulário para digitar o nome e CPF do cliente */}
            <div>
              <h4 className="p-titulo">Dados do Cliente:</h4>
              <input className="blocotexto"
                type="text"
                placeholder="Nome do Cliente"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              <input className="blocotexto"
                type="text"
                placeholder="CPF do Cliente"
                value={clientCpf}
                onChange={(e) => setClientCpf(e.target.value)}
              />
            </div>

            {/* Exibe os horários se um cliente for inserido */}
            {clientName && clientCpf && (
              <div>
                <br />
                <h4 className="p-titulo">Selecione o Horário:</h4>
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
            <br />
            {selectedTime && clientName && clientCpf && (
              <div>
                <div className="bloquinho2"  >
                  <p><strong>Cliente:</strong> <span>{clientName}</span></p>
                  <p><strong>CPF:</strong><span>{clientCpf}</span> </p>
                  <p><strong>Massagem:</strong><span>{scheduleData[selectedDay]?.massage}</span> </p>
                  <p><strong>Horário:</strong> <span>{selectedTime}</span></p>
                </div>
                <button className="agendar-button">Confirmar Agendamento</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AgendarConsulta;
