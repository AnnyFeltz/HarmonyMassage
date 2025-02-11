import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';

function VisualizarAgenda() {
    const [selectedDay, setSelectedDay] = useState(null);

    const generateCalendar = (monthOffset) => {
        const startDate = new Date(2025, 0);
        startDate.setMonth(startDate.getMonth() + monthOffset);
        const startDay = new Date(startDate.getFullYear(), startDate.getMonth(), 1).getDay();
        const daysInMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();

        let days = [];
        let dayCounter = 1;

        for (let i = 0; i < startDay; i++) {
            days.push(<div className="calendar-day empty" key={`empty-${i}`} />);
        }

        for (let i = startDay; i < startDay + daysInMonth; i++) {
            days.push(
                <div
                    className="calendar-day"
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

    const getMonthName = (monthIndex) => {
        const monthNames = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        return monthNames[monthIndex];
    };

    const generateMonthData = () => {
        const months = [];
        const startDate = new Date(2025, 0);

        for (let i = 0; i < 12; i++) {
            const nextMonth = new Date(startDate.getFullYear(), startDate.getMonth() + i);
            const monthIndex = nextMonth.getMonth();
            const year = nextMonth.getFullYear();

            months.push({
                index: monthIndex,
                year: year,
                name: getMonthName(monthIndex),
                offset: i
            });
        }
        return months;
    };

    return (
        <div className="calendar-container">
            {generateMonthData().map((monthData) => (
                <div className="calendar" key={monthData.index}>
                    <h3>{`${monthData.name} de ${monthData.year}`}</h3>
                    <div className="calendar-grid">
                        <div className="calendar-day-name">Dom</div>
                        <div className="calendar-day-name">Seg</div>
                        <div className="calendar-day-name">Ter</div>
                        <div className="calendar-day-name">Qua</div>
                        <div className="calendar-day-name">Qui</div>
                        <div className="calendar-day-name">Sex</div>
                        <div className="calendar-day-name">Sáb</div>
                        {generateCalendar(monthData.offset)}
                    </div>

                    {monthData.index === 0 && (
                        <Link
                            to="/agendar/janeiro"
                            style={{ 
                                position: "absolute", 
                                opacity: 0, 
                                pointerEvents: "auto", // Permite clicar no link invisível
                                width: "100%", 
                                height: "100%" 
                            }}
                        >
                            Ver Dias Disponiveis
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
}

export default VisualizarAgenda;
