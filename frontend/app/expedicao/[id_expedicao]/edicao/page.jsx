'use client'

import ExpedicaoForm from '@/components/FormularioExpedicao';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {api} from '../../../lib/api';

export default function EditarExpedicao({ params }) {
  const [expedicao, setExpedicao] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id_expedicao} = React.use(params)

  useEffect(() => {
    const fetchExpedicao = async () => {
      try {
        const data = await api.get(`api/expedicoes/${id_expedicao}`);
        setExpedicao(data);
      } catch (err) {
        console.error('Erro ao carregar expedição:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchExpedicao();
  }, [id_expedicao]);

  if (loading) return <div>Carregando...</div>;
  if (!expedicao) return <div>Expedição não encontrada</div>;

  return (
    <div style={{ backgroundColor: '#f1f7f6', minHeight: '100vh', paddingTop: '40px'}}>
      <ExpedicaoForm 
      modoEdicao={true} 
      expedicaoExistente={expedicao} 
      />
    </div>
  );
}