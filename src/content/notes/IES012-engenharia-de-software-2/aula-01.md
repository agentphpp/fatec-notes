



## Overview
- Aula sobre análise e desenvolvimento de software, com foco em requisitos, modelagem e processo de desenvolvimento.
- Objetivo: entender escopo, comunicar com usuários, planejar sprints, modelar banco de dados e escrever histórias de usuário e critérios de aceitação.

## Processo de Desenvolvimento de Software
- Etapas comuns: comunicação, definição/analise, planejamento, modelagem, construção (codificação), implantação, manutenção.
- Modelos de processo (ex.: Scrum) padronizam atividades e reduzem erros.
- Benefícios de usar um modelo: organização, estimativas de tempo, custo e qualidade, integração entre equipes.

| **Etapa** | **Descrição** |
|---|---|
| Comunicação | Entrevistas e entendimento do cliente; perguntas claras geram boas respostas. |
| Definição/Análise | Levantamento de requisitos e delimitação do escopo. |
| Planejamento | Cronograma, sprints, acompanhamento de tarefas e métricas. |
| Modelagem | Tradução dos requisitos em modelos (casos de uso, diagrama de classes, BD). |
| Construção | Codificação, testes e implementação. |
| Implantação | Entrega do produto e validação/validação dos requisitos. |
| Manutenção | Corretiva, preventiva e adaptativa; ajustes e melhorias pós-implantação. |

## Escopo e Backlog
- Escopo: delimita o que está dentro e fora do sistema neste momento.
- Backlog do produto: lista de requisitos funcionalmente priorizados.
- Sprint backlog: seleção dos itens que serão realizados em um sprint.

## Requisitos: Definição e Importância
- Requisitos descrevem funcionalidades e restrições do sistema.
- Documentar requisitos ajuda a estimar custo, prazo e definir persistência de dados.
- Corrigir erros durante desenvolvimento é mais barato que consertar após implantação.

## Comunicação com o Cliente/Usuário
- Comunicação é básica: emissor e receptor; deve ser clara e assertiva.
- Perguntas bem formuladas geram respostas úteis para definir requisitos.
- Aceitar feedback (inclusive negativo) como forma de melhorar processos e produtos.

## Habilidades Recomendadas
- Agilidade, resiliência, flexibilidade, criatividade e inovação.
- Aceitar feedbacks e adaptar-se às mudanças do mercado e tecnologias.

## Histórias do Usuário (User Stories)
- Estrutura ideal: Papel (quem), Ação (o que), Valor (por que/benefício).
- Deve conter apenas uma ação por história.
- História bem escrita facilita modelagem, casos de uso e criação do banco de dados.

| **Parte** | **Pergunta** | **Exemplo** |
|---|---|---|
| Papel | Quem é o usuário? | Aluno matriculado |
| Ação | O que ele quer fazer? | Visualizar monitorias abertas |
| Valor | Por que/benefício? | Reforçar aprendizado sem conflito de horário |

- Evitar termos genéricos como "usuário"; especificar papel (aluno, monitor, coordenador).
- Cada história deve possuir critérios de aceitação testáveis.

## Critérios de Aceitação e Regras
- Critérios definem quando a história está concluída e funcionante.
- Exemplo de regras em uma história de monitoria:
  - Exibir apenas monitorias das disciplinas em que o aluno está matriculado.
  - Mostrar data, horário, sala e vagas.
  - Impedir agendamento com conflito de horário.
  - Limitar o aluno a no máximo 3 agendamentos simultâneos.
  - Confirmar agendamento por e-mail; vaga liberada se cancelada até 2 horas antes.

## Modelagem e Banco de Dados
- Histórias de usuário auxiliam na identificação de entidades, atributos e relacionamentos.
- Modelos: casos de uso -> diagrama de classes -> modelagem do banco (persistência).
- Persistência e processamento de dados são requisitos essenciais para funcionalidades dinâmicas.

| **Artefato** | **Finalidade** |
|---|---|
| Caso de Uso | Mostra quem faz o quê e suas interações com o sistema. |
| Diagrama de Classes | Define entidades, atributos e relacionamentos para o BD. |
| Banco de Dados | Armazena e recupera informações para funcionalidades do sistema. |

## Manutenção: Tipos e Exemplos
- Corretiva: conserto de falhas.
- Preventiva: ações para evitar problemas futuros.
- Adaptativa: mudanças necessárias por alteração externa (ex.: legislação).
- Evolutiva: inclusão ou remoção de funcionalidades conforme demanda do cliente.

## Atividades Práticas da Aula
- Revisitar requisitos já criados e escolher 3 requisitos de cada equipe.
- Escrever histórias do usuário para cada requisito (papel, ação, valor).
- Definir 3 critérios de aceitação por história.
- Colocar resultados no Trello/board da equipe para acompanhamento.

## Pontos Importantes Para Entregar
- Delimitar claramente o escopo do sistema.
- Documentar requisitos e priorizá-los no backlog.
- Garantir comunicação clara com stakeholders.
- Produzir histórias de usuário bem formuladas e critérios de aceitação testáveis.
- Mapear entidades e atributos necessários para o banco de dados.

## Próximos Passos / Tarefas
- Cada equipe: escolher 3 requisitos persistentes/operacionais.
  - Escrever história do usuário (papel, ação, valor).
  - Definir 3 critérios de aceitação para cada história.
- Atualizar o Trello/comunicação de equipe até a data combinada.
- Preparar modelagem básica do banco conforme as histórias selecionadas.
