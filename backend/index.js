const express = require('express');
const { getAllTasksController } = require('./controllers/tasksControllers');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', getAllTasksController);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
