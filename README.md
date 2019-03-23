# simple-tabs-js
<a><img src="https://img.shields.io/npm/l/simple-tabs-js.svg" alt="Licence"></a> <a><img src="https://img.shields.io/github/package-json/v/leandrocesarr/simple-tabs-js.svg" alt="Version"></a> <a><img src="https://img.shields.io/github/last-commit/LeandroCesarr/simple-tabs.js.svg" alt="Last commit"></a>

Uma maneira rapida de implementar tabs em seu projeto web!!! <br />
[Demo Page](https://github.com/LeandroCesarr/simple-tabs.js) (Em desenvolvimento)

1. [Instalação](#instalação)
2. [Importação](#importação)
3. [Uso](#uso)

### Instalação
Usando o NPM, instale e salve-o em seu package.json.

```bash
$ npm install simple-tabs-js
```

### Importação
 -  ES6
 Importe os arquivos necessarios.

```es6
// importe simple-tabs-js no main.js ou como precisar

import SimpleTabs from 'path/to/simple-tabs-js'
```
```scss
// importe simple-tabs-js no main.scss ou como precisar
@include 'path/to/simple-tabs-js/dist/bundle';
```

 - Em uma projeto basico, baixe os arquivos e importe no final do documento: <br />
 [Download CSS](dist/bundle.css) [Download JS](dist/simpletabsjs.min.js)

 ```html
  <link rel="stylesheet" href="bundle.css">
  <script src="simpletabsjs.min.js"></script>
```

### Uso
#### 1 - Marcação HTML
A unica coisa que o simple-tabs necessita é uma estrutura HTML (exemplificada abaixo).
  - Por questão de semântica, a estrutura usa uma lista podendo ser ordenada ou não, contendo dentro de casa item uma âncora
    para navegação das tab.
  - Cada link deverá tem um `href` apontando para uma `div` através do `id`, como mostrado no exemplo.
  - "tab-default" será a primeira tab mostrada quando a pagina carregar, você podendo escolher qualquer uma da lista.

```html
<div minha-tab-fantastica> // aqui, esse atributo, podera ser da sua escolha, sendo usado posteriormente
  <ol tab-list>
    <li tab tab-default><a href="#eenie">Eenie</a></li>
    <li tab><a href="#meenie">Meenie</a></li>
    <li tab><a href="#miney">Miney</a></li>
    <li tab><a href="#mo">Mo</a></li>
  </ol>
  <div content-list>
    <div id="eenie">Eenie</div>
    <div id="meenie">Meenie</div>
    <div id="miney">Miney</div>
    <div id="mo">Mo</div>
  </div>
</div>
```
#### 2 - Inicialize o simpls-tabs
Em seu arquivo JS, inicialize o simple-tabs passando o atributo definido anteriormente.

```ES6
const minhaTabFantastica = new SimpleTabs('[minha-tab-fantastica]') 
```
#### 3 - Opções
Você pode passar um Objeto de configurações para alterar o estilo e comportamento padrão.
Abaixo verá a configuração padrão.

```ES6
const minhaTabFantastica = new SimpleTabs('[minha-tab-fantastica]', {
  listStyle: default,
  minHeight: false,
  customHeight: '',
}) 
```
- `listStyle` é o estilo pre-definido, estando abaixo a lista com as opções atualmente disponiveis:
   - `default` // Somente o CSS necesário para o funcionamento.
   - `1`        // Tabs Verticais.
   
- `minHeight` é um "minHeight" colocado para nao interfeir ou "quebrar" seu projeto, sendo o tamanho da maior DIV dentro da estrutua, seu valor é Boleano.

- `customHeight` como o nome ja diz, é um valor customizavel de altura da estrutura, por padrão ele é vazio, precisando caso use, passar em String o valor e a medida, Exemplo: `customHeight: '100px'`.

#### 4 - Personalização (Divirta-se !!!)

Você pode adicionar classes a vontade na estrutura, apenas tomando cuidado para nao sobrescrever regras essenciais para o funcionamento, mas para isso será meio dificil.

```html
<div minha-tab-fantastica>
  <ol tab-list>
    <li class="minha-tab" tab tab-default><a class="meu-link" href="#eenie"></a></li>
    <li class="minha-tab" tab><a class="meu-link" href="#meenie"></a></li>
    <li class="minha-tab" tab><a class="meu-link" href="#miney"></a></li>
    <li class="minha-tab" tab><a class="meu-link" href="#mo"></a></li>
  </ol>
  <div content-list>
    <div class="minha-div" id="eenie">Eenie</div>
    <div class="minha-div" id="meenie">Meenie</div>
    <div class="minha-div" id="miney">Miney</div>
    <div class="minha-div" id="mo">Mo</div>
  </div>
</div>
```



### Licença
[MIT](https://opensource.org/licenses/MIT). © 2019 Leandro C. Silva

[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

