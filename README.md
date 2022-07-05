# desafio-ebytr

Esta é a resolução de um desafio proposto pela Trybe. O desafio consistia em desenvolver um sistema para acompanhamento de tarefas, capaz de auxiliar pessoas a se organizarem e terem mais produtividade. As funcionalidades criadas para essa aplicação foram:

- Visualizar a lista de tarefas
- Inserir uma nova tarefa na lista
- Remover uma tarefa da lista
- Atualizar uma tarefa da lista
- A tarefa deve possuir um status editável: pendente, em andamento ou pronto

Os requisitos técnicos seguidos:

- Front-End em React;
- Back-End em NodeJS, com MySQL;
- Arquitetura em camadas;

Para rodar o projeto, siga os seguintes passos:

1-Clone o repositório</br>
git clone git@github.com:juliaandradesoares/desafio-ebytr.git

2-Entre na pasta backend</br>
cd desafio-ebytr/desafio-ebytr/backend

3-Instale as dependências do projeto</br>
npm install

4-Crie o banco de dados (o arquivo ToDoList.sql possui a query para a criação e população do banco de dados)

5-Renomeie o arquivo .envExample para .env e atualize neste arquivo as variáveis de ambiente com as informações do banco que foi criado no passo anterior

6-Rode a aplicação backend</br>
npm run dev

7-Abra um novo terminal (mantenha o terminal criado anteriormente aberto, com a aplicação de backend rodando)

8-Entre na pasta de frontend</br>
cd ../frontend

9-Instale as dependências do projeto</br>
npm install

10-Dentro de src/helpers, altere o arquivo urlFetch.js com a url onde o banco de dados criado no passo 4 está rodando

11-Inicie a aplicação frontend</br>
npm start
