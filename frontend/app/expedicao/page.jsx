'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ExpedicaoCard from '../components/ExpedicaoCard';
import { api } from '../lib/api';
import Header from '../components/header';

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
      <Header title={"Expedições"}/>

      {expedicoes.map((expedicao) => {
        // const municipio = expedicao.municipio.nm_municipio
        // const vegetacao = expedicao.tipoVegetacao.nm_vegetacao
        return (
        <ExpedicaoCard
          key={expedicao.id_expedicao}
          expedicao={expedicao}
          onDetalhes={(id) => router.push(`/expedicao/${id}`)}
          onRegistrar={(id) => router.push(`/expedicao/${id}/amostra`)}
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
          onClick={() => router.push('/expedicao/cadastro')}
        >
          + Criar Nova Expedição
        </button>
      </div>
    </div>
  );
}