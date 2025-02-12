import React, { useState } from "react";

function EditarAgenda() {
  const [isEditingDays, setIsEditingDays] = useState(false);
  const [isEditingHours, setIsEditingHours] = useState(false);
  const [isViewingAllHours, setIsViewingAllHours] = useState(false);

  const [availableDays, setAvailableDays] = useState([5, 8, 12, 15, 20, 22, 25, 30]);

  const [availableHours, setAvailableHours] = useState({
    "09:00": false,
    "10:30": false,
    "15:00": false,
    "08:00": false,
    "11:00": false,
    "14:00": false,
    "09:30": false,
    "13:00": false,
    "16:30": false,
    "10:00": false,
    "14:30": false,
    "17:00": false,
    "08:30": false,
    "12:00": false,
    "15:30": false,
    "07:30": false,
    "18:00": false,
    "12:30": false,
    "17:30": false,
  });

  const toggleDayAvailability = (day) => {
    setAvailableDays((prevDays) =>
      prevDays.includes(day) ? prevDays.filter(d => d !== day) : [...prevDays, day]
    );
  };

  const handleShowAllHours = () => {
    setIsViewingAllHours(!isViewingAllHours);
  };

  const handleHourClick = (hour) => {
    setAvailableHours((prevHours) => {
      const updatedHours = { ...prevHours };
      updatedHours[hour] = !updatedHours[hour];
      return updatedHours;
    });
  };

  const generateCalendar = () => {
    const startDate = new Date(2025, 0, 1);
    const startDay = startDate.getDay();
    const daysInMonth = 31;

    let days = [];
    let dayCounter = 1;

    for (let i = 0; i < startDay; i++) {
      days.push(<div className="agendar-day empty" key={`empty-${i}`} />);
    }

    for (let i = startDay; i < startDay + daysInMonth && dayCounter <= daysInMonth; i++) {
      days.push(
        <div
          className={`agendar-day ${availableDays.includes(dayCounter) ? "available" : ""}`}
          key={`day-${dayCounter}`}
        >
          {dayCounter}
        </div>
      );
      dayCounter++;
    }

    return days;
  };

  const renderAvailableHoursForMonth = () => {
    return (
      <div>
        <h3>Horários Disponíveis para o Mês:</h3>
        {Object.keys(availableHours).map((hour) => (
          <label key={hour} className="agendar-hour-checkbox">
            <input
              type="checkbox"
              checked={availableHours[hour]}
              onChange={() => handleHourClick(hour)}
            />
            {hour}
          </label>
        ))}
      </div>
    );
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

      <div className="botoes">
        <button className="bloco" onClick={() => setIsEditingDays(!isEditingDays)}>
          {isEditingDays ? "Cancelar Edição de Dias" : "Editar Dias Disponíveis"}
        </button>
        {isEditingDays && (
          <div className="agendar-day-edit">
            {Array.from({ length: 31 }, (_, index) => {
              const day = index + 1;
              return (
                <label key={day} className="day-checkbox">
                  <input
                    type="checkbox"
                    checked={availableDays.includes(day)}
                    onChange={() => toggleDayAvailability(day)}
                  />
                  Dia {day}
                </label>
              );
            })}
          </div>
        )}

        <button className="bloco" onClick={handleShowAllHours}>
          {isViewingAllHours ? "Ocultar Horários Disponíveis" : "Ver Horários Disponíveis para o Mês"}
        </button>

        {isViewingAllHours && renderAvailableHoursForMonth()}
      </div>
    </div>
  );
}

export default EditarAgenda;
