import Link from 'next/link';
// import './AmostraCard.css';
import "../expedicao/[id_expedicao]/page.css"

export default function AmostraCard({ amostra }) {
  return (
    <div className="amostra-card">
      <div className="amostra-card-content">
        <div className="amostra-info">
          <input type="checkbox" className="amostra-checkbox" />
          
          <div className="amostra-nomes">
            <Link href={`/expedicoes/${amostra.expedicaoId}/amostras/${amostra.id}`}>
              <h3>{amostra.planta?.nm_cientifico || 'Sem nome científico'}</h3>
            </Link>
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