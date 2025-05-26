// /app/componentes/FormularioPlanta.jsx
'use client';
import { useState } from 'react';
import './FormularioPlanta.css';

export default function FormularioPlanta() {
  const [dadosPlanta, setDadosPlanta] = useState({
    nomeCientifico: '',
    nomeRegular: '',
    familia: '',
    solo: '',
    altitude: '',
    latitude: '',
    longitude: '',
    tipoVegetacao: '',
    observacoes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosPlanta((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Planta cadastrada:', dadosPlanta);
    // Salvar no backend ou associar a uma expedição
  };

  return (
    <form className="form-planta" onSubmit={handleSubmit}>
      <h3>Cadastro de Planta</h3>

      <label htmlFor="nomeCientifico">Nome Científico</label>
      <input
        type="text"
        id="nomeCientifico"
        name="nomeCientifico"
        value={dadosPlanta.nomeCientifico}
        onChange={handleChange}
        required
      />

      <label htmlFor="nomeRegular">Nome Regular</label>
      <input
        type="text"
        id="nomeRegular"
        name="nomeRegular"
        value={dadosPlanta.nomeRegular}
        onChange={handleChange}
      />

      <label htmlFor="familia">Família</label>
      <input
        type="text"
        id="familia"
        name="familia"
        value={dadosPlanta.familia}
        onChange={handleChange}
      />

      <label htmlFor="solo">Solo</label>
      <input
        type="text"
        id="solo"
        name="solo"
        value={dadosPlanta.solo}
        onChange={handleChange}
      />

      <label htmlFor="altitude">Altitude</label>
      <input
        type="number"
        id="altitude"
        name="altitude"
        value={dadosPlanta.altitude}
        onChange={handleChange}
      />

      <label htmlFor="latitude">Latitude</label>
      <input
        type="number"
        step="0.0000001"
        id="latitude"
        name="latitude"
        value={dadosPlanta.latitude}
        onChange={handleChange}
      />

      <label htmlFor="longitude">Longitude</label>
      <input
        type="number"
        step="0.0000001"
        id="longitude"
        name="longitude"
        value={dadosPlanta.longitude}
        onChange={handleChange}
      />

      <label htmlFor="tipoVegetacao">Tipo de Vegetação</label>
      <input
        type="text"
        id="tipoVegetacao"
        name="tipoVegetacao"
        value={dadosPlanta.tipoVegetacao}
        onChange={handleChange}
      />

      <label htmlFor="observacoes">Observações</label>
      <textarea
        id="observacoes"
        name="observacoes"
        value={dadosPlanta.observacoes}
        onChange={handleChange}
      />

      <button type="submit">Salvar Planta</button>
    </form>
  );
}
