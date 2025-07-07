import './AmostraCard.css'

export default function AmostraCard({ amostra }) {
  return (
    <div className="amostra-card">
      <div className="amostra-card-content">
        <div className="amostra-info">
          <div className="amostra-nomes">
            <h3>{amostra.planta?.nm_cientifico || 'Sem nome científico'}</h3>
            <p>{amostra.planta?.nm_vulgar || 'Sem nome vulgar'}</p>
          </div>
        </div>

        <div className="amostra-detalhes">
          <p>{amostra.planta?.nm__familia}</p>
          <p>{amostra.nm_coletor}</p>
        </div>
      </div>
    </div>
  );
}