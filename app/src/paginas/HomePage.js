import React, { useState } from "react";

function HomePage() {
  const [welcomeVisible, setWelcomeVisible] = useState(true);


  return (
    <div className="home-container">
      {welcomeVisible && (
        <div className="banner">
          <div className={`welcome-box ${welcomeVisible ? "visible" : "hidden"}`}>
            <div className="p-titulo">
              <h1>Bem-vindo ao Harmony Massagem!</h1>
              <p>Confira seus agendamentos de massagem.</p>
            </div>
            <button className="botao-enviar" onClick={() => setWelcomeVisible(false)}>OK</button>
          </div>
        </div>
      )}

      {!welcomeVisible && (
        <div className="consultas-marcadas">
          <h2>Agendamentos</h2>
          <div className="cards-container">
            <div className="card">
              <h3>12 de Fevereiro</h3>
              <p>Profissional: Ana Silva </p>
              <p>Massagem Relaxante</p>
              <p>Horário: 14h00</p>
            </div>
            <div className="card">
              <h3>15 de Fevereiro</h3>
              <p>Profissional: Carlos Mendes</p>
              <p>Massagem Terapêutica</p>
              <p>Horário: 10h30</p>
            </div>
            <div className="card">
              <h3>20 de Fevereiro</h3>
              <p>Profissional: Juliana Costa</p>
              <p>Massagem com Pedras Quentes</p>
              <p>Horário: 16h00</p>
            </div>
            <div className="card-extended">
              <h3>25 de Fevereiro</h3>
              <p>Profissional: Roberto Lima</p>
              <p>Massagem Shiatsu</p>
              <p>Horário: 09h00</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default HomePage;
