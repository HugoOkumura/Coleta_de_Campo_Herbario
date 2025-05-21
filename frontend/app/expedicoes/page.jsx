'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ExpedicaoCard from '../components/ExpedicaoCard';

export default function ExpedicoesPage() {
  const router = useRouter();

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

      <ExpedicaoCard
        titulo="Expedição Amazônia 2025"
        descricao="Coleta de espécies arbóreas"
        data="15/04/2025"
        local="Reserva Florestal Xingu"
        status="Aberto"
        onDetalhes={() => router.push('/expedicoes/amazonia-2025')}
        onRegistrar={() => alert('Registrar Amostra - Amazônia 2025')}
      />

      <ExpedicaoCard
        titulo="Cerrado Central"
        descricao="Estudo de plantas medicinais"
        data="22/03/2025"
        local="Chapada dos Veadeiros"
        status="Fechado"
        onDetalhes={() => router.push('/expedicoes/cerrado-central')}
      />

      <ExpedicaoCard
        titulo="Serra da Canastra"
        descricao="Registro de biodiversidade"
        data="10/05/2025"
        local="Parque Nacional"
        status="Aberto"
        onDetalhes={() => router.push('/expedicoes/serra-da-canastra')}
        onRegistrar={() => alert('Registrar Amostra - Serra da Canastra')}
      />

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          style={{ background: 'none', border: 'none', color: '#333', fontSize: '16px', cursor: 'pointer' }}
          onClick={() => router.push('/expedicoes/nova')}
        >
          + Criar Nova Expedição
        </button>
      </div>
    </div>
  );
}
