// import Image from "next/image";
import Head from 'next/head'
import Header from './components/header'

import ExpedicoesList from './components/list'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Head>
        <title>Coleta de Campo</title>
        <meta name="description" content="Sistema de gerenciamento de campo" />  
      </Head>

      <Header className="min-h-screen" title="Coleta de Campo" />

      <main className="container mx-auto px-4 py-8">
      
        <ExpedicoesList/>   

      </main>



    </div>
  )
}
