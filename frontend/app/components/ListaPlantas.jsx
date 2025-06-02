// /app/exp/[id]/page.jsx
'use client';
import { useState } from 'react';
import FormularioPlanta from './componentes/FormularioPlanta';

export default function ExpPage({ params }) {
  const [plantas, setPlantas] = useState([]);

  const adicionarPlanta = (novaPlanta) => {
    setPlantas([...plantas, novaPlanta]);
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>Expedição #{params.id}</h2>

      <FormularioPlanta onCadastrar={adicionarPlanta} />

      <h4>Plantas cadastradas:</h4>
      <ul>
        {plantas.map((planta, i) => (
          <li key={i}>
            <strong>{planta.nomeCientifico}</strong> – {planta.familia}
          </li>
        ))}
      </ul>
    </div>
  );
}
