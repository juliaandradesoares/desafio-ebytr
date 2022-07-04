const express = require('express');
const { getAllTasksController, addTaskController, deleteTaskController, updateTaskController, getById } = require('./controllers/tasksControllers');
const { validateTaskData, validateTaskId } = require('./middlewares/tasksMiddleware');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', getAllTasksController);

app.post('/', validateTaskData, addTaskController);

app.delete('/', validateTaskId, deleteTaskController);

app.put('/', validateTaskData, validateTaskId, updateTaskController);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
