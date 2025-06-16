// /app/componentes/FormularioAmostra.jsx
'use client';
import { useState } from 'react';
import './FormularioPlanta.css'; // usa o mesmo estilo

export default function FormularioAmostra() {
  const [dados, setDados] = useState({
    id_planta: '',
    id_expedicao: '',
    id_relevo: '',
    id_solo: '',
    nm_coletor: '',
    nr_altitude: '',
    nr_longitude: '',
    nr_latitude: '',
    nr_altura: '',
    nr_DAP: '',
    nr_CAP: '',
    ds_exsudado: '',
    ds_obscomplement: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados da amostra:', dados);
    // Aqui você pode enviar os dados para a API no futuro
  };

  return (
    <form className="form-planta" onSubmit={handleSubmit}>
      <h3>Cadastro de Amostra</h3>

      <label htmlFor="id_planta">Planta</label>
      <input type="text" id="id_planta" name="id_planta" value={dados.id_planta} onChange={handleChange} required />

      <label htmlFor="id_expedicao">Expedição</label>
      <input type="text" id="id_expedicao" name="id_expedicao" value={dados.id_expedicao} onChange={handleChange} required />

      <label htmlFor="id_relevo">Relevo</label>
      <input type="text" id="id_relevo" name="id_relevo" value={dados.id_relevo} onChange={handleChange} />

      <label htmlFor="id_solo">Solo</label>
      <input type="text" id="id_solo" name="id_solo" value={dados.id_solo} onChange={handleChange} />

      <label htmlFor="nm_coletor">Nome do Coletor</label>
      <input type="text" id="nm_coletor" name="nm_coletor" value={dados.nm_coletor} onChange={handleChange} />

      <label htmlFor="nr_altitude">Altitude</label>
      <input type="number" id="nr_altitude" name="nr_altitude" value={dados.nr_altitude} onChange={handleChange} />

      <label htmlFor="nr_longitude">Longitude</label>
      <input type="number" step="0.0000001" id="nr_longitude" name="nr_longitude" value={dados.nr_longitude} onChange={handleChange} />

      <label htmlFor="nr_latitude">Latitude</label>
      <input type="number" step="0.0000001" id="nr_latitude" name="nr_latitude" value={dados.nr_latitude} onChange={handleChange} />

      <label htmlFor="nr_altura">Altura da Planta(cm)</label>
      <input type="number" id="nr_altura" name="nr_altura" value={dados.nr_altura} onChange={handleChange} />

      <label htmlFor="nr_DAP">DAP</label>
      <input type="number" id="nr_DAP" name="nr_DAP" value={dados.nr_DAP} onChange={handleChange} />

      <label htmlFor="nr_CAP">CAP</label>
      <input type="number" id="nr_CAP" name="nr_CAP" value={dados.nr_CAP} onChange={handleChange} />

      <label htmlFor="ds_exsudado">Exsudado</label>
      <input type="text" id="ds_exsudado" name="ds_exsudado" value={dados.ds_exsudado} onChange={handleChange} />

      <label htmlFor="ds_obscomplement">Observações Complementares</label>
      <textarea id="ds_obscomplement" name="ds_obscomplement" value={dados.ds_obscomplement} onChange={handleChange} />

      <button type="submit">Salvar Amostra</button>
    </form>
  );
}
