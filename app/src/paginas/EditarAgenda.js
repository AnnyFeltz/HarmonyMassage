import React, { useState } from 'react';

function EditarAgenda() {
  const [availableDays, setAvailableDays] = useState([5, 8, 12, 15, 20, 22, 25, 30]); // Dias disponíveis
  const [availableHours, setAvailableHours] = useState({
    5: ["09:00", "10:30", "15:00"],
    8: ["08:00", "11:00", "14:00"],
    12: ["09:30", "13:00", "16:30"],
    15: ["10:00", "14:30", "17:00"],
    20: ["08:30", "12:00", "15:30"],
    22: ["09:00", "13:30", "16:00"],
    25: ["07:30", "10:00", "18:00"],
    30: ["08:00", "12:30", "17:30"],
  });

  const [isEditingDays, setIsEditingDays] = useState(false); // Para alternar entre edição de dias e não
  const [isEditingHours, setIsEditingHours] = useState(false); // Para alternar entre edição de horários
  const [selectedDay, setSelectedDay] = useState(null);

  // Função para alternar entre editar e não editar dias
  const toggleDayAvailability = (day) => {
    if (isEditingDays) {
      setAvailableDays((prevDays) =>
        prevDays.includes(day)
          ? prevDays.filter((d) => d !== day) // Remover se já estiver
          : [...prevDays, day] // Adicionar se não estiver
      );
    }
  };

  // Função para alternar entre editar e não editar horários
  const toggleHourAvailability = (hour) => {
    if (selectedDay && isEditingHours) {
      setAvailableHours((prevHours) => {
        const updatedHours = { ...prevHours };
        if (updatedHours[selectedDay].includes(hour)) {
          updatedHours[selectedDay] = updatedHours[selectedDay].filter((h) => h !== hour); // Remover hora
        } else {
          updatedHours[selectedDay].push(hour); // Adicionar hora
        }
        return updatedHours;
      });
    }
  };

  const generateCalendar = () => {
    const startDate = new Date(2025, 0, 1); // Janeiro de 2025
    const startDay = startDate.getDay();
    const daysInMonth = 31;
    let days = [];
    let dayCounter = 1;

    // Gerar os dias do calendário
    for (let i = 0; i < startDay; i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    for (let i = startDay; i < startDay + daysInMonth; i++) {
      days.push(
        <div
          className={`calendar-day ${availableDays.includes(dayCounter) ? "available" : ""}`}
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
    <div className="editar-container">
      <h2>Editar Agenda de Janeiro de 2025</h2>

      <div className="calendar">
        <div className="calendar-header">
          <button onClick={() => setIsEditingDays(!isEditingDays)}>
            {isEditingDays ? "Fechar Edição de Dias" : "Editar Dias Disponíveis"}
          </button>
          <button onClick={() => setIsEditingHours(!isEditingHours)}>
            {isEditingHours ? "Fechar Edição de Horários" : "Editar Horários"}
          </button>
        </div>

        <div className="calendar-grid">
          {generateCalendar()}
        </div>
      </div>

      {isEditingHours && selectedDay && (
        <div className="hour-edit">
          <h3>Editar Horários para o Dia {selectedDay}</h3>
          {["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map((hour) => (
            <label key={hour} className="hour-checkbox">
              <input
                type="checkbox"
                checked={availableHours[selectedDay]?.includes(hour)}
                onChange={() => toggleHourAvailability(hour)}
              />
              {hour}
            </label>
          ))}
        </div>
      )}

      {selectedDay && !isEditingHours && (
        <div className="selected-day-info">
          <h3>Horários Disponíveis para o Dia {selectedDay}</h3>
          <ul className="available-hours-list">
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
