import React from 'react';
import './ExpedicaoCard.css';

export default function ExpedicaoCard({
  expedicao,
  onDetalhes,
  onRegistrar
}) {
  const isAberto = expedicao.in_aberto === true;

  
  return (
    <div className="exp-card">
      <div className="exp-header">
        <div>
          <h2>{expedicao.ds_titulo}</h2>
          <p>{expedicao.municipio?.nm_municipio}</p>
        </div>
        <span className={`badge ${isAberto ? 'aberto' : 'fechado'}`}>{expedicao.in_aberto ? 'Aberto': 'Fechado'}</span>
      </div>

      <div className="exp-info">
        <div>
          <label>Data</label>
          <p>{new Date(expedicao.dt_expedicao).toLocaleDateString('pt-BR')}</p>
        </div>
        <div>
          <label>Vegetação</label>
          <p>{expedicao.tipoVegetacao?.nm_vegetacao}</p>
        </div>

      </div>

      <div className="exp-actions">
        <button className="btn btn-detalhes" onClick={() =>onDetalhes(expedicao.id_expedicao)}>Detalhes</button>
        {isAberto && (
          <button className="btn btn-verde" onClick={()=>onRegistrar(expedicao.id_expedicao)}>
            Registrar Amostra
          </button>
        )}
      </div>
    </div>
  );
}
