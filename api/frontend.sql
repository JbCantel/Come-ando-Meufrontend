-- ---------------------------------
-- FrontEnd - Banco de dados
-- By Cantel
-- MIT License
-- 
-- Modela o banco de dados da API do aplicativo.
-- ---------------------------------

-- Apaga o banco de dados caso ele exista.
-- IMPORTANTE! Só faça isso em momento de desenvolvimento.
-- Nunca use este código em produção.
 DROP DATABASE IF EXISTS frontend;

 -- Cria o banco de dados com caracteres utf8 e buscas case-isensitive.
 CREATE DATABASE frontend CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

-- Seleciona o banco de dados para próximas interações.
USE frontend;

-- Cria tabela dos contatos → contacts.
CREATE TABLE contacts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status ENUM ( 'received', 'readed', 'responded', 'deleted' ) DEFAULT 'received'
);


