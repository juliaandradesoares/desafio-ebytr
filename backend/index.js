const express = require('express');
const cors = require('cors');
const { getAllTasksController, addTaskController, deleteTaskController, updateTaskController, getById } = require('./controllers/tasksControllers');
const { validateTask, validateTaskId, validateStatus } = require('./middlewares/tasksMiddleware');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', getAllTasksController);

app.post('/', validateTask, addTaskController);

app.delete('/:id', validateTaskId, deleteTaskController);

app.put('/:id', validateStatus, validateTaskId, updateTaskController);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
