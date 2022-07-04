const tasksService = require('../services/tasksService');

const getAllTasksController = async (req, res) => {
  const tasks = await tasksService.getAllTasksService();

  return res.status(200).json(tasks);
};

const addTaskController = async (req, res) => {
  const { task, status } = req.body;

  const newTask = await tasksService.addTaskService(task, status);

  res.status(201).json(newTask);
}

const deleteTaskController = async (req, res) => {
  const { id } = req.body;

  await tasksService.deleteTaskService(id);

  return res.status(204).end();
}

const updateTaskController = async (req, res) => {
  const { id, task, status } = req.body;

  const updatedTask = await tasksService.updateTaskService(id, task, status);

  res.status(200).json(updatedTask);
}

module.exports = {
  getAllTasksController,
  addTaskController,
  deleteTaskController,
  updateTaskController,
};
