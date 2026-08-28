# Aula 02 — Normalização e Passagem ao Modelo Lógico Relacional

**Disciplina:** Banco de Dados — Relacional (IBD015)  
**Professor:** Ronan Adriel Zenatti  
**Instituição:** Fatec Jahu — DSM (2º Semestre/2026)

---

## 🎯 Visão Geral da Aula
A aula abordou o processo de normalização de bancos de dados relacionais e as regras de transição do Modelo Entidade-Relacionamento (MER) para o Modelo Lógico Relacional. O foco principal consistiu em identificar falhas de modelagem que geram redundância e anomalias operacionais, aplicando as três primeiras Formas Normais (1FN, 2FN e 3FN) e praticando com dados reais por meio do exercício da Pokédex.

---

## 🔑 Dependências Funcionais

Uma **dependência funcional** ocorre quando o valor de um atributo determina de forma única o valor de outro (exemplo: $CPF \rightarrow Nome$).

* **Dependência Parcial:** Ocorre quando um atributo depende apenas de uma parte de uma chave primária composta.
  * *Exemplo:* Na tabela `ItemPedido(pedido_id, produto_id)`, a `quantidade` depende da chave inteira, mas o `preco_unitario` depende apenas de `produto_id`.
* **Dependência Transitiva:** Ocorre quando um atributo depende de outro atributo que não é chave primária (dependência indireta ou via chave estrangeira).
  * *Exemplo:* Em uma tabela de inscrições com `cpf`, `disciplina_id` e `nome_disciplina`, o `nome_disciplina` depende de `disciplina_id`, e não do `cpf` do aluno.

---

## 📐 As Três Formas Normais (1FN, 2FN, 3FN)

O objetivo central da normalização é eliminar anomalias de inserção, alteração e exclusão, além de reduzir redundâncias.

| Forma Normal | Pré-requisito | Regra Principal | Solução Prática |
| :--- | :--- | :--- | :--- |
| **1FN** | Nenhum | Atributos devem ser atômicos (sem campos multivalorados ou repetições). | Criar uma nova tabela para atributos multivalorados (ex.: tabela `Telefones`). Evitar colunas como `tel1`, `tel2`. |
| **2FN** | Estar na 1FN | Atributos não-chave devem depender da totalidade da chave primária (sem dependência parcial). | Separar os atributos que dependem apenas de parte da chave composta em uma nova tabela. |
| **3FN** | Estar na 2FN | Não pode haver dependências transitivas (atributos não-chave dependendo de outros não-chave). | Mover dados repetidos/indiretos para tabelas próprias e manter apenas a chave estrangeira. |

---

## 💡 Discussões e Práticas Recomendadas pelo Professor

* **Chave Composta vs. Chave Surrogate (ID Próprio):** Chaves compostas garantem unicidade estrutural no banco, mas chaves *surrogate* (IDs autoincrementais) simplificam o desenvolvimento e permitem entradas duplicadas do mesmo item caso a regra de negócio exija.
* **Regras de Negócio x Banco de Dados:** A integridade estrutural é mantida pelo banco de dados, enquanto certas regras operacionais e de interface devem ser tratadas pela camada de aplicação.
* **Modelagem Prática:** A normalização exige equilíbrio. A aplicação rígida da norma sem avaliar o contexto do usuário pode gerar sistemas excessivamente fragmentados.

---

## 🎮 Exercício Prático em Sala: Modelagem da Pokédex

* **Objetivo:** Fazer engenharia reversa do modelo de dados a partir das informações visuais públicas do site da Pokédex.
* **Formato:** Trabalho em duplas.
* **Diretrizes:**
  * Utilizar estritamente os dados visíveis na interface do site (sem aplicar conhecimento prévio sobre a franquia Pokémon).
  * Mapear atributos multivalorados (ex.: tipos, fraquezas) e separar as entidades aplicando 1FN, 2FN e 3FN.
  * Definir chaves primárias e relacionamentos adequados para suportar a estrutura visual exibida.

---

## 🔄 Passagem do MER ao Modelo Lógico Relacional

1. **Entidades:** Tornam-se tabelas no modelo lógico.
2. **Relacionamentos 1:N:** A chave primária do lado "1" torna-se chave estrangeira (FK) na tabela do lado "N".
3. **Relacionamentos N:M:** Transforma-se em uma nova tabela intermediária contendo as chaves estrangeiras das duas tabelas originais (formando uma chave composta ou utilizando chave *surrogate*).
4. **Relacionamentos 1:1:** A chave estrangeira é inserida na tabela que fizer mais sentido operacional ou onde a participação for obrigatória.
5. **Atributos Multivalorados:** Convertidos em uma nova tabela relacionada por chave estrangeira.
