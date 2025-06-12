// components/FormularioExpedicao.jsx
'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './FormularioExpedicao.css';
import { api } from '../lib/api';


export default function ExpedicaoForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    ds_titulo: '',
    id_municipio: '',
    id_vegetacao: ''
  });

  const [estados, setEstados] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [vegetacoes, setVegetacoes] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  const [loading, setLoading] = useState({
    estados: true,
    municipios: false,
    vegetacoes: true
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEstados = async () => {
      try {
        const data = await api.get('api/estados');
        setEstados(data);
        setLoading(prev => ({ ...prev, estados: false }));
      } catch (err) {
        setError('Falha ao carregar estados');
        setLoading(prev => ({ ...prev, estados: false }));
      }
    };

    fetchEstados();
  }, []);

  useEffect(() => {
    const fetchVegetacoes = async () => {
      try {
        const data = await api.get('api/vegetacao');
        setVegetacoes(data);
        setLoading(prev => ({ ...prev, vegetacoes: false }));
      } catch (err) {
        setError('Falha ao carregar tipos de vegetação');
        setLoading(prev => ({ ...prev, vegetacoes: false }));
      }
    };

    fetchVegetacoes();
  }, []);

  useEffect(() => {
    if (estadoSelecionado) {
      setLoading(prev => ({ ...prev, municipios: true }));
      
      const fetchMunicipios = async () => {
        try {
          const data = await api.get(`api/municipios/estado?estado=${estadoSelecionado}`);
          // const data = await api.get(`api/municipios`);
          setMunicipios(data);
          setLoading(prev => ({ ...prev, municipios: false }));
        } catch (err) {
          setError('Falha ao carregar municípios');
          setLoading(prev => ({ ...prev, municipios: false }));
        }
      };

      fetchMunicipios();
    } else {
      setMunicipios([]);
    }
  }, [estadoSelecionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEstadoChange = (e) => {
    setEstadoSelecionado(e.target.value);
    setFormData(prev => ({ ...prev, id_municipio: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await api.post('api/expedicoes/create',formData)
      console.log(response)
      if (!response.success) {
        throw new Error(`${response.mensage}`);
      }

      setFormData({
        ds_titulo: "",
        id_municipio: "",
        id_vegetacao: ""
      });
      setEstadoSelecionado('');

      console.log(response.exp)

      router.push(`/expedicao/${response.exp.id_expedicao}`)

      alert(`${response.menssage}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form-expedicao">
      <h2>Cadastro de Expedição</h2>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ds_titulo">
            Título da Expedição
          </label>
          <input
            type="text"
            id="ds_titulo"
            name="ds_titulo"
            value={formData.ds_titulo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="estado">
            Estado
          </label>
          <select
            id="estado"
            name="estado"
            value={estadoSelecionado}
            onChange={handleEstadoChange}
            required
            disabled={loading.estados}
          >
            <option value="">Selecione um estado</option>
            {estados.map(estado => (
              <option key={estado.id_estado} value={estado.id_estado}>
                {estado.nm_estado}
              </option>
            ))}
          </select>
          {loading.estados && <p className="loading-text">Carregando estados...</p>}
        </div>

        <div className="form-group">
          <label htmlFor="id_municipio">
            Município
          </label>
          <select
            id="id_municipio"
            name="id_municipio"
            value={formData.id_municipio}
            onChange={handleChange}
            required
            disabled={!estadoSelecionado || loading.municipios}
          >
            <option value="">Selecione um município</option>
            {municipios.map(municipio => (
              <option key={municipio.id_municipio} value={municipio.id_municipio}>
                {municipio.nm_municipio}
              </option>
            ))}
          </select>
          {loading.municipios && <p className="loading-text">Carregando municípios...</p>}
        </div>

        <div className="form-group">
          <label htmlFor="id_vegetacao">
            Tipo de Vegetação (Opcional)
          </label>
          <select
            id="id_vegetacao"
            name="id_vegetacao"
            value={formData.id_vegetacao}
            onChange={handleChange}
            disabled={loading.vegetacoes}
          >
            <option value="">Selecione um tipo de vegetação</option>
            {vegetacoes.map(vegetacao => (
              <option key={vegetacao.id_vegetacao} value={vegetacao.id_vegetacao}>
                {vegetacao.nome}
              </option>
            ))}
          </select>
          {loading.vegetacoes && <p className="loading-text">Carregando tipos de vegetação...</p>}
        </div>

        <button type="submit" disabled={Object.values(loading).some(l => l)}>
          Cadastrar Expedição
        </button>
      </form>
    </div>
  );
}