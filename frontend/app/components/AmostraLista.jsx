import React, {useEffect, useState} from "react"
import './AmostraLista.css'
import { useRouter } from 'next/navigation';
import { api } from "../lib/api"
import Link from "next/link";
import AmostraCard from "./AmostraCard";

export default function AmostraLista({
    expedicaoId,
    expedicao_aberto
    }
){
    const router = useRouter();
    const [amostras, setAmostras] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null)

    useEffect( () => {
        const carregarAmostras = async () => {
            try{
                const response = await api.get(`api/amostras/expedicao/${expedicaoId}`)
                console.log(response.data)
                if(response.status !== 200) throw new Error(response.message);
                setAmostras(response.data);
            } catch(err){
                setError(err.message)
            }finally{
                setLoading(false);
            }
        }

        carregarAmostras();
    }, []);

    const handleAdicionarClick = () => {
        router.push(`/expedicao/${expedicaoId}/amostra`);
    }

    if(loading) return <div>Carregando Amostras</div>

    return(
        <div className="container-amostras">

            <div >
                <h2>Lista de Amostras</h2>

                { expedicao_aberto &&(
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button
                            className="botao-adicionar"
                            onClick={handleAdicionarClick}
                        >
                            Adicionar Amostra
                        </button>
                </div>
                    )}

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