# Resumo de Métodos Nativos de Array em JavaScript

Este guia prático resume os principais métodos nativos do JavaScript para manipulação, filtragem, busca e transformação de arrays, com base nas categorias da disciplina.

---

### 1. Adicionando e Removendo Elementos
Estes métodos alteram diretamente o array original.

*   **`push()`**: Adiciona um ou mais elementos ao **final** do array e retorna o novo comprimento do array.
    ```javascript
    const frutas = ["Maçã"];
    frutas.push("Banana"); // ['Maçã', 'Banana']
    ```
*   **`pop()`**: Remove o **último** elemento do array e o retorna.
    ```javascript
    const frutas = ["Maçã", "Banana"];
    const ultima = frutas.pop(); // 'Banana' (frutas fica ['Maçã'])
    ```
*   **`unshift()`**: Adiciona um ou mais elementos ao **início** do array e retorna o novo comprimento do array.
    ```javascript
    const frutas = ["Banana"];
    frutas.unshift("Maçã"); // ['Maçã', 'Banana']
    ```
*   **`shift()`**: Remove o **primeiro** elemento do array e o retorna.
    ```javascript
    const frutas = ["Maçã", "Banana"];
    const primeira = frutas.shift(); // 'Maçã' (frutas fica ['Banana'])
    ```

---

### 2. Extração, Corte e Junção

*   **`slice(início, fim)`**: Extrai uma parte do array e retorna um **novo array** sem modificar o original. O índice `fim` não é incluído.
    ```javascript
    const letras = ["A", "B", "C", "D"];
    const parte = letras.slice(1, 3); // ['B', 'C']
    ```
*   **`splice(início, quantidadeDeletar, item1, item2...)`**: Altera o array original. Remove elementos de uma posição e/ou adiciona novos elementos no lugar.
    ```javascript
    const meses = ["Jan", "Mar"];
    meses.splice(1, 0, "Fev"); // Insere 'Fev' no índice 1 -> ['Jan', 'Fev', 'Mar']
    ```
*   **`concat()`**: Une dois ou mais arrays retornando um **novo array**, sem alterar os existentes.
    ```javascript
    const a1 = [1, 2];
    const a2 = [3, 4];
    const misturado = a1.concat(a2); // [1, 2, 3, 4]
    ```

---

### 3. Transformações e Filtragens

*   **`map()`**: Cria um **novo array** com os resultados da aplicação de uma função em cada elemento do array original.
    ```javascript
    const numeros = [1, 2, 3];
    const dobros = numeros.map(n => n * 2); // [2, 4, 6]
    ```
*   **`filter()`**: Cria um **novo array** contendo apenas os elementos que passarem no teste lógico da função fornecida.
    ```javascript
    const idades = [15, 22, 18, 14];
    const maiores = idades.filter(i => i >= 18); // [22, 18]
    ```

---

### 4. Buscas e Verificações

*   **`find()`**: Retorna o **primeiro elemento** do array que satisfizer a condição da função de teste. Caso contrário, retorna `undefined`.
    ```javascript
    const usuarios = [{id: 1, nome: "Ana"}, {id: 2, nome: "Alex"}];
    const alex = usuarios.find(u => u.nome === "Alex"); // {id: 2, nome: 'Alex'}
    ```
*   **`includes()`**: Verifica se um array contém um determinado elemento, retornando `true` ou `false`.
    ```javascript
    const itens = ["caderno", "caneta"];
    const temCaneta = itens.includes("caneta"); // true
    ```
*   **`every()`**: Testa se **todos** os elementos do array passam na condição lógica da função. Retorna `true` ou `false`.
    ```javascript
    const notas = [8, 9, 7];
    const todosAprovados = notas.every(n => n >= 6); // true
    ```
*   **`indexOf()`**: Retorna o **primeiro índice** no qual o elemento pode ser encontrado no array, ou `-1` se não estiver presente.
    ```javascript
    const nomes = ["Ana", "Carlos"];
    const indice = nomes.indexOf("Carlos"); // 1
    ```

---

### 5. Acumulação e Redução

*   **`reduce()`**: Executa uma função redutora sobre cada elemento do array, resultando em um **único valor de retorno** (como uma soma acumulada).
    ```javascript
    const precos = [10, 20, 30];
    const total = precos.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); // 60
    ```

---

### 6. Ordenação

*   **`sort()`**: Ordena os elementos do próprio array de forma alfabética (padrão) ou numérica (através de uma função de comparação) e o altera diretamente.
    ```javascript
    const letras = ["D", "A", "C"];
    letras.sort(); // ['A', 'C', 'D']
    
    const num = [10, 5, 80];
    num.sort((a, b) => a - b); // Ordenação numérica crescente -> [5, 10, 80]
    ```
