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

module.exports = {
  getAllTasksController,
  addTaskController,
};
