--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9 (Debian 16.9-1.pgdg120+1)
-- Dumped by pg_dump version 16.6 (Ubuntu 16.6-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: herbario; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA herbario;


ALTER SCHEMA herbario OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: amostra; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.amostra (
    id_amostra numeric(9,0) NOT NULL,
    id_planta numeric(9,0),
    id_expedicao numeric(7,0),
    id_relevo numeric(5,0),
    id_solo numeric(5,0),
    nm_coletor character varying(160) NOT NULL,
    nr_altitude numeric(6,2),
    nr_longitude numeric(9,6),
    nr_latitude numeric(9,6),
    nr_altura numeric(5,2),
    nr_dap numeric(5,2),
    nr_cap numeric(5,2),
    ds_exsudado character varying(100),
    ds_obscomplement character varying(400)
);


ALTER TABLE public.amostra OWNER TO postgres;

--
-- Name: amostra_dado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.amostra_dado (
    id_amostra numeric(9,0) NOT NULL,
    id_dadoeco numeric(2,0) NOT NULL,
    id_itemdado numeric(2,0) NOT NULL,
    ds_cor character varying(255),
    ds_obs character varying(255)
);


ALTER TABLE public.amostra_dado OWNER TO postgres;

--
-- Name: amostra_midia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.amostra_midia (
    id_amostramidia numeric(9,0) NOT NULL,
    id_amostra numeric(9,0),
    tp_arquivo character varying(50) NOT NULL,
    arquivo bytea NOT NULL,
    descricao text,
    data_upload timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.amostra_midia OWNER TO postgres;

--
-- Name: dado_ecologico; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dado_ecologico (
    id_dadoeco numeric(2,0) NOT NULL,
    ds_dadoeco character varying(50) NOT NULL
);


ALTER TABLE public.dado_ecologico OWNER TO postgres;

--
-- Name: estado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estado (
    id_estado character(2) NOT NULL,
    nm_estado character varying(40) NOT NULL
);


ALTER TABLE public.estado OWNER TO postgres;

--
-- Name: expedicao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.expedicao (
    id_expedicao numeric(7,0) NOT NULL,
    dt_expedicao date NOT NULL,
    id_municipio numeric(7,0) NOT NULL,
    id_vegetacao numeric(5,0),
    status boolean
);


ALTER TABLE public.expedicao OWNER TO postgres;

--
-- Name: expedicao_midia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.expedicao_midia (
    id_expedicaomidia numeric(9,0) NOT NULL,
    id_expedicao numeric(9,0),
    tp_arquivo character varying(50) NOT NULL,
    arquivo bytea NOT NULL,
    descricao text,
    data_upload timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.expedicao_midia OWNER TO postgres;

--
-- Name: item_dado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_dado (
    id_dadoeco numeric(2,0) NOT NULL,
    id_itemdado numeric(2,0) NOT NULL,
    ds_itemdado character varying(50) NOT NULL
);


ALTER TABLE public.item_dado OWNER TO postgres;

--
-- Name: municipio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.municipio (
    id_municipio numeric(2,0) NOT NULL,
    nm_municipio character varying(40) NOT NULL,
    id_estado character(2) NOT NULL
);


ALTER TABLE public.municipio OWNER TO postgres;

--
-- Name: planta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.planta (
    id_planta numeric(9,0) NOT NULL,
    nm_vulgar character varying(255) NOT NULL,
    nm_cientifico character varying(255) NOT NULL,
    nm_familia character varying(100) NOT NULL
);


ALTER TABLE public.planta OWNER TO postgres;

--
-- Name: planta_dado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.planta_dado (
    id_planta numeric(9,0) NOT NULL,
    id_dadoeco numeric(2,0) NOT NULL,
    id_itemdado numeric(2,0) NOT NULL,
    ds_obs character varying(255)
);


ALTER TABLE public.planta_dado OWNER TO postgres;

--
-- Name: tipo_relevo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_relevo (
    id_relevo numeric(5,0) NOT NULL,
    nm_relevo character varying(40) NOT NULL
);


ALTER TABLE public.tipo_relevo OWNER TO postgres;

--
-- Name: tipo_solo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_solo (
    id_solo numeric(5,0) NOT NULL,
    nm_solo character varying(40) NOT NULL
);


ALTER TABLE public.tipo_solo OWNER TO postgres;

--
-- Name: tipo_vegetacao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_vegetacao (
    id_vegetacao numeric(5,0) NOT NULL,
    nm_vegetacao character varying(40) NOT NULL
);


ALTER TABLE public.tipo_vegetacao OWNER TO postgres;

--
-- Data for Name: amostra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.amostra (id_amostra, id_planta, id_expedicao, id_relevo, id_solo, nm_coletor, nr_altitude, nr_longitude, nr_latitude, nr_altura, nr_dap, nr_cap, ds_exsudado, ds_obscomplement) FROM stdin;
\.


--
-- Data for Name: amostra_dado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.amostra_dado (id_amostra, id_dadoeco, id_itemdado, ds_cor, ds_obs) FROM stdin;
\.


--
-- Data for Name: amostra_midia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.amostra_midia (id_amostramidia, id_amostra, tp_arquivo, arquivo, descricao, data_upload) FROM stdin;
\.


--
-- Data for Name: dado_ecologico; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dado_ecologico (id_dadoeco, ds_dadoeco) FROM stdin;
1	Luminosidade
2	Substrato
3	Associações
4	Hábito
5	Tronco
6	Folhas
7	Frutos
8	Flores
\.


--
-- Data for Name: estado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estado (id_estado, nm_estado) FROM stdin;
\.


--
-- Data for Name: expedicao; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expedicao (id_expedicao, dt_expedicao, id_municipio, id_vegetacao, status) FROM stdin;
\.


--
-- Data for Name: expedicao_midia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expedicao_midia (id_expedicaomidia, id_expedicao, tp_arquivo, arquivo, descricao, data_upload) FROM stdin;
\.


--
-- Data for Name: item_dado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item_dado (id_dadoeco, id_itemdado, ds_itemdado) FROM stdin;
1	1	Heliófita
1	2	Semi-ciófila
1	3	Ciófila
2	1	Rupícola
2	2	Ripária
2	3	Palustre
2	4	Hidrófila
2	5	Psamófila
2	6	Reófila
2	7	Terrícola
3	1	Epífita
3	2	Parasita
3	3	Hemi-parasita
3	4	Saprófita
4	1	Árvore
4	2	Arvoretas
4	3	Arbusto
4	4	Subarbusto
4	5	Erva
4	6	Ereta
4	7	Decumbente
4	8	Escandente
4	9	Cespitosa
4	10	Liana
4	11	Prostrada
4	12	Repitante
4	13	Trepadeira com gavinhas
4	14	Trepadeira volúvel
5	1	Árvores
5	2	Arvoretas
5	3	Arbustos
5	4	Casca
5	5	Lisa
5	6	Escamosa
5	7	Esfoliante
5	8	Estriada
5	9	Fissurada
5	10	Gretada
5	11	Suberosa
5	12	Verrucosa
6	1	Membranáceas
6	2	Cartáceas
6	3	Coriáceas
6	4	Crassas
7	1	Carnoso
7	2	Seco
7	3	Deiscentes
7	4	Indeiscentes
8	1	Cor Cálice
8	2	Cor Corola
\.


--
-- Data for Name: municipio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.municipio (id_municipio, nm_municipio, id_estado) FROM stdin;
\.


--
-- Data for Name: planta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.planta (id_planta, nm_vulgar, nm_cientifico, nm_familia) FROM stdin;
\.


--
-- Data for Name: planta_dado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.planta_dado (id_planta, id_dadoeco, id_itemdado, ds_obs) FROM stdin;
\.


--
-- Data for Name: tipo_relevo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipo_relevo (id_relevo, nm_relevo) FROM stdin;
\.


--
-- Data for Name: tipo_solo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipo_solo (id_solo, nm_solo) FROM stdin;
\.


--
-- Data for Name: tipo_vegetacao; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipo_vegetacao (id_vegetacao, nm_vegetacao) FROM stdin;
\.


--
-- Name: amostra_dado amostra_dado_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amostra_dado
    ADD CONSTRAINT amostra_dado_pkey PRIMARY KEY (id_amostra, id_dadoeco, id_itemdado);


--
-- Name: amostra_midia amostra_midia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amostra_midia
    ADD CONSTRAINT amostra_midia_pkey PRIMARY KEY (id_amostramidia);


--
-- Name: amostra amostra_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amostra
    ADD CONSTRAINT amostra_pkey PRIMARY KEY (id_amostra);


--
-- Name: dado_ecologico dado_ecologico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dado_ecologico
    ADD CONSTRAINT dado_ecologico_pkey PRIMARY KEY (id_dadoeco);


--
-- Name: estado estado_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estado
    ADD CONSTRAINT estado_pkey PRIMARY KEY (id_estado);


--
-- Name: expedicao_midia expedicao_midia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expedicao_midia
    ADD CONSTRAINT expedicao_midia_pkey PRIMARY KEY (id_expedicaomidia);


--
-- Name: expedicao expedicao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expedicao
    ADD CONSTRAINT expedicao_pkey PRIMARY KEY (id_expedicao);


--
-- Name: item_dado item_dado_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_dado
    ADD CONSTRAINT item_dado_pkey PRIMARY KEY (id_dadoeco, id_itemdado);


--
-- Name: municipio municipio_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.municipio
    ADD CONSTRAINT municipio_pkey PRIMARY KEY (id_municipio);


--
-- Name: planta_dado planta_dado_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.planta_dado
    ADD CONSTRAINT planta_dado_pkey PRIMARY KEY (id_planta, id_dadoeco, id_itemdado);


--
-- Name: planta planta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.planta
    ADD CONSTRAINT planta_pkey PRIMARY KEY (id_planta);


--
-- Name: tipo_relevo tipo_relevo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_relevo
    ADD CONSTRAINT tipo_relevo_pkey PRIMARY KEY (id_relevo);


--
-- Name: tipo_solo tipo_solo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_solo
    ADD CONSTRAINT tipo_solo_pkey PRIMARY KEY (id_solo);


--
-- Name: tipo_vegetacao tipo_vegetacao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_vegetacao
    ADD CONSTRAINT tipo_vegetacao_pkey PRIMARY KEY (id_vegetacao);


--
-- Name: amostra_dado amostra_dado_id_amostra_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amostra_dado
    ADD CONSTRAINT amostra_dado_id_amostra_fkey FOREIGN KEY (id_amostra) REFERENCES public.amostra(id_amostra);


--
-- Name: amostra_dado amostra_dado_id_dadoeco_id_itemdado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amostra_dado
    ADD CONSTRAINT amostra_dado_id_dadoeco_id_itemdado_fkey FOREIGN KEY (id_dadoeco, id_itemdado) REFERENCES public.item_dado(id_dadoeco, id_itemdado);


--
-- Name: amostra amostra_id_expedicao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amostra
    ADD CONSTRAINT amostra_id_expedicao_fkey FOREIGN KEY (id_expedicao) REFERENCES public.expedicao(id_expedicao);


--
-- Name: amostra amostra_id_planta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amostra
    ADD CONSTRAINT amostra_id_planta_fkey FOREIGN KEY (id_planta) REFERENCES public.planta(id_planta);


--
-- Name: amostra amostra_id_relevo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amostra
    ADD CONSTRAINT amostra_id_relevo_fkey FOREIGN KEY (id_relevo) REFERENCES public.tipo_relevo(id_relevo);


--
-- Name: amostra amostra_id_solo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amostra
    ADD CONSTRAINT amostra_id_solo_fkey FOREIGN KEY (id_solo) REFERENCES public.tipo_solo(id_solo);


--
-- Name: amostra_midia amostra_midia_id_amostra_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amostra_midia
    ADD CONSTRAINT amostra_midia_id_amostra_fkey FOREIGN KEY (id_amostra) REFERENCES public.amostra(id_amostra);


--
-- Name: expedicao expedicao_id_municipio_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expedicao
    ADD CONSTRAINT expedicao_id_municipio_fkey FOREIGN KEY (id_municipio) REFERENCES public.municipio(id_municipio);


--
-- Name: expedicao expedicao_id_vegetacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expedicao
    ADD CONSTRAINT expedicao_id_vegetacao_fkey FOREIGN KEY (id_vegetacao) REFERENCES public.tipo_vegetacao(id_vegetacao);


--
-- Name: expedicao_midia expedicao_midia_id_expedicao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expedicao_midia
    ADD CONSTRAINT expedicao_midia_id_expedicao_fkey FOREIGN KEY (id_expedicao) REFERENCES public.expedicao(id_expedicao);


--
-- Name: item_dado item_dado_id_dadoeco_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_dado
    ADD CONSTRAINT item_dado_id_dadoeco_fkey FOREIGN KEY (id_dadoeco) REFERENCES public.dado_ecologico(id_dadoeco);


--
-- Name: municipio municipio_id_estado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.municipio
    ADD CONSTRAINT municipio_id_estado_fkey FOREIGN KEY (id_estado) REFERENCES public.estado(id_estado);


--
-- Name: planta_dado planta_dado_id_dadoeco_id_itemdado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.planta_dado
    ADD CONSTRAINT planta_dado_id_dadoeco_id_itemdado_fkey FOREIGN KEY (id_dadoeco, id_itemdado) REFERENCES public.item_dado(id_dadoeco, id_itemdado);


--
-- Name: planta_dado planta_dado_id_planta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.planta_dado
    ADD CONSTRAINT planta_dado_id_planta_fkey FOREIGN KEY (id_planta) REFERENCES public.planta(id_planta);


--
-- PostgreSQL database dump complete
--

