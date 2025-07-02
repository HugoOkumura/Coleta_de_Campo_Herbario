'use client';
import { useState, useEffect } from 'react';
import './FormularioExpedicao.css';
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

  const [plantas, setPlantas] = useState([]);
  const [expedicoes, setExpedicoes] = useState([]);
  const [relevos, setRelevos] = useState([]);
  const [solos, setSolos] = useState([]);

  const [loading, setLoading] = useState({
    plantas: true,
    expedicoes: true,
    relevos: true,
    solos: true
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [exp, plt, rel, sol] = await Promise.all([
          api.get('/api/expedicoes'),
          api.get('/api/plantas'),
          api.get('/api/relevos'),
          api.get('/api/solos'),
        ]);

        setExpedicoes(exp.data.map(e => ({
          id: e.id_expedicao,
          ds_titulo: e.ds_titulo
        })));

        setPlantas(plt.data.map(p => ({
          id: p.id_planta,
          nm_cientifico: p.nm_cientifico
        })));

        setRelevos(rel.data.map(r => ({
          id: r.id_relevo,
          nome: r.nome
        })));

        setSolos(sol.data.map(s => ({
          id: s.id_solo,
          nome: s.nome
        })));

      } catch (err) {
        console.error('Erro ao carregar dados:', err);
        setError('Erro ao carregar dados do formulário');
      } finally {
        setLoading({
          plantas: false,
          expedicoes: false,
          relevos: false,
          solos: false
        });
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
      const response = await api.post('/api/amostras', formData);
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
      console.error('Erro ao cadastrar amostra:', err);
      setError(err.message || 'Erro ao cadastrar amostra');
    }
  };

  return (
    <div className="form-expedicao">
      <h2>Cadastro de Amostra</h2>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        {[
          {
            name: 'id_planta',
            label: 'Planta',
            options: plantas,
            labelField: 'nm_cientifico',
            loadingKey: 'plantas'
          },
          {
            name: 'id_expedicao',
            label: 'Expedição',
            options: expedicoes,
            labelField: 'ds_titulo',
            loadingKey: 'expedicoes'
          },
          {
            name: 'id_relevo',
            label: 'Relevo',
            options: relevos,
            labelField: 'nome',
            loadingKey: 'relevos'
          },
          {
            name: 'id_solo',
            label: 'Solo',
            options: solos,
            labelField: 'nome',
            loadingKey: 'solos'
          }
        ].map(({ name, label, options, labelField, loadingKey }) => (
          <div className="form-group" key={name}>
            <label htmlFor={name}>{label}</label>
            <select
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              disabled={loading[loadingKey]}
            >
              <option value="">Selecione {label.toLowerCase()}</option>
              {options.map(item => (
                <option key={item.id} value={item.id}>
                  {item[labelField]}
                </option>
              ))}
            </select>
            {loading[loadingKey] && (
              <p className="loading-text">Carregando {label.toLowerCase()}s...</p>
            )}
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

        <button type="submit" disabled={Object.values(loading).some(v => v)}>
          Cadastrar Amostra
        </button>
      </form>
    </div>
  );
}
