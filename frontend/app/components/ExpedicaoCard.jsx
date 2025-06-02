import React from 'react';
import './ExpedicaoCard.css';

export default function ExpedicaoCard({
  data,
  municipio,
  status,
  titulo,
  onDetalhes,
  onRegistrar
}) {
  const isAberto = status === 'Aberto';

  return (
    <div className="exp-card">
      <div className="exp-header">
        <div>
          <h2>{titulo}</h2>
          <p>{municipio}</p>
        </div>
        <span className={`badge ${isAberto ? 'aberto' : 'fechado'}`}>{status}</span>
      </div>

      <div className="exp-info">
        <div>
          <label>Data</label>
          <p>{data}</p>
        </div>
      </div>

      <div className="exp-actions">
        <button className="btn btn-detalhes" onClick={onDetalhes}>Detalhes</button>
        {isAberto && (
          <button className="btn btn-verde" onClick={onRegistrar}>
            Registrar Amostra
          </button>
        )}
      </div>
    </div>
  );
}
