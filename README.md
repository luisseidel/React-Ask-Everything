<h1 align="center">Let me ask!</h1>

<div align="center">
    <img width="460" height="300" src="./src/assets/images/letmeask.png">
</div>

<hr>

<p align="center">
    <a href="#dart-propósito-e-funcionamento">Propósito e Funcionamento</a> &#xa0; | &#xa0; 
    <a href="#wrench-compatibilidade-e-requisitos">Compatibilidade & Requisitos</a> &#xa0; | &#xa0; 
    <a href="#checkered_flag-instalação">Instalação & execução do projeto localmente</a> &#xa0; | &#xa0; 
</p>

<hr>
## :dart: Propósito e Funcionamento
<h2 align="center"> :dart: Propósito e Funcionamento</h2>

<h3 align="left">Propósito e explicações</h3>
<p>
    Esta aplicação tem o intuito de criar salas de perguntas e respostas
    para que qualquer pessoa possa tirar dúvidas sobre qualquer assunto
    de seu interesse.
</p>
<br>
<hr>
<br>
<h3 align="left">Funcionamento da aplicação</h3>
<p>
    Com uma conta Google, qualquer usuário poderá criar uma sala no estilo Perguntas & Respostas.
    Outros usuários também terão a possibilidade de entrar em uma sala para poder realizar perguntas.
    A pessoa que criou a sala é a administradora da mesma, tendo mais privilégios que o usuário comum que entrou na sala.
    Ela poderá excluir respostas, marcar como respondidas, ou ainda, dar highlight na pergunta.
    Os demais usuários poderão dar um like nas perguntas.
    Para poder compartilhar sua sala com os demais usuários, o criador da sala
    ou até os próprios usuários poderão compartilhar o id dela, que se encontra no canto superior direito.
</p>
<hr>

<details>
<summary>Instalação</summary>
this is hidden
</details>

## :wrench: Compatibilidade e Requisitos


## :checkered_flag: Instalação ##

### Instalando softwares e dependências
1. Download and install Chocolatey for Windows:
```
Get-ExecutionPolicy

// if the output of this method is Restricted then:
Set-ExecutionPolicy AllSigned

// install chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

2. Install nodejs
```
choco install -y --force nodejs
```

3. Install Yarn:
```
npm install --global yarn
```

4. Run:
```
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

