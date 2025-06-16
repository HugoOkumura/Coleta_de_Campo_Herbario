// components/FormularioExpedicao.jsx
'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './FormularioExpedicao.css';
import { api } from '../lib/api';


function formatDateForInput(isoDate) {
  if (!isoDate) return '';
  return isoDate.split('T')[0]; // Extrai apenas a parte da data (yyyy-MM-dd)
}

export default function ExpedicaoForm({modoEdicao = false, expedicaoExistente = null}) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    ds_titulo: '',
    id_municipio: '',
    id_estado: '',
    id_vegetacao: '',
    dt_expedicao: '',
  });

  const [estados, setEstados] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [vegetacoes, setVegetacoes] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [municipioCarregado, setMunicipioCarregado] = useState(false);

  const [loading, setLoading] = useState({
    estados: true,
    municipios: false,
    vegetacoes: true
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (modoEdicao && expedicaoExistente) {
      const carregarDadosIniciais = async () => {
        try {
          // 1. Carrega estados primeiro
          const estadosData = await api.get('api/estados');
          setEstados(estadosData);
          
          // 2. Extrai o ID do estado do município da expedição
          if (expedicaoExistente.municipio) {
            // const municipioData = await api.get(`api/municipios/${expedicaoExistente.municipio?.id_municipio}`);
            const estadoId = expedicaoExistente.municipio?.id_estado;
            
            // 3. Seta o estado e carrega seus municípios
            setEstadoSelecionado(estadoId);
            const municipiosData = await api.get(`api/municipios/estado?estado=${estadoSelecionado}`);
            setMunicipios(municipiosData);
            setMunicipioCarregado(true);
          }

          // 4. Seta os dados do formulário
          setFormData({
            ds_titulo: expedicaoExistente.ds_titulo,
            id_municipio: expedicaoExistente.municipio?.id_municipio || '',
            // id_estado: estadoId || ,
            id_vegetacao: expedicaoExistente.tipoVegetacao?.id_vegetacao || '',
            dt_expedicao: formatDateForInput(expedicaoExistente.dt_expedicao)
          });

        } catch (err) {
          console.error('Erro ao carregar dados para edição:', err);
          setError('Falha ao carregar dados da expedição');
        }
      };

      carregarDadosIniciais();
    }
  }, [modoEdicao, expedicaoExistente]);

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
        const data = await api.get('api/vegetacoes');
        setVegetacoes(data.data);
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
        setMunicipios(data);
        
        // Se for edição e os municípios acabaram de ser carregados
        if (modoEdicao && municipioCarregado) {
          setMunicipioCarregado(false); // Reseta o flag
        }
      } catch (err) {
        setError('Falha ao carregar municípios');
      } finally {
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
    let response;
    const dadosParaEnviar = { ...formData };

    if (modoEdicao) {
      // Remove campos vazios ou não editáveis se necessário
      if (!dadosParaEnviar.dt_expedicao) delete dadosParaEnviar.dt_expedicao;
      else{
        dadosParaEnviar.dt_expedicao = new Date(dadosParaEnviar.dt_expedicao).toISOString();
      };
      
      response = await api.put(
        `api/expedicoes/${expedicaoExistente.id_expedicao}`,
        dadosParaEnviar
      );
    } else {
      // Na criação, remove a data (se estiver no formData)
      const { dt_expedicao, ...dadosCriacao } = dadosParaEnviar;
      response = await api.post('api/expedicoes/create', dadosCriacao);
    }

    if (response.status != 201) {
      throw new Error(response.mensagem || (modoEdicao ? 'Falha ao atualizar' : 'Falha ao criar'));
    }

    // Redireciona para a página da expedição
    // router.push(`/expedicao/${modoEdicao ? expedicaoExistente.id_expedicao : response.exp.id_expedicao}`);
    if(modoEdicao) router.push(`/expedicao/${expedicaoExistente.id_expedicao}`);
    else router.push(`/expedicao/${response.exp.id_expedicao}`);
    
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

        {modoEdicao && (
         <div className="form-group">
            <label htmlFor="dt_expedicao">
              Data da Expedição
            </label>
            <input 
              type="date"
              id="dt_expedicao"
              name="dt_expedicao"
              value={formData.dt_expedicao}
              onChange={handleChange}
              pattern="\d{4}-\d{2}-\d{2}"
            />
         </div> 
        )}

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
            value={formData.id_municipio || ''}
            onChange={handleChange}
            required
            disabled={!estadoSelecionado || loading.municipios}
          >
            <option value="">Selecione um município</option>
            {municipios.map(municipio => (
              <option 
                key={municipio.id_municipio} 
                value={municipio.id_municipio} 
                // selected={modoEdicao && municipio.id_municipio === formData.id_municipio} 
              >
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
                {vegetacao.nm_vegetacao}
              </option>
            ))}
          </select>
          {loading.vegetacoes && <p className="loading-text">Carregando tipos de vegetação...</p>}
        </div>

        <button type="submit" disabled={Object.values(loading).some(l => l)}>
          {modoEdicao ? "Atualizar Expedição":"Cadastrar Expedição"}
        </button>
      </form>
    </div>
  );
}