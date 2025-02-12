import React, { useState } from "react";

function EditarAgenda() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [isEditingDays, setIsEditingDays] = useState(false);
  const [isEditingHours, setIsEditingHours] = useState(false);
  
  const availableDays = [5, 8, 12, 15, 20, 22, 25, 30]; 
  const availableHours = {
    5: ["09:00", "10:30", "15:00"],
    8: ["08:00", "11:00", "14:00"],
    12: ["09:30", "13:00", "16:30"],
    15: ["10:00", "14:30", "17:00"],
    20: ["08:30", "12:00", "15:30"],
    22: ["09:00", "13:30", "16:00"],
    25: ["07:30", "10:00", "18:00"],
    30: ["08:00", "12:30", "17:30"],
  };

  const toggleDayAvailability = (day) => {
    if (availableDays.includes(day)) {
      const newDays = availableDays.filter(d => d !== day);
      availableDays.length = 0;
      availableDays.push(...newDays); 
    } else {
      availableDays.push(day);
    }
  };

  const handleDayClick = (day) => {
    if (availableDays.includes(day)) {
      setSelectedDay(day);
      setSelectedHour(null);
    }
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
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
          onClick={() => handleDayClick(dayCounter)}
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

      <button onClick={() => setIsEditingDays(!isEditingDays)}>
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

      <div className="agendar-selected-day-info">
        {selectedDay && <p>Você selecionou o dia: {selectedDay}</p>}

        {selectedDay && (
          <div>
            <button onClick={() => setIsEditingHours(!isEditingHours)}>
              {isEditingHours ? "Cancelar Edição de Horários" : "Editar Horários Disponíveis"}
            </button>
            {isEditingHours && (
              <div className="agendar-hour-edit">
                <h3>Editar Horários para o Dia {selectedDay}</h3>
                {["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map((hour) => (
                  <label key={hour} className="agendar-hour-checkbox">
                    <input
                      type="checkbox"
                      checked={availableHours[selectedDay]?.includes(hour)} 
                      onChange={() => handleHourClick(hour)}
                    />
                    {hour}
                  </label>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {selectedDay && !isEditingHours && (
        <div className="agendar-available-hours">
          <h3>Horários Disponíveis para o Dia {selectedDay}:</h3>
          <ul>
            {availableHours[selectedDay]?.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EditarAgenda;
