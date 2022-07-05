const tasksService = require('../services/tasksService');

const getAllTasksController = async (req, res) => {
  const tasks = await tasksService.getAllTasksService();

  return res.status(200).json(tasks);
};

const addTaskController = async (req, res) => {
  const { task } = req.body;

  const newTask = await tasksService.addTaskService(task);

  res.status(201).json(newTask);
}

const deleteTaskController = async (req, res) => {
  const { id } = req.params;

  await tasksService.deleteTaskService(id);

  return res.status(204).end();
}

const updateTaskController = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  const updatedTask = await tasksService.updateTaskService(id, status);

  res.status(200).json(updatedTask);
}

module.exports = {
  getAllTasksController,
  addTaskController,
  deleteTaskController,
  updateTaskController,
};
