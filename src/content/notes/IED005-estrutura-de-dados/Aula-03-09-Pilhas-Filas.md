# Aula-03-09-Pilhas-Filas.md

# Resumo da Aula: Pilhas e Filas (Estruturas de Dados)

---

## 1. Pilhas (Stack - LIFO)

### Conceito
Uma **Pilha** é uma estrutura de dados linear regida pelo princípio **LIFO** (*Last In, First Out* — "O último a entrar é o primeiro a sair"). Todas as inserções e remoções acontecem exclusivamente na mesma extremidade, chamada de **topo**.

### Exemplos do Cotidiano e Aplicação Real
* **Exemplo 1 (Cotidiano):** Pilha de pratos para lavar na pia ou um monte de cartas de baralho. O último item colocado no topo é obrigatoriamente o primeiro a ser retirado.
* **Exemplo 2 (Cotidiano):** Pilha de roupas dobradas em uma gaveta. A última peça colocada por cima é a primeira a ser pega ao se vestir.
* **Onde é muito utilizado:** 
  1. No comando **"Desfazer" (Ctrl + Z)** de editores de texto e imagem.
  2. No **histórico de navegação** do navegador web (botão "Voltar").
  3. Na **Call Stack (Pilha de Execução)** de compiladores/interpretadores de linguagens de programação para controlar chamadas de funções e variáveis de memória.

---

### Código Comentado Passo a Passo (JavaScript)

```javascript
// Criamos a classe que gerencia e representa a estrutura de dados Pilha
class MinhaPilha {
    constructor() {
        // Criamos um array interno vazio para armazenar os dados na memória
        this.itens = [];
    }

    // Adiciona um novo elemento no topo da pilha
    Adicionar(elemento) {
        this.itens.push(elemento); // .push() insere o elemento sempre na última posição (topo)
    }

    // Remove e retorna o elemento que está no topo
    Remover() {
        if (this.estaVazia()) {
            return "A pilha está vazia!";
        }
        return this.itens.pop(); // .pop() retira e devolve o último elemento do array
    }

    // Consulta qual elemento está no topo sem alterá-lo
    Topo() {
        if (this.estaVazia()) {
            return "A pilha está vazia!";
        }
        return this.itens[this.itens.length - 1]; // Retorna a última posição acessível do array
    }

    // Checa se a pilha está sem elementos
    estaVazia() {
        return this.itens.length === 0; // Retorna true se estiver vazia ou false se contiver itens
    }
}

// ===================================================
// EXECUÇÃO NO MUNDO REAL: Histórico do Navegador Web
// ===================================================

const historicoNavegador = new MinhaPilha();

// 1. Usuário acessa 3 páginas sequencialmente
historicoNavegador.Adicionar("google.com");
historicoNavegador.Adicionar("github.com");
historicoNavegador.Adicionar("stackoverflow.com");

// 2. Consulta qual página está sendo exibida atualmente
console.log("Página atual:", historicoNavegador.Topo());
// SAÍDA NO CONSOLE: Página atual: stackoverflow.com

// 3. Usuário clica no botão "Voltar" do navegador
const paginaFechada = historicoNavegador.Remover();
console.log("Fechando página:", paginaFechada);
// SAÍDA NO CONSOLE: Fechando página: stackoverflow.com

// 4. A página do topo passa a ser a anterior da sequência
console.log("Nova página ativa:", historicoNavegador.Topo());
// SAÍDA NO CONSOLE: Nova página ativa: github.com
```

---

## 2. Filas (Queue - FIFO)

### Conceito
Uma **Fila** é uma estrutura de dados linear regida pelo princípio **FIFO** (*First In, First Out* — "O primeiro a entrar é o primeiro a sair"). Novos itens entram pelo **final** da fila e são removidos/processados pelo **início**.

### Exemplos do Cotidiano e Aplicação Real
* **Exemplo 1 (Cotidiano):** Fila do caixa de supermercado ou fila para entrar no ônibus. Quem chega primeiro é atendido antes.
* **Exemplo 2 (Cotidiano):** Drive-thru de um restaurante fast food. O primeiro carro a fazer o pedido é o primeiro a receber a refeição na janela.
* **Onde é muito utilizado:**
  1. Em **filas de impressão** de documentos compartilhadas em rede.
  2. Em **sistemas de mensageria assíncrona** em microsserviços (ex: RabbitMQ, Apache Kafka, AWS SQS).
  3. No **escalonamento de processos em Sistemas Operacionais** para decidir qual tarefa usará a CPU primeiro.

---

### Código Comentado Passo a Passo (JavaScript)

```javascript
// Criamos a classe que gerencia e representa a estrutura de dados Fila
class MinhaFila {
    constructor() {
        // Criamos um array interno vazio para armazenar os itens da fila
        this.itens = [];
    }

    // Adiciona um elemento ao final da fila (Enfileirar)
    enqueue(elemento) {
        this.itens.push(elemento); // .push() adiciona o item ao final da fila
    }

    // Remove e retorna o primeiro elemento da fila (Desenfileirar)
    dequeue() {
        if (this.estaVazia()) {
            return "A fila está vazia!";
        }
        return this.itens.shift(); // .shift() remove e devolve o item do início (posição 0)
    }

    // Consulta qual é o primeiro elemento da fila sem removê-lo
    primeiro() {
        if (this.estaVazia()) {
            return "A fila está vazia!";
        }
        return this.itens[0]; // Retorna a posição inicial do array
    }

    // Checa se a fila está vazia
    estaVazia() {
        return this.itens.length === 0; // Retorna true se estiver sem elementos
    }
}

// ===================================================
// EXECUÇÃO NO MUNDO REAL: Fila de Impressão de Documentos
// ===================================================

const impressoraEscritorio = new MinhaFila();

// 1. Três funcionários enviam documentos para impressão
impressoraEscritorio.enqueue("Relatorio_Financeiro.pdf");
impressoraEscritorio.enqueue("Contrato_Admissao.docx");
impressoraEscritorio.enqueue("Apresentacao_Vendas.pptx");

// 2. Impressora checa qual é o primeiro documento que chegou
console.log("Próximo documento a imprimir:", impressoraEscritorio.primeiro());
// SAÍDA NO CONSOLE: Próximo documento a imprimir: Relatorio_Financeiro.pdf

// 3. Documento é impresso e sai da fila de espera
const documentoImpresso = impressoraEscritorio.dequeue();
console.log("Documento concluído:", documentoImpresso);
// SAÍDA NO CONSOLE: Documento concluído: Relatorio_Financeiro.pdf

// 4. Próximo documento da ordem assume o início da fila
console.log("Próximo da fila:", impressoraEscritorio.primeiro());
// SAÍDA NO CONSOLE: Próximo da fila: Contrato_Admissao.docx
```
