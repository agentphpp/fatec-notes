# Aula: Orientação a Objetos e Práticas em PHP (ILP036)

## Overview
- Aula sobre conceitos básicos de Orientação a Objetos (OO) aplicada ao desenvolvimento de software.
- Explicação de objetos, classes, atributos, métodos, relacionamentos e representação UML.
- Exemplos práticos: e-commerce, gerenciamento de lixeiras inteligentes e formulários web com manipulação de arquivos em PHP.

## Objetivos Principais
- Compreender o que são objetos e classes.
- Identificar atributos e métodos necessários conforme requisitos.
- Entender relacionamentos (herança, associação) e encapsulamento.
- Aprender representação de classes em UML e diferenças práticas na implementação (PHP).

## Conceitos Fundamentais

| Conceito | Descrição |
|---|---|
| **Objeto** | Instância na memória que representa uma entidade do mundo real (dados temporários). |
| **Classe** | Molde/forma usada para criar objetos. Define a estrutura de atributos e métodos. |
| **Atributo / Propriedade** | Dados e características que definem o estado do objeto. |
| **Método** | Funções/ações associadas que o objeto pode executar. |
| **Construtor** | Método especial executado automaticamente ao instanciar a classe para inicializar atributos. |
| **Encapsulamento** | Mecanismo de controle de acesso a membros da classe (`public`, `protected`, `private`). |
| **UML** | Linguagem de modelagem visual com compartimentos para Nome da Classe, Atributos e Métodos. |

## Evolução da Sintaxe (PHP 7 vs PHP 8)

- **PHP 7:** Exigia a declaração de atributos no corpo da classe e atribuição manual (`$this->atributo =$parametro`) dentro do construtor.
- **PHP 8:** Introduziu **Promoted Properties** (atributos declarados diretamente nos parâmetros do `__construct`) e **Named Arguments** (passagem de parâmetros nomeados).

## Exemplos Práticos de Código

### Exemplo 1: Estrutura de Classes e Construtores

#### `primeira_classe/Cliente.class.php` (Abordagem PHP 7)
```php
<?php
class Cliente {
    // Atributos declarados no corpo da classe
    public string $nome;
    public string $cpf;
    public string $celular;

    // Método construtor manual
    public function __construct(string $nome, string $cpf, string $celular) {
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->celular = $celular;
    }
}
?>
```

#### `primeira_classe/Cliente1.class.php` (Abordagem PHP 8)
```php
<?php
class Cliente1 {
    // PHP 8: Construtor promovido com valores padrão
    public function __construct(
        public string $nome = "", 
        public string $cpf = "", 
        public string $celular = ""
    ) {}
}
?>
```

#### `primeira_classe/index.php` (Instanciação e Named Arguments)
```php
<?php 
require_once "Cliente.class.php";
require_once "Cliente1.class.php";

// Construtor manual (passagem de parâmetros por posição)
$cliente1 = new Cliente("Paulo Alves", "077.777.777-77", "(14)9888282");

// Construtor PHP 8 com valores padrão por posição
$cliente2 = new Cliente1("Pedro", "999999999-99", "(45)767676-3212");

// PHP 8: Passagem de parâmetro por NOME (Named Arguments)
$cliente3 = new Cliente1(celular: "(14)2992-1828");

echo "<pre>";
var_dump($cliente1);
var_dump($cliente2);
var_dump($cliente3);
echo "</pre>";
?>
```

### Exemplo 2: Formulário com Upload de Arquivo e Pré-visualização jQuery

#### `Produto.class.php`
```php
<?php
class Produto {
    public function __construct(
        public string $nome = "",
        public float $preco = 0.00,
        public string $descricao = "",
        public string $imagem = ""
    ) {}
}
?>
```

#### `formulario.php`
```html
<?php
require_once "Produto.class.php";
$msg = array("", "", "", "");

if ($_POST) {
    $erro = false;
    if (empty($_POST["nome"])) {
        $msg[0] = "Preencha o campo nome!";
        $erro = true;
    }
    if ($_FILES["imagem"]["name"] == "") {
        $msg[3] = "Selecione uma imagem!";
        $erro = true;
    }
    if (!$erro) {
        $produto = new Produto($_POST["nome"]);
    }
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Produto</title>
    <style>
        .error-message { color: red; font-size: 11px; }
    </style>
</head>
<body>
    <h1>Cadastrar Produto</h1>

    <!-- enctype="multipart/form-data" é obrigatório para upload de arquivos -->
    <form action="#" method="post" enctype="multipart/form-data">
        <label for="nome">Nome: </label>
        <input type="text" name="nome">
        <div class="error-message"><?php echo $msg[0]; ?></div>
        <br><br>

        <label for="preco">Preço: </label>
        <input type="text" name="preco">
        <div class="error-message"><?php echo $msg[1]; ?></div>
        <br><br>    

        <label for="descricao">Descrição: </label>
        <textarea name="descricao"></textarea>
        <div class="error-message"><?php echo $msg[2]; ?></div>
        <br><br>    

        <label for="imagem">Imagem: </label>
        <input type="file" name="imagem" onchange="mostrar(this)">
        <div class="error-message"><?php echo $msg[3]; ?></div>
        <br><br>    

        <!-- Pré-visualização da imagem -->
        <img src="" id="img" alt="Pré-visualização" style="display: none;">
        <br><br>    

        <input type="submit" value="Cadastrar">
    </form>

    <script src="[https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js](https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js)"></script>
    <script>
    function mostrar(img) {
        if (img.files && img.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function(e) {
                $('#img')
                    .attr('src', e.target.result)
                    .width(700)
                    .height(200)
                    .show();
            };
            
            reader.readAsDataURL(img.files[0]);
        }
    }
    </script>
</body>
</html>
```

## Action Items & Próximos Passos
- Modelar classes e métodos em UML antes de iniciar a codificação do projeto.
- Adicionar a propriedade `enctype="multipart/form-data"` em formulários que utilizem uploads.
- Priorizar a sintaxe do PHP 8 (promoted properties) para manter o código limpo e conciso.