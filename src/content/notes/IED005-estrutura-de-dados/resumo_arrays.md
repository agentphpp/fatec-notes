# 📊 Métodos Nativos de Array em JavaScript (Pasta: `demo/`)

Este arquivo serve como um resumo prático contendo as explicações e os códigos exatos disponibilizados para a aula de Estrutura de Dados.

---

### 📌 push_pop.js
*   **Conceito:** Manipulação de extremidades de um array (inserção e remoção no início e fim).
*   **Métodos utilizados:**
    *   `push()`: Adiciona elementos ao final do array.
    *   `unshift()`: Adiciona elementos no início do array e retorna o novo comprimento (`length`).
    *   `shift()`: Remove e retorna o **primeiro** elemento do array.
    *   `pop()`: Remove e retorna o **último** elemento do array.

```javascript
let alunos = [];

// Declaração do array de professores.
const professores = [];

// Mostrando que o array está vazio.
console.table(professores);

// Adicionando um professor ao array (no final do array).
professores.push("Anderson");
console.table(professores);

professores.push("Alex");
console.table(professores);

let qnt = professores.unshift("Cida");
console.table(professores);
console.log(qnt);

console.log("---------Remover-----------")

// Retorna o primeiro elemento e o remove. Remove "Cida" do array
let primeiro_item = professores.shift();
console.log(primeiro_item);
console.table(professores);

// Retorna o último elemento e o remove. Remove "Alex" do array.
let ultimo_item = professores.pop();
console.log(ultimo_item);
console.table(professores);
```

---

### 📌 splice.js
*   **Conceito:** Método flexível para remover, substituir ou adicionar novos elementos em qualquer índice específico do array, alterando diretamente o array original.
*   **Parâmetros de `splice(índice, quantidadeDeletar, item1, ...)`:**
    *   `1`: O índice onde a operação começará (posição do "Mar").
    *   `0`: Quantidade de elementos a deletar (nenhum).
    *   `"Fev"`: O elemento a ser inserido naquela posição.

```javascript
const meses = [];
meses.push("Jan");
meses.push("Mar");
meses.push("Abr");

console.table(meses);

// Insere "Fev" na posição 1, sem remover ninguém
meses.splice(1, 0, "Fev");

console.table(meses);
```

---

### 📌 slice.js
*   **Conceito:** Copia ou extrai uma parte/fragmento do array original sem modificá-lo, retornando um novo array.
*   **Parâmetros de `slice(início, fim)`:**
    *   O índice final fornecido **não é incluído** no resultado (corta do índice `início` até `fim - 1`).

```javascript
const primeiro_semestre = [];
primeiro_semestre.push("Algoritmos e Lógica de Programação");
primeiro_semestre.push("Modelagem de Banco de Dados");
primeiro_semestre.push("Design Digital");
primeiro_semestre.push("Engenharia de Software I");
primeiro_semestre.push("Sistemas Operacionais e Redes");
primeiro_semestre.push("Desenvolvimento Web i");

console.table(primeiro_semestre);

// Pega os itens nos índices 1 e 2 (o 3 fica de fora)
let teste = primeiro_semestre.slice(1, 3);
//console.log(teste);
console.table(teste);
```

---

### 📌 concat.js
*   **Conceito:** Junta dois ou mais arrays de forma a gerar uma cópia unificada, sem alterar nenhuma das coleções originais.

```javascript
const array1 = [1, 2];
const array2 = [3, 4];

console.table(array1);

// Concatena array1 com array2 gerando uma nova estrutura
const juntado = array1.concat(array2);

console.table(juntado);
```

---

### 📌 map.js
*   **Conceito:** Percorre cada elemento de um array executando uma função neles, gerando e retornando um **novo** array transformado de igual tamanho.

```javascript
const numeros = [1, 2, 3];

// Abordagem clássica com return explícito
const dobrados = numeros.map( (n) => {
    return n * 2
});

// Sintaxe enxuta usando Arrow Function (retorno implícito)
const dobrados2 = numeros.map(n => n * 2);

console.table(dobrados);
```

---

### 📌 indexOf.js
*   **Conceito:** Procura por um elemento no array e retorna o seu **índice de posicionamento**. Se o elemento não for localizado, o retorno fixo será `-1`.

```javascript
const alunos = ["Otávio", "Cornachia", "Heitor", "Valmnir"];

// "Tiago" não existe no array, logo retornará -1
let retorno = alunos.indexOf("Tiago");

console.log(retorno);
```

---

### 📌 forEach.js
*   **Conceito:** Método de iteração puro. Percorre cada elemento do array e executa um bloco de código (callback) para cada um deles. Diferente do `map`, o `forEach` **não retorna nada** (retorna `undefined`), servindo apenas para causar efeitos visuais ou lógicos (ex: imprimir logs).

```javascript
const alunos = ["Joaquim", "Rampo", "Teixeira", "Danilo"];

// Executa o log personalizado para cada um dos nomes no array
alunos.forEach( elemento => {
    console.log(`Noss querido ${elemento} está estudando`);
});
```

---

## 🚀 Funções de Filtro, Busca e Agregação (Complementares dos Slides)

Os métodos abaixo não alteram o array original e criam novos resultados com base em funções de teste.

### 📌 filter.js
*   **Conceito:** Cria um **novo array** contendo apenas os elementos que passarem na validação lógica fornecida.

```javascript
const idades = [15, 22, 18, 14];

// Filtra apenas quem tem 18 anos ou mais
const maiores = idades.filter(i => i >= 18);

console.table(maiores); // [22, 18]
```

### 📌 find.js
*   **Conceito:** Retorna o **primeiro elemento** do array que satisfizer a condição lógica. Se nenhum item for compatível, retorna `undefined`.

```javascript
const usuarios = [{id: 1, nome: "Ana"}, {id: 2, nome: "Alex"}];

// Busca o primeiro objeto com o nome correspondente
const encontrado = usuarios.find(u => u.nome === "Alex");

console.log(encontrado); // {id: 2, nome: 'Alex'}
```

### 📌 includes.js
*   **Conceito:** Verifica de forma simples se determinado item existe dentro do array, devolvendo uma resposta booleana (`true` ou `false`).

```javascript
const itens = ["caderno", "caneta"];

let temCaneta = itens.includes("caneta");
console.log(temCaneta); // true
```

### 📌 every.js
*   **Conceito:** Valida se **absolutamente todos** os elementos atendem a uma condição. Retorna `true` apenas se nenhum falhar.

```javascript
const notas = [8, 9, 7];

const todosAprovados = notas.every(n => n >= 6);
console.log(todosAprovados); // true
```

### 📌 reduce.js
*   **Conceito:** Reduz toda a lista de elementos do array a um **único valor final acumulado** através de uma função matemática ou de agregação.

```javascript
const precos = [10, 20, 30];

// O "0" indica o valor inicial do acumulador
const total = precos.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(total); // 60
```

### 📌 sort.js
*   **Conceito:** Ordena os itens do próprio array. **Atenção:** Ele modifica a estrutura original diretamente. Para números, exige uma função de comparação `(a, b) => a - b` para evitar ordenações com base em strings Unicode.

```javascript
const letras = ["D", "A", "C"];
letras.sort(); 
console.log(letras); // ['A', 'C', 'D']

const num = [10, 5, 80];
// Ordenação numérica crescente estruturada
num.sort((a, b) => a - b); 

console.table(num); // [5, 10, 80]
```
