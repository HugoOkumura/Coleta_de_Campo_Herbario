'use client';

// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';
import {api} from '../../lib/api';
// import Link from 'next/link';

// import Header from '@/app/components/header';

// export default function DetalhesExpedicao() {
//   const { id_expedicao } = useParams();
//   const [expedicao, setExpedicao] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//     useEffect(() => {
//         const carregarExpedicao = async () => {
//             try{
//                 const data = await api.get(`api/expedicoes/${id_expedicao}`)
//                 setExpedicao(data);
//             } catch (err){
//                 setError(err.message);
//             } finally{
//                 setLoading(false);
//             }
//         };

//         carregarExpedicao();
//     }, [id_expedicao])

//   return (
//     <div>
//       <Header title={expedicao.ds_titulo}/>


      
//     </div>
//   );

// }

// import AmostraLista from '@/components/AmostraLista';
import Link from 'next/link';
import './page.css';
import { useRouter } from 'next/navigation';
import React, {useEffect, useState} from 'react';
import Header from '@/app/components/header';

export default function ExpedicaoDetalhes({params}) {
  // const res = await fetch(`http://localhost:5000/api/expedicoes/${params.id}`);
  const router = useRouter();
  const [expedicao, setExpedicao] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {id_expedicao} = React.use(params)

  useEffect(() =>{
    const carregarExpedicao = async () => {
      try{
        const res = await api.get(`api/expedicoes/${id_expedicao}`);
        setExpedicao(res)
      } catch(err) {
        setError(err.message);
      } finally{
        setLoading(false);
      }
    };
    
    carregarExpedicao();
  }, []);  
  
  // console.log(expedicao);
  return (
      
      <div className="expedicao-container" style={{backgroundColor: 'f1f7f6', minHeight: '100vh'}}>
        <Header title={expedicao.ds_titulo}/>

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
              <p>{expedicao.in_aberto ? 'Fechado' : 'Aberto'}</p>
            </div>
          </div>

          <div className="controles-vegetacao">
            <div className="vegetacao-info">
              <p>Vegetação</p>
              <p>{expedicao.tipoVegetacao?.nm_vegetacao}</p>
            </div>
            <div className="botoes-acao">
              <Link 
                href={`/expedicao/${id_expedicao}/edicao`}
                className="botao botao-editar"
                >
                Editar
              </Link>
              <button className="botao botao-deletar" onClick={ async (e) => {
                e.preventDefault()
                setError(null)
                try{
                  console.log("deletando....")
                  const response = await api.delete(`api/expedicoes/${id_expedicao}`)
                  
                  if(!response.success) {
                    throw new Error(`${response.mensagem}`);
                  }
                  console.log(response)
                  router.push('/expedicao')
                } catch(err){
                  setError(err.mensage)
                }
              }}>
                Deletar
              </button>
            </div>
          </div>
        </div>

        {/* <AmostraLista expedicaoId={params.id_expedicao} /> */}
      </div>
  );
}

