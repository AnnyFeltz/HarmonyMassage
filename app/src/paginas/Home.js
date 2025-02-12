import React, { useState } from "react";

export default function HomePage() {
  const [welcomeVisible, setWelcomeVisible] = useState(true);

  return (
    <div className="home-container">
      {welcomeVisible && (
        <div className="banner">
          <div className={`welcome-box ${welcomeVisible ? "visible" : "hidden"}`}>
            <h1>Bem-vindo!</h1>
            <p>Descubra as informações de vendas e estoque</p>
            <button className="botao-enviar" onClick={() => setWelcomeVisible(false)}>OK</button>
          </div>
        </div>
      )}

      {!welcomeVisible && (
        <div className="consultas-marcadas">
          <h2>Consultas Marcadas</h2>
          <div className="cards-container">
            <div className="card">
              <h3>JAN-02</h3>
              <p>Consulta sobre vendas</p>
              <p>Horário: 14h00</p>
            </div>
            <div className="card">
              <h3>FEV-08</h3>
              <p>Revisão de estoque</p>
              <p>Horário: 10h30</p>
            </div>
            <div className="card">
              <h3>MAR-15</h3>
              <p>Planejamento de descontos</p>
              <p>Horário: 16h00</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
