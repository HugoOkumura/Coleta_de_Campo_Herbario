'use client';

import './page.css';
import { useRouter } from 'next/navigation';
import { api } from '../../lib/api';
import React, { useEffect, useState } from 'react';
import Header from '@/app/components/header';
import AmostraLista from '@/app/components/AmostraLista';

export default function ExpedicaoDetalhes({ params }) {
  const router = useRouter();
  const [expedicao, setExpedicao] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id_expedicao } = React.use(params)

  useEffect(() => {
    const carregarExpedicao = async () => {
      try {
        const res = await api.get(`api/expedicoes/${id_expedicao}`);
        setExpedicao(res)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    carregarExpedicao();
  }, []);


  const handleFecharExpedicao = async () => {
    try{
      const response = await api.put(`api/expedicoes/${id_expedicao}?action=fechar`)
      if(response.status != 201) throw new Error("Falha ao fechar a expedição");
      // router.refresh();
      window.location.href = window.location.href
      console.log(response.message)
    } catch(error){
      setExpedicao(prev=>prev);
      alert(error.message)
    } 
  }

  const handleReabrirExpedicao = async () => {
    try{
      const response = await api.put(`api/expedicoes/${id_expedicao}?action=reabrir`)
      if(response.status != 201) throw new Error("Falha ao reabrir a expedição");
      window.location.href = window.location.href
      console.log(response.message)
    } catch(error){
      setExpedicao(prev=>prev);
      alert(error.message)
    } 
  }

  console.log(id_expedicao);
  return (
    <div className="expedicao-container" style={{ backgroundColor: 'f1f7f6', minHeight: '100vh' }}>
      <Header title={expedicao.ds_titulo} />

      <div className="dados-gerais">
        <h2>Dados Gerais</h2>
        <div className="dados-grid">
          <div className="dados-item">
            <p>Data</p>
            <p>{new Date(expedicao.dt_expedicao).toLocaleDateString('pt-BR')}</p>
          </div>
          <div className="dados-item">
            {/* <p>Estado/Cidade</p> */}
            <p>{expedicao.municipio?.id_estado} - {expedicao.municipio?.nm_municipio}</p>
          </div>
          <div className="dados-item">
            <p>Status</p>
            <p><span className={`badge ${expedicao.in_aberto ? 'aberto' : 'fechado'}`}>{expedicao.in_aberto ? 'Aberto' : 'Fechado'}</span></p>
          </div>
        </div>

        <div className="controles-vegetacao">
          <div className="vegetacao-info">
            <p>Vegetação</p>
            <p>{expedicao.tipoVegetacao?.nm_vegetacao}</p>
          </div>
          <div className="botoes-acao">

            <button
              className='botao botao-editar'
              onClick={(modoEdicao = true, expedicao) => router.push(`/expedicao/${id_expedicao}/edicao`)}
            >
              Editar
            </button>

            {expedicao.in_aberto && (
              <button
                className='botao botao-fechar'
                onClick={handleFecharExpedicao}
              >
                Fechar
              </button>
            )}

            {!expedicao.in_aberto && (
              <button
                className='botao botao-reabrir'
                onClick={handleReabrirExpedicao}
              >
                Reabrir
              </button>
            )}

            <button className="botao botao-deletar" onClick={async (e) => {
              e.preventDefault()
              setError(null)
              try {
                console.log("deletando....")
                const response = await api.delete(`api/expedicoes/${id_expedicao}`)

                if (response.success) {
                  throw new Error(`${response.message}`);
                }
                console.log(response)
                router.push('/expedicao')
              } catch (err) {
                setError(err.message)
              }
            }}>
              Deletar
            </button>
          </div>
        </div>
      </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <AmostraLista expedicaoId={id_expedicao} expedicao_aberto={expedicao.in_aberto} />
        </div>
    </div>
  );
}

