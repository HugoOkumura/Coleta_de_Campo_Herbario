import React from 'react';
import './ExpedicaoCard.css';

export default function ExpedicaoCard({
  // titulo,
  // descricao,
  data,
  municipio,
  status,
  onDetalhes,
  onRegistrar
}) {
  const isAberto = status === 'Aberto';

  return (
    <div className="exp-card">
      <div className="exp-header">
        <div>
          <h2>{municipio}</h2>
          {/* <p>{descricao}</p> */}
        </div>
        <span className={`badge ${isAberto ? 'aberto' : 'fechado'}`}>{status}</span>
      </div>

      <div className="exp-info">
        <div>
          <label>Data</label>
          <p>{data}</p>
        </div>
        {/* <div>
          <label>Local</label>
          <p>{municipio}</p>
        </div> */}
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
