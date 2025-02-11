import React, { useState } from "react";


function AgendarConsulta() {
  const [selectedDay, setSelectedDay] = useState(null);
  const availableDays = [5, 8, 12, 15, 20, 22, 25, 30]; // Dias disponíveis

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
          className={`agendar-day ${availableDays.includes(dayCounter) ? "available" : ""}`}
          key={`day-${dayCounter}`}
          onClick={() => setSelectedDay(dayCounter)}
        >
          {dayCounter}
        </div>
      );
      dayCounter++;
    }

    return days;
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
        {availableDays.map((day) => (
          <li key={day} onClick={() => setSelectedDay(day)}>
            {`Dia ${day}`}
          </li>
        ))}
      </ul>

      {selectedDay && (
        <div className="selected-day-info">
          <p>Você selecionou o dia: {selectedDay}</p>
          <button className="agendar-button">Confirmar Agendamento</button>
        </div>
      )}
    </div>
  );
}

export default AgendarConsulta;
