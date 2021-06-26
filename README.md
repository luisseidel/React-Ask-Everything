<h1 align="center">Let me ask!</h1>

<div>
    <img src="./src/assets/images/letmeask-white.png">
    <img src="./src/assets/images/letmeask-dark.png">
</div>

<hr>

<p align="center">
    <a href="#dart-propósito-e-funcionamento">Propósito e Funcionamento</a> &#xa0; | &#xa0; 
    <a href="#wrench-compatibilidade-e-requisitos">Tecnologias Utilizadas</a> &#xa0; | &#xa0; 
    <a href="#checkered_flag-executando">Executando o projeto localmente</a>
</p>

<hr>

<h2 align="center"> :dart: Propósito e Funcionamento</h2>

<p>
    Esta aplicação tem o intuito de criar salas de perguntas e respostas
    para que qualquer pessoa possa tirar dúvidas sobre qualquer assunto
    de seu interesse.
</p>

<hr>

<p>
Com uma conta Google, qualquer usuário poderá criar uma sala no estilo Perguntas & Respostas.
Outros usuários também terão a possibilidade de entrar em uma sala para poder realizar perguntas.
</p>
<p>
A pessoa que criou a sala é a administradora da mesma, tendo mais privilégios que o usuário comum que entrou na sala.
Ela poderá excluir respostas, marcar como respondidas, ou ainda, dar highlight na pergunta.
</p>
<p>
Os demais usuários poderão dar um like nas perguntas.
O compartilhamento da sala pode ser feito a partir do id dela, que se encontra no canto superior direito.
</p>

<p>
Foi implementado um switch de temas dark / light para quem não vive sem, como eu!
</p>

<hr>

<h2> :wrench: Tecnologias Utilizadas </h2>

<ul>
    <li>Windows</li>
    <li>Node</li>
    <li>Yarn</li>
    <li>VSCode</li>
    <li>React</li>
    <li>Classnames</li>
    <li>TypeScript</li>
</ul>

<h2> :checkered_flag: Instalação </h2>

<details>
<summary>Windows</summary>

    1. Download and install Chocolatey:
    Get-ExecutionPolicy
    Set-ExecutionPolicy AllSigned
    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

    2. Install nodejs
    choco install -y --force nodejs

    3. Install Yarn:
    npm install --global yarn

    3. Download this project as .zip and navigate to the folder where yout extract it
    cd /path/to/the/project

    4. Run:
    yarn start

</details>


<details>
<summary>Linux</summary>
    
    1. Install nodejs
    sudo apt-get install curl python-software-properties software-properties-common &&
    curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - &&
    sudo apt-get install nodejs 

    2. Install Yarn:
    sudo npm install yarn -g

    3. Download this project as .zip and navigate to the folder where yout extract it
    cd /path/to/the/project

    4. Run:
    yarn start

</details>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


Production link: [https://letmeask-c5ecc.web.app/](https://letmeask-c5ecc.web.app/)
