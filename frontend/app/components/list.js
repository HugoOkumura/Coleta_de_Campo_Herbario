'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ExpedicoesList() {
  const [expedicoes, setExpedicoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulação de chamada à API (substitua pela sua chamada real)
  useEffect(() => {
    const fetchExpedicoes = async () => {
      try {
        // Substitua por: const response = await fetch('/api/expedicoes');
        // const data = await response.json();
        
        // Dados mockados temporários
        const mockData = [
          {
            id: 1,
            nome: "Expedição Amazônia 2025",
            data: "15/04/2025",
            local: "Reserva Florestal Xingu",
            uf: "PA",
            estado: "aberto",
            descricao: "Coleta de espécies arbóreas"
          },
          {
            id: 2,
            nome: "Cerrado Central",
            data: "22/03/2025",
            local: "Chapada dos Veadeiros",
            uf: "GO",
            estado: "fechado",
            descricao: "Estudo de plantas medicinais"
          }
        ];
        
        setExpedicoes(mockData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchExpedicoes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto text-center">
        Erro ao carregar expedições: {error}
      </div>
    );
  }

  if (expedicoes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-shadow">
          <Link href="/expedicao/nova">
            <div className="flex flex-col items-center">
              <svg
                className="h-15 w-15 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900">Nenhuma expedição encontrada</h3>
              <p className="mt-2 text-sm text-gray-500">Clique aqui para criar sua primeira expedição</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-6 py-8">
      {expedicoes.map((expedicao) => (
        <div
          key={expedicao.id}
          className={`w-full max-w-2xl p-6 rounded-lg shadow-md ${expedicao.estado === 'aberto' ? 'bg-white border-l-10 border-green-500' : 'bg-gray-50 border-l-10 border-gray-600'}`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className=" font-semibold text-gray-800">{expedicao.nome}</h2>
              <p className="text-gray-600">{expedicao.descricao}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${expedicao.estado === 'aberto' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-800'}`}>
              {expedicao.estado === 'aberto' ? 'Aberto' : 'Fechado'}
            </span>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Data</p>
              <p className="text-gray-800">{expedicao.data}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 ">Local</p>
              <p className="text-sm text-gray-800">{expedicao.local} - {expedicao.uf} </p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <Link
              href={`/expedicao/${expedicao.id}`}
              className="px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-900 transition-colors "
            >
              Ver Detalhes
            </Link>
            {expedicao.estado === 'aberto' && (
              <Link
                href={`/expedicao/${expedicao.id}/registrar`}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors "
              >
                Registrar Amostra
              </Link>
            )}
          </div>
        </div>
      ))}
      
      <div className="w-full max-w-2xl mt-8">
        <Link
          href="/expedicao/nova"
          className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700"
        >
          <svg
            className="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Criar Nova Expedição
        </Link>
      </div>
    </div>
  );
}