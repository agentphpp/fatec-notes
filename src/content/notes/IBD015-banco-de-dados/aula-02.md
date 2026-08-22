

## Overview
- Aula sobre modelagem de dados focada em cardinalidade, relacionamentos e convenções de nomenclatura.
- Objetivo: entender regras de negócio, tipos de relacionamentos (1:1, 1:N, N:N), generalização/especialização e boas práticas para nomes de tabelas e campos.
- Atividade prática: desenhar diagramas ER usando ferramentas (Mermaid/diagrama.io / mirrordraw/mermides mencionados).

## Regras de Negócio
- Regras de negócio definem o que o usuário quer versus o que deve ser feito.
  - Exemplo: usuário quer sonegar impostos; sistema não pode permitir.
- Implementação de regras impacta responsabilidade legal do desenvolvedor.

## Cardinalidade e Relacionamentos
- Cardinalidade define o relacionamento entre duas tabelas, lido da esquerda para a direita.
  - Mínimo sempre à esquerda; máximo sempre à direita.
- Símbolos comuns:
  - Bolinha = mínimo 0
  - Riscado (|) = mínimo 1 (ou máximo 1, dependendo da posição)
  - Pé-de-galinha = muitos (N)
- Tipos:
  - 1:1 — cada registro de A corresponde a um registro de B.
  - 1:N — o caso mais comum; por exemplo, cliente -> compras.
  - N:N — requer tabela intermediária; não pode permanecer N:N sem normalização.
- Auto-relacionamento:
  - Quando uma tabela referencia ela mesma (ex.: funcionário -> supervisor).
  - Pode indicar hierarquia ou necessidade de tabela auxiliar para relações muitos-para-muitos.

## Exemplos Práticos de Cardinalidade
- Cliente x Compra:
  - Cliente pode ter compras: mínimo 0, máximo N.
  - Compra pertence a quantos clientes? Normalmente 1 (a menos que negócio permita co-propriedade).
- Nota Fiscal x Produto x Item da Nota:
  - Nota fiscal precisa ter pelo menos 1 produto.
  - Produto pode aparecer em zero ou várias notas (mínimo 0, máximo N).
  - Relação N:N entre Nota e Produto gera tabela intermediária (itens da nota).
- Escola (Aluno, Armário):
  - Aluno pode ter 0 armário mínimo.
  - Armário pode pertencer a 0 ou 1 aluno (depende da regra da escola).
- Compensação Ambiental (empresa, projeto, auditor):
  - Empresa compra compensação; compensação ligada a projeto e auditor.
  - Compensação pode ser validada por auditores diferentes em datas diferentes.
  - Cada caso exige análise da cardinalidade entre as quatro entidades.

## Identificação de Entidades e Atributos
- Cada formulário/Documento vira uma entidade (ex.: nota fiscal → entidade NotaFiscal).
- Identificar atributos que se repetem entre entidades para generalizar.
- Itens de uma nota combinam dados de produto (nome, preço unitário) e dados do item (quantidade, subtotal).

## Generalização e Especialização
- Quando várias tabelas compartilham muitos campos, criar tabela genérica "Pessoa" e especializações:
  - Ex.: Pessoa (geral) → Aluno (específico) e Professor (específico).
  - Campos comuns ficam em Pessoa; campos específicos vão nas tabelas especializadas.
- Benefícios: economia de espaço, redução de repetição, coerência.
- Participação:
  - Obrigatória (mínimo 1) ou parcial (mínimo 0) conforme regra do negócio.

## Tipos e Consistência de Dados
- Definir tipo de campo corretamente evita erros (número vs texto, tipagem fraca/dinâmica).
- Exemplos: JavaScript pode concatenar strings em operações aritméticas se tipos não forem controlados.
- No banco, escolher tipos adequados (INTEGER, VARCHAR, DATE, etc.) para evitar falhas no sistema.

## Convenções de Nomenclatura (padronização)
- Importância de padronizar nomes de tabelas e campos para facilitar colaboração.
- Regras adotadas:
  - Nome da tabela no singular (ex.: produto, cliente).
  - Chave primária: id_<nome_tabela_singular> (ex.: id_produto).
  - Chave estrangeira: <nome_tabela_referenciada_singular>_id (ex.: cliente_id).
  - Tudo em letras minúsculas; use underline para separar palavras.
- Quando uma tabela referencia a mesma tabela duas vezes, use nome semântico para FK (ex.: supervisor_id, vendedor_id).
- Benefício: leitura e manutenção mais rápidas entre equipes.

## Boas Práticas de Modelagem
- Normalizar relacionamentos N:N criando tabelas intermediárias.
- Não criar ligações diretas redundantes se exista caminho via outras tabelas.
- Documentar diagramas ER e manter convenções para integração futura (SQL, APIs).
- Ajustar o modelo conforme a regra de negócio local (ex.: co-propriedade de terrenos).

## Ferramentas e Exercícios Práticos
- Ferramentas sugeridas:
  - diagrama.io (BD diagrama / draw.io)
  - Ferramentas que exportam esquema em texto (útil para transição para SQL).
- Atividade proposta: desenhar diagramas com entidades, cardinalidades e aplicar convenções de nomenclatura.
- Checklist para prática:
  - Identificar entidades e atributos repetidos.
  - Definir cardinalidades (mínimo/máximo) em cada lado.
  - Normalizar N:N criando tabela intermediária.
  - Aplicar nomes padronizados para tabelas e chaves.

## Key Terms And Definitions
| **Termo** | **Definição** |
|---|---|
| **Cardinalidade** | Define mínimo e máximo do relacionamento entre duas entidades. |
| **1:1** | Relacionamento um-para-um entre registros de duas tabelas. |
| **1:N** | Um registro de A pode relacionar-se com muitos de B. |
| **N:N** | Muitos-para-muitos; requer tabela intermediária. |
| **Auto-relacionamento** | Quando tabela referencia a si mesma (ex.: funcionário → supervisor). |
| **Generalização** | Unir campos comuns em entidade pai (ex.: Pessoa). |
| **Especialização** | Tabelas filhas com atributos específicos (ex.: Aluno, Professor). |
| **PK (chave primária)** | id_<tabela_singular>, identifica registro unicamente. |
| **FK (chave estrangeira)** | <tabela_referenciada_singular>_id, referencia PK de outra tabela. |

## Action Items / Próximos Passos
- Praticar exercícios de cardinalidade fornecidos pelo professor.
- Montar diagramas ER aplicando convenções de nomenclatura e normalização.
  - Usar diagrama.io ou ferramenta similar; salvar o código/texto do diagrama.
- Na próxima aula (Aula 3): passar do diagrama para escrita de scripts SQL.
- Revisar tipos de dados e validar campos antes de implementar tabelas no SGBD.

## Observações Finais
- Cada caso de negócio pode exigir soluções específicas; não existe "receita única".
- Padronização facilita trabalho em equipe e manutenção do banco de dados.
- Revisar sempre o modelo à medida que as regras de negócio evoluem.