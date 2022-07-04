const express = require('express');
const { getAllTasksController, addTaskController } = require('./controllers/tasksControllers');
const { validateTaskData } = require('./middlewares/tasksMiddleware');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', getAllTasksController);

app.post('/', validateTaskData, addTaskController);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
