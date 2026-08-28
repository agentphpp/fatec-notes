# Resumo da Aula 02 — Normalização e Passagem ao Modelo Lógico Relacional

**Disciplina:** Banco de Dados — Relacional (IBD015)  
**Professor:** Ronan Adriel Zenatti  
**Instituição:** Fatec Jahu — DSM (2º Semestre/2026)  

---

## 🎯 1. Visão Geral e Objetivos

Nesta aula foi abordado o processo analítico de **normalização** em bancos de dados relacionais e a **transição do Modelo Entidade-Relacionamento (MER)** para o **Modelo Lógico Relacional**.

### Principais Objetivos:
1. **Identificar e eliminar anomalias operacionais** (inserção, alteração/atualização e exclusão).
2. **Dominar Dependências Funcionais** (parciais e transitivas).
3. **Aplicar as três primeiras Formas Normais (1FN, 2FN e 3FN)**.
4. **Mapear regras de passagem do MER para o Modelo Lógico**.
5. **Praticar com dados reais** via engenharia reversa da Pokédex.

---

## ⚠️ 2. O Problema: Anomalias de Banco Desnormalizado

Quando uma tabela não está normalizada, surgem três falhas operacionais clássicas:

* **Anomalia de Inserção:** Impossibilidade de cadastrar um dado sem inventar um registro fictício (ex.: cadastrar um produto novo sem que nenhum pedido tenha sido feito ainda).
* **Anomalia de Atualização:** Risco de inconsistência ao alterar um dado repetido em múltiplos locais (ex.: atualizar o endereço do cliente e esquecer algumas linhas).
* **Anomalia de Exclusão:** Perda não intencional de dados ao deletar um registro associado (ex.: cancelar o único pedido de um cliente e apagar todo o cadastro dele).

---

## 🔑 3. Dependências Funcionais (DF)

Conceito fundamentado em álgebra relacional: $A 
ightarrow B$ ("A determina B") significa que, conhecido o valor de **A**, existe um único valor correspondente para **B**.

* **Dependência Parcial:** Ocorre quando um atributo depende apenas de **parte** de uma chave primária composta (viola a **2FN**).
  * *Exemplo:* Em `ItemPedido(pedido_id, produto_id)`, a `quantidade` depende de ambos os IDs, mas `preco_unitario` e `nome_produto` dependem apenas de `produto_id`.
* **Dependência Transitiva:** Ocorre quando um atributo depende de outro atributo que **não é chave primária** (viola a **3FN**).
  * *Exemplo:* Em `Inscricao(cpf, disciplina_id, nome_disciplina)`, o `nome_disciplina` depende de `disciplina_id`, que por sua vez depende do `cpf`.

---

## 📐 4. As Três Formas Normais (1FN, 2FN, 3FN)

| Forma Normal | Pré-requisito | Regra Principal | Solução Prática / O que Elimina |
| :--- | :--- | :--- | :--- |
| **1FN** | Nenhum | Atributos devem ser **atômicos** (sem campos multivalorados ou grupos repetidos/colunas numeradas). | Extrair multivalorados para nova tabela (ex.: `Telefones`). Eliminar colunas como `tel1`, `tel2`. |
| **2FN** | Estar na 1FN | Atributos não-chave devem depender da **totalidade** da chave primária composta. | Mover atributos com dependência parcial para uma nova tabela própria (ex.: `Produtos`). |
| **3FN** | Estar na 2FN | **Sem dependências transitivas** (atributo não-chave dependendo de outro não-chave). | Extrair atributos indiretos para tabela própria e manter apenas a Chave Estrangeira (FK). |

---

## 🔄 5. Passagem do MER ao Modelo Lógico Relacional

Regras determinísticas para conversão do diagrama conceitual para o modelo lógico:

1. **Entidades:** Convertidas diretamente em tabelas.
2. **Relacionamento 1:1:** A FK vai para o lado de **participação parcial** (mínimo 0) com restrição `UNIQUE` (evita linhas nulas e garante cardinalidade 1:1).
3. **Relacionamento 1:N:** A chave primária do lado **1** vira Chave Estrangeira (FK) na tabela do lado **N**.
4. **Relacionamento N:M:** Gera uma **tabela intermediária (associativa)** cuja PK é composta pelas FKs das duas tabelas originais, além de guardar os atributos do próprio relacionamento (ex.: `quantidade`, `nota`).
5. **Entidade Fraca:** Tabela com PK composta contendo a FK da entidade forte + sua chave parcial.
6. **Atributos Multivalorados:** Convertidos em nova tabela relacionada por FK.

---

## 💡 6. Discussões Téporas & Boas Práticas de Sala

* **Chave Substituta (*Surrogate Key*) vs. Chave Natural:**
  * **Chave Natural** (ex.: CPF, Matrícula, CNPJ) pode mudar no mundo real, é mais lenta para indexar e espalha dados sensíveis (LGPD).
  * **Chave Substituta (`id_tabela`)** é imutável, leve (`BIGINT`), rápida para índices e isola dados sensíveis.
  * **Padrão adotado na disciplina:** PK é sempre `id_tabela` (singular). Chaves naturais viram atributos comuns protegidos por `UNIQUE`.
* **Convenção de Nomenclatura SQL:**
  * **PK:** `id_tabela` (ex.: `id_cliente`).
  * **FK:** `tabela_id` (ex.: `cliente_id`).
* **Regras de Negócio vs. Banco de Dados:** O banco garante a integridade estrutural e tipagem, enquanto certas regras operacionais flexíveis devem ser geridas pela aplicação.

---

## 🎮 7. Prática em Sala: Exercício da Pokédex

* **Atividade:** Engenharia reversa do modelo de dados a partir das telas e informações públicas do site da Pokédex oficial.
* **Formato:** Trabalho em duplas.
* **Diretrizes:**
  * Utilizar estritamente os dados visíveis na interface (sem conhecimento prévio da franquia).
  * Tratar atributos multivalorados (ex.: tipos, fraquezas, habilidades).
  * Aplicar a normalização (1FN $
ightarrow$ 2FN $
ightarrow$ 3FN) e definir relacionamentos e PKs/FKs corretas.

---

## 🔑 Termos-Chave & Definições

* **Valor Atômico:** Dado indivisível (um único valor por célula/campo).
* **Tabela Associativa:** Tabela criada para resolver relacionamentos N:M.
* **Chave Composta:** PK constituída por duas ou mais colunas.
* **Chave Substituta (*Surrogate Key*):** ID numérico sequencial gerado pelo sistema sem valor de negócio.
