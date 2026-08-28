---
title: "Aula 02 – Normalização e Modelo Lógico Relacional"
date: 2026-08-28
tags: ["banco-de-dados", "normalizacao", "modelo-logico", "sql", "mer"]
---



# Resumo da Aula 02 — Normalização e Modelo Lógico Relacional

**Disciplina:** Banco de Dados — Relacional (IBD015)  
**Professor:** Ronan Adriel Zenatti  
**Instituição:** Fatec Jahu — DSM (2º Semestre/2026)  

## Overview
- Aula focada no processo analítico de normalização de dados e na transição do MER (Modelo Entidade-Relacionamento) para o Modelo Lógico Relacional.
- Objetivo: eliminar redundâncias e anomalias operacionais, entender dependências funcionais, aplicar 1FN, 2FN e 3FN, e mapear regras formais de conversão de modelos.

## Anomalias de Banco Desnormalizado
- Estruturas não normalizadas causam falhas operacionais e inconsistências no banco de dados.
- Principais anomalias:
  - Inserção: impossibilidade de cadastrar um dado sem inventar registros fictícios ou nulos.
  - Atualização: risco de inconsistência ao alterar dados duplicados em múltiplos locais.
  - Exclusão: perda acidental de dados ao deletar um registro associado.

## Dependências Funcionais (DF)
- Conceito fundamental: A -> B ("A determina B") indica que o valor de A define unicamente o valor de B.
- Dependência Parcial: atributo depende apenas de parte de uma chave primária composta (viola a 2FN).
- Dependência Transitiva: atributo depende de outro atributo não-chave (viola a 3FN).

## As Três Formas Normais (1FN, 2FN, 3FN)

| **Forma Normal** | **Regra Principal** | **Solução Prática** |
|---|---|---|
| 1FN | Atributos devem ser atômicos e indivisíveis. | Extrair multivalorados ou grupos repetidos para nova tabela. |
| 2FN | Estar na 1FN; sem dependências parciais da chave composta. | Mover atributos dependentes de parte da chave para nova tabela. |
| 3FN | Estar na 2FN; sem dependências transitivas entre atributos não-chave. | Extrair atributos indiretos para tabela própria, mantendo apenas a FK. |

## Passagem do MER ao Modelo Lógico
- Regras determinísticas para converter o diagrama conceitual em tabelas e relacionamentos:

| **Elemento MER** | **Regra de Conversão** |
|---|---|
| Entidade | Vira uma tabela própria com sua PK e atributos. |
| Relacionamento 1:1 | FK vai para o lado de participação parcial (mín. 0) com restrição UNIQUE. |
| Relacionamento 1:N | PK do lado 1 vira FK na tabela do lado N. |
| Relacionamento N:M | Gera tabela associativa com PK composta pelas FKs das tabelas originais. |
| Entidade Fraca | Tabela própria com PK composta (FK da entidade forte + chave parcial). |
| Atributo Multivalorado | Gera nova tabela relacionada por FK com a entidade principal. |

## Decisões de Modelagem e Convenções
- Chave Substituta (Surrogate Key) vs. Chave Natural:
  - Chaves naturais (CPF, CNPJ) podem mudar, ocupam mais espaço, deixam índices lentos e expõem dados sensíveis (LGPD).
  - Chaves substitutas (`id_tabela`) são imutáveis, sequenciais (`BIGINT`), otimizam índices e isolam dados pessoais.
  - Padrão da disciplina: PK é sempre `id_tabela` (singular). Dados de negócio usam `UNIQUE`.
- Convenção de nomenclatura SQL:
  - Chave Primária (PK): `id_tabela` (ex.: `id_cliente`).
  - Chave Estrangeira (FK): `tabela_id` (ex.: `cliente_id`).

## Atividade Prática: Exercício Pokédex
- Engenharia reversa do modelo de dados a partir das telas públicas do site oficial da Pokédex.
- Trabalho realizado em duplas focado em extrair o modelo lógico diretamente da interface visual.
- Passos aplicados:
  - Identificar atributos multivalorados (tipos, fraquezas, habilidades).
  - Aplicar normalização (1FN -> 2FN -> 3FN).
  - Definir tabelas, PKs, FKs e cardinalidades.

## Termos-Chave
- Valor Atômico: dado único e indivisível por célula.
- Tabela Associativa: tabela criada para resolver relacionamentos N:M.
- Chave Composta: PK formada pela combinação de duas ou mais colunas.
- Surrogate Key: identificador numérico artificial gerado pelo sistema.
