CREATE TABLE estado (
	id_estado CHAR(2) PRIMARY KEY,
	nm_estado VARCHAR(40) NOT NULL
);

CREATE TABLE municipio (
    id_municipio NUMERIC(2) PRIMARY KEY,
    nm_municipio VARCHAR(40) NOT NULL,
    id_estado CHAR(2) NOT NULL,
    FOREIGN KEY (id_estado) REFERENCES estado(id_estado)
);

CREATE TABLE tipo_vegetacao (
	id_vegetacao NUMERIC(5) PRIMARY KEY,
	nm_vegetacao VARCHAR(40) NOT NULL
);

CREATE TABLE tipo_relevo (
	id_relevo NUMERIC(5) PRIMARY KEY,
	nm_relevo VARCHAR(40) NOT NULL
);

CREATE TABLE tipo_solo (
	id_solo NUMERIC(5) PRIMARY KEY,
	nm_solo VARCHAR(40) NOT NULL
);

CREATE TABLE expedicao (
	id_expedicao NUMERIC(7) PRIMARY KEY,
	dt_expedicao DATE NOT NULL,
	id_municipio NUMERIC(7) NOT NULL,
	id_vegetacao NUMERIC(5) NULL,
	FOREIGN KEY (id_municipio) REFERENCES municipio(id_municipio), 
	FOREIGN KEY (id_vegetacao) REFERENCES tipo_vegetacao(id_vegetacao)
);

CREATE TABLE expedicao_midia (
    id_expedicaomidia NUMERIC(9) PRIMARY KEY,
    id_expedicao NUMERIC(9),
    tp_arquivo VARCHAR(50) NOT NULL,
    arquivo BYTEA NOT NULL,                           
    descricao TEXT NULL,                          
    data_upload TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (id_expedicao) REFERENCES expedicao(id_expedicao)
);

CREATE TABLE dado_ecologico (
    id_dadoeco NUMERIC(2) PRIMARY KEY,
    ds_dadoeco VARCHAR(50) NOT NULL
);
    
CREATE TABLE item_dado (
    id_dadoeco NUMERIC(2),
    id_itemdado NUMERIC(2),
    ds_itemdado VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_dadoeco, id_itemdado),
    FOREIGN KEY (id_dadoeco) REFERENCES dado_ecologico(id_dadoeco)
);

CREATE TABLE planta (
	id_planta NUMERIC(9) PRIMARY KEY,
	nm_vulgar VARCHAR(255) NOT NULL,
	nm_cientifico VARCHAR(255)NOT NULL,
	nm_familia VARCHAR(100) NOT NULL
);

CREATE TABLE planta_dado (
    id_planta NUMERIC(9),
    id_dadoeco NUMERIC(2),
    id_itemdado NUMERIC(2),
    ds_obs VARCHAR(255),
    PRIMARY KEY (id_planta, id_dadoeco, id_itemdado),
    FOREIGN KEY (id_planta) REFERENCES planta(id_planta),
    FOREIGN KEY (id_dadoeco, id_itemdado) REFERENCES item_dado(id_dadoeco, id_itemdado)
);

CREATE TABLE amostra (
	id_amostra NUMERIC(9) PRIMARY KEY,
	id_planta NUMERIC(9), 
	id_expedicao NUMERIC(7),
	id_relevo NUMERIC(5),
	id_solo NUMERIC(5),
	nm_coletor VARCHAR (160) NOT NULL,
	nr_altitude NUMERIC(6,2) NULL, 
	nr_longitude NUMERIC(9,6) NULL,
	nr_latitude NUMERIC(9,6) NULL,
	nr_altura NUMERIC(5,2) NULL,
	nr_DAP NUMERIC(5,2) NULL,
	nr_CAP NUMERIC(5,2) NULL,
	ds_exsudado VARCHAR(100) NULL,
	ds_obscomplement VARCHAR(400) NULL,
	FOREIGN KEY (id_planta) REFERENCES planta(id_planta),
	FOREIGN KEY (id_expedicao) REFERENCES expedicao(id_expedicao),
	FOREIGN KEY (id_relevo) REFERENCES tipo_relevo(id_relevo),
	FOREIGN KEY (id_solo) REFERENCES tipo_solo(id_solo)
);

CREATE TABLE amostra_dado (
    id_amostra NUMERIC(9),
    id_dadoeco NUMERIC(2),
    id_itemdado NUMERIC(2),
	ds_cor VARCHAR(255) NULL,
    ds_obs VARCHAR(255)	NULL,
    PRIMARY KEY (id_amostra, id_dadoeco, id_itemdado),
    FOREIGN KEY (id_amostra) REFERENCES amostra(id_amostra),
    FOREIGN KEY (id_dadoeco, id_itemdado) REFERENCES item_dado(id_dadoeco, id_itemdado)
);

CREATE TABLE amostra_midia (
    id_amostramidia NUMERIC(9) PRIMARY KEY,
    id_amostra NUMERIC(9),
    tp_arquivo VARCHAR(50) NOT NULL,
    arquivo BYTEA NOT NULL,                           
    descricao TEXT NULL,                          
    data_upload TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (id_amostra) REFERENCES amostra(id_amostra)
);


-- INSERTS

INSERT INTO estado (id_estado, nm_estado) VALUES
('AC', 'Acre'),
('AL', 'Alagoas'),
('AP', 'Amapá'),
('AM', 'Amazonas'),
('BA', 'Bahia'),
('CE', 'Ceará'),
('DF', 'Distrito Federal'),
('ES', 'Espírito Santo'),
('GO', 'Goiás'),
('MA', 'Maranhão'),
('MT', 'Mato Grosso'),
('MS', 'Mato Grosso do Sul'),
('MG', 'Minas Gerais'),
('PA', 'Pará'),
('PB', 'Paraíba'),
('PR', 'Paraná'),
('PE', 'Pernambuco'),
('PI', 'Piauí'),
('RJ', 'Rio de Janeiro'),
('RN', 'Rio Grande do Norte'),
('RS', 'Rio Grande do Sul'),
('RO', 'Rondônia'),
('RR', 'Roraima'),
('SC', 'Santa Catarina'),
('SP', 'São Paulo'),
('SE', 'Sergipe'),
('TO', 'Tocantins');

INSERT INTO dado_ecologico (id_dadoeco, ds_dadoeco) VALUES
(1, 'Luminosidade'),
(2, 'Substrato'),
(3, 'Associações'),
(4, 'Hábito'),
(5, 'Tronco'),
(6, 'Folhas'),
(7, 'Frutos'),
(8, 'Flores');
--Luminosidade
INSERT INTO item_dado (id_dadoeco, id_itemdado, ds_itemdado) VALUES
(1, 1, 'Heliófita'),
(1, 2, 'Semi-ciófila'),
(1, 3, 'Ciófila');
--Substrato
(2, 1, 'Rupícola'),
(2, 2, 'Ripária'),
(2, 3, 'Palustre'),
(2, 4, 'Hidrófila'),
(2, 5, 'Psamófila'),
(2, 6, 'Reófila'),
(2, 7, 'Terrícola'),
--Associacoes
(3, 1, 'Epífita'),
(3, 2, 'Parasita'),
(3, 3, 'Hemi-parasita'),
(3, 4, 'Saprófita'),
--Hábito
(4, 1, 'Árvore'),
(4, 2, 'Arvoretas'),
(4, 3, 'Arbusto'),
(4, 4, 'Subarbusto'),
(4, 5, 'Erva'),
(4, 6, 'Ereta'),
(4, 7, 'Decumbente'),
(4, 8, 'Escandente'),
(4, 9, 'Cespitosa'),
(4, 10, 'Liana'),
(4, 11, 'Prostrada'),
(4, 12, 'Repitante'),
(4, 13, 'Trepadeira com gavinhas'),
(4, 14, 'Trepadeira volúvel'),
--Tronco
(5, 1, 'Árvores'),
(5, 2, 'Arvoretas'),
(5, 3, 'Arbustos'),
(5, 4, 'Casca'),
(5, 5, 'Lisa'),
(5, 6, 'Escamosa'),
(5, 7, 'Esfoliante'),
(5, 8, 'Estriada'),
(5, 9, 'Fissurada'),
(5, 10, 'Gretada'),
(5, 11, 'Suberosa'),
(5, 12, 'Verrucosa'),
--Folhas
(6, 1, 'Membranáceas'),
(6, 2, 'Cartáceas'),
(6, 3, 'Coriáceas'),
(6, 4, 'Crassas'),
--Frutos
(7, 1, 'Carnoso'),
(7, 2, 'Seco'),
(7, 3, 'Deiscentes'),
(7, 4, 'Indeiscentes'),
--Flores
(8, 1, 'Cor Cálice'),
(8, 2, 'Cor Corola');
