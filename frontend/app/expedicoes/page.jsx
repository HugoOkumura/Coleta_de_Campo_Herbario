'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ExpedicaoCard from '../components/ExpedicaoCard';
import { api } from '../lib/api';

export default function ExpedicoesPage() {
  const router = useRouter();
  const [expedicoes, setExpedicoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const carregarExpedicoes = async () => {
      try {
        const data = await api.get('api/expedicoes');
        setExpedicoes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    carregarExpedicoes();
  }, []);

  if (loading) {
    return (
      <div style={{ backgroundColor: '#f1f7f6', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Carregando expedições...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ backgroundColor: '#f1f7f6', minHeight: '100vh', padding: '20px' }}>
        <p style={{ color: 'red' }}>Erro: {error}</p>
      </div>
    );
  }
  return (
    <div style={{ backgroundColor: '#f1f7f6', minHeight: '100vh'}}>
      <header style={{
        backgroundColor: '#007e33',
        padding: '20px 0',
        boxShadow: '0 2px 6px rgba(143, 45, 45, 0.1)',
        marginBottom: '30px'
      }}>
        <h1 style={{
          margin: 0,
          textAlign: 'center',
          color: 'white',
          fontSize: '32px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }}>
          Coleta de Campo
        </h1>
      </header>

      {expedicoes.map((expedicao) => {
        const municipio = expedicao.municipio.nm_municipio
        console.log(expedicao)
        return (
        <ExpedicaoCard
          key={expedicao.id_expedicao}
          data={new Date(expedicao.dt_expedicao).toLocaleDateString('pt-BR')}
          municipio={municipio}
          status={expedicao.in_aberto === true ? 'Aberto' : 'Fechado'}

          onDetalhes={() => router.push(`/expedicoes/${expedicao.id_expedicao}`)}
          onRegistrar={() => router.push(`/expedicoes/${expedicao.id_expedicao}/registrar`)}
        />
      )}
      )}

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          style={{ 
            background: '#007e33',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
          onClick={() => router.push('/expedicoes/nova')}
        >
          + Criar Nova Expedição
        </button>
      </div>
    </div>
  );
}