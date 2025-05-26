'use client';
import React, { useState } from 'react';
import './FormularioExpedicao.css';

export default function FormularioExpedicao() {
  const [formData, setFormData] = useState({
    titulo: '',
    pais: '',
    estado: '',
    municipio: '',
    coletor: '',
    referenciaLocal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Expedição cadastrada:', formData);
    // Aqui você pode enviar para um backend futuramente
  };

  return (
    <form className="form-expedicao" onSubmit={handleSubmit}>
      <h2>Cadastrar Nova Expedição</h2>

      <label htmlFor="titulo">Título da Expedição</label>
      <input
        type="text"
        id="titulo"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        required
      />

      <label htmlFor="pais">País</label>
      <input
        type="text"
        id="pais"
        name="pais"
        value={formData.pais}
        onChange={handleChange}
        required
      />

      <label htmlFor="estado">Estado</label>
      <input
        type="text"
        id="estado"
        name="estado"
        value={formData.estado}
        onChange={handleChange}
        required
      />

      <label htmlFor="municipio">Município</label>
      <input
        type="text"
        id="municipio"
        name="municipio"
        value={formData.municipio}
        onChange={handleChange}
        required
      />

      <label htmlFor="coletor">Coletor</label>
      <input
        type="text"
        id="coletor"
        name="coletor"
        value={formData.coletor}
        onChange={handleChange}
        required
      />

      <label htmlFor="referenciaLocal">Referência Local</label>
      <textarea
        id="referenciaLocal"
        name="referenciaLocal"
        value={formData.referenciaLocal}
        onChange={handleChange}
        required
      />

      <button type="submit">Salvar Expedição</button>
    </form>
  );
}
