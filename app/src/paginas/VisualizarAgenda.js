import React, { useState } from "react";


function VisualizarAgenda() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  // Função para mudar de mês
  const changeMonth = (direction) => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + direction)));
  };

  // Função para gerar o calendário
  const generateCalendar = () => {
    const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    let days = [];
    let dayCounter = 1;

    // Preenche as células vazias antes do primeiro dia do mês
    for (let i = 0; i < startDay; i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    // Preenche os dias do mês
    for (let i = startDay; i < startDay + daysInMonth; i++) {
      days.push(
        <div
          className="calendar-day"
          key={`day-${dayCounter}`}
          onClick={() => setSelectedDay(dayCounter)} // Marca o dia selecionado
        >
          {dayCounter}
        </div>
      );
      dayCounter++;
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="nav-button" onClick={() => changeMonth(-1)}>{"<"}</button>
        <h2>{currentDate.toLocaleString("pt-BR", { month: "long", year: "numeric" })}</h2>
        <button className="nav-button" onClick={() => changeMonth(1)}>{">"}</button>
      </div>
      <div className="calendar-grid">
        <div className="calendar-day-name">Dom</div>
        <div className="calendar-day-name">Seg</div>
        <div className="calendar-day-name">Ter</div>
        <div className="calendar-day-name">Qua</div>
        <div className="calendar-day-name">Qui</div>
        <div className="calendar-day-name">Sex</div>
        <div className="calendar-day-name">Sáb</div>
        {generateCalendar()}
      </div>
      {selectedDay && (
        <div className="selected-day-info">
          <p>Você selecionou: {selectedDay}</p>
        </div>
      )}
    </div>
  );
}

export default VisualizarAgenda;
