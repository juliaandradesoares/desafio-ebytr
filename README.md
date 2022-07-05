# desafio-ebytr

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
