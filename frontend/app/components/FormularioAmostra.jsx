'use client'
import { useState, useEffect } from 'react';
import './FormularioExpedicao.css'; // Reaproveitando o estilo existente
import { api } from '../lib/api';

export default function AmostraForm() {
  const [formData, setFormData] = useState({
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

  const [expedicoes, setExpedicoes] = useState([]);
  const [plantas, setPlantas] = useState([]);
  const [relevos, setRelevos] = useState([]);
  const [solos, setSolos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [exp, plantas, relevos, solos] = await Promise.all([
          api.get('/api/expedicoes'),
          api.get('/api/plantas'),
          api.get('/api/relevos'),
          api.get('/api/solos'),
        ]);

        setExpedicoes(exp);
        setPlantas(plantas);
        setRelevos(relevos);
        setSolos(solos);
      } catch (err) {
        setError('Erro ao carregar dados para o formulário.');
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('/api/amostras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar amostra');
      }

      alert('Amostra cadastrada com sucesso!');
      setFormData({
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
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="form-expedicao">
      <h2>Cadastro de Amostra</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        {[
          { name: 'id_planta', label: 'Planta', options: plantas, labelField: 'nm_cientifico' },
          { name: 'id_expedicao', label: 'Expedição', options: expedicoes, labelField: 'ds_titulo' },
          { name: 'id_relevo', label: 'Relevo', options: relevos, labelField: 'nome' },
          { name: 'id_solo', label: 'Solo', options: solos, labelField: 'nome' },
        ].map(({ name, label, options, labelField }) => (
          <div className="form-group" key={name}>
            <label htmlFor={name}>{label}</label>
            <select
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
            >
              <option value="">Selecione {label.toLowerCase()}</option>
              {options.map(item => (
                <option key={item[`id_${name.split('_')[1]}`]} value={item[`id_${name.split('_')[1]}`]}>
                  {item[labelField]}
                </option>
              ))}
            </select>
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="nm_coletor">Coletor</label>
          <input
            type="text"
            id="nm_coletor"
            name="nm_coletor"
            value={formData.nm_coletor}
            onChange={handleChange}
            required
          />
        </div>

        {[
          { name: 'nr_altitude', label: 'Altitude (m)' },
          { name: 'nr_longitude', label: 'Longitude' },
          { name: 'nr_latitude', label: 'Latitude' },
          { name: 'nr_altura', label: 'Altura (m)' },
          { name: 'nr_DAP', label: 'DAP (cm)' },
          { name: 'nr_CAP', label: 'CAP (cm)' },
        ].map(({ name, label }) => (
          <div className="form-group" key={name}>
            <label htmlFor={name}>{label}</label>
            <input
              type="number"
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="ds_exsudado">Exsudado</label>
          <input
            type="text"
            id="ds_exsudado"
            name="ds_exsudado"
            value={formData.ds_exsudado}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ds_obscomplement">Observações Complementares</label>
          <textarea
            id="ds_obscomplement"
            name="ds_obscomplement"
            value={formData.ds_obscomplement}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Cadastrar Amostra</button>
      </form>
    </div>
  );
}
