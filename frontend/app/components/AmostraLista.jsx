import React, {useEffect, useState} from "react"
import './AmostraLista.css'
// import "../expedicao/[id_expedicao]/page.css"

import { useRouter } from "next/router"
import { api } from "../lib/api"
import Link from "next/link";
import AmostraCard from "./AmostraCard";

export default function AmostraLista({idExpedicao}){
    // const router = useRouter();
    const [amostras, setAmostras] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null)

    useEffect( () => {

        const carregarAmostras = async () => {
            try{
                const response = await api.get(`api/amostras/expedicao/${idExpedicao}`)
                if(response.status !== 201) throw new Error(response.message);
                setAmostras(response.data);
            } catch(err){
                setError(err.message)
            }finally{
                setLoading(false);
            }
        }

        carregarAmostras();
    }, []);

    if(loading) return <div>Carregando Amostras</div>

    return(
        <div className="container-amostras">

            <div >
                <h2>Lista de Amostras</h2>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link className="botao-adicionar" href={`./FormularioAmostra`}>
                        Adicionar Amostra
                    </Link>
                </div>
            </div>

            <div>
                {amostras.length > 0 ? (
                    amostras.map(amostra => (
                        <AmostraCard key={amostra.id_amostra} amostra={amostra}/>
                    ))
                ) : (
                    <p>Nenhuma amostra cadastrada...</p>
                )}
            </div>
        </div>
    );
}