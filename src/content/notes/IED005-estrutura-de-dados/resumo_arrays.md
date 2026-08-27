# Resumo de Funções Nativas de Arrays em JavaScript

Este documento apresenta um resumo explicativo dos principais métodos manipuladores de arrays em JavaScript, baseado nos códigos fornecidos.

---

## 1. push_pop.js (Inserção e Remoção de Elementos)

Este arquivo demonstra como adicionar e remover elementos no início e no final de um array.

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

### Explicação dos Métodos:
* **`.push()`**: Adiciona um ou mais elementos ao **final** do array.
* **`.unshift()`**: Adiciona um ou mais elementos no **início** do array e retorna o novo comprimento (`length`) do array.
* **`.shift()`**: Remove o **primeiro** elemento do array e o retorna.
* **`.pop()`**: Remove o **último** elemento do array e o retorna.

---

## 2. concat.js (Junção de Arrays)

Este arquivo demonstra como unir dois ou mais arrays em um novo array, sem modificar os originais.

```javascript
const array1 = [1, 2];
const array2 = [3, 4];

console.table(array1);

const juntado = array1.concat(array2);

console.table(juntado);
```

### Explicação do Método:
* **`.concat()`**: Combina dois ou mais arrays (ou valores) e retorna um **novo array** resultante dessa junção. Os arrays originais permanecem intactos.

---

## 3. slice.js (Fatiamento de Arrays)

Este arquivo demonstra como extrair uma parte (cópia superficial) de um array sem alterar o array original.

```javascript
const primeiro_semestre = [];
primeiro_semestre.push("Algoritmos e Lógica de Programação");
primeiro_semestre.push("Modelagem de Banco de Dados");
primeiro_semestre.push("Design Digital");
primeiro_semestre.push("Engenharia de Software I");
primeiro_semestre.push("Sistemas Operacionais e Redes");
primeiro_semestre.push("Desenvolvimento Web i");

console.table(primeiro_semestre);

let teste = primeiro_semestre.slice(1, 3);
// console.log(teste);
console.table(teste);
```

### Explicação do Método:
* **`.slice(início, fim)`**: Retorna uma cópia de parte de um array a partir de um índice inicial até um índice final (**não incluso**). No exemplo `slice(1, 3)`, ele extrai os elementos dos índices `1` e `2` ("Modelagem de Banco de Dados" e "Design Digital"). O array original não é modificado.

---

## 4. splice.js (Modificação Geral de Arrays)

Este arquivo demonstra como inserir elementos em qualquer posição específica do array (e opcionalmente remover outros).

```javascript
const meses = [];
meses.push("Jan");
meses.push("Mar");
meses.push("Abr");

console.table(meses);

meses.splice(1, 0, "Fev");

console.table(meses);
```

### Explicação do Método:
* **`.splice(índice, quantidadeParaRemover, item1, item2, ...)`**: Altera o conteúdo de um array removendo elementos existentes e/ou adicionando novos elementos. No exemplo `splice(1, 0, "Fev")`, o método vai até o índice `1`, remove `0` elementos e insere `"Fev"`, empurrando os elementos seguintes para a frente. Este método **modifica** o array original.
